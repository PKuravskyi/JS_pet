class DOMHelper {
  static clearEventListener(element) {
    const clonedEl = element.cloneNode(true)
    element.replaceWith(clonedEl)
    return clonedEl
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId)
    const destinationEl = document.querySelector(newDestinationSelector)
    destinationEl.append(element)
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElementId = document.getElementById(hostElementId)
    } else {
      this.hostElementId = document.body
    }
    this.insertBefore = insertBefore
  }

  hide() {
    if (this.element) {
      this.element.remove()
    }
  }

  show() {
    this.hostElementId.insertAdjacentElement(
      this.insertBefore ? 'beforeend' : 'beforeend',
      this.element
    )
  }
}

class Tooltip extends Component {
  constructor(projectItem, closeNotifierFunction, tooltipText, hostElementId) {
    super(hostElementId, true)
    this.projectItem = projectItem
    this.closeNotifier = closeNotifierFunction
    this.tooltipText = tooltipText
    this.create(projectItem)
  }

  closeTooltip() {
    this.hide()
    this.closeNotifier()
  }

  create(projectItem) {
    const tooltipEl = document.createElement('div')
    tooltipEl.classList.add('card', 'tooltip')
    const tooltipTemplate = document.getElementById('tooltip')
    const tooltipBody = document.importNode(tooltipTemplate.content, true)
    tooltipBody.querySelector('h2').textContent =
      projectItem.querySelector('h2').innerText
    tooltipBody.querySelector('p').textContent = this.tooltipText
    tooltipEl.append(tooltipBody)

    const hostElPosLeft = this.hostElementId.offsetLeft
    const hostElPosTop = this.hostElementId.offsetTop
    const hostElHigh = this.hostElementId.clientHeight
    const parentElScrolling = this.hostElementId.parentElement.scrollTop

    const xAxis = hostElPosLeft + 20
    const yAxis = hostElPosTop + hostElHigh - parentElScrolling - 10

    tooltipEl.style.position = 'absolute'
    tooltipEl.style.left = xAxis + 'px'
    tooltipEl.style.top = yAxis + 'px'

    tooltipEl.addEventListener('click', this.closeTooltip.bind(this))
    this.element = tooltipEl
    document.body.append(tooltipEl)
  }
}

class ProjectItem {
  hasActiveTooltip = false

  constructor(id, updateProjectListsFunction, projectStatus) {
    this.id = id
    this.updateProjectListsHandler = updateProjectListsFunction
    this.projectStatus = projectStatus
    this.connectMoreInfoButton()
    this.connectSwithButton(projectStatus)
    this.connectDrag()
  }

  showMoreInfoHandler(projectItem) {
    if (this.hasActiveTooltip) {
      return
    }
    const projectEl = document.getElementById(this.id)
    const tooltipText = projectEl.dataset.extraInfo
    const tooltip = new Tooltip(
      projectItem,
      () => (this.hasActiveTooltip = false),
      tooltipText,
      this.id
    )
    tooltip.show()
    this.hasActiveTooltip = true
  }

  connectDrag() {
    const item = document.getElementById(this.id)
    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id)
      event.dataTransfer.effectAllowed = 'move'
    })
  }

  connectMoreInfoButton() {
    const projectItemEl = document.getElementById(this.id)
    const moreInfoBtn = projectItemEl.querySelector('button:first-of-type')
    moreInfoBtn.addEventListener(
      'click',
      this.showMoreInfoHandler.bind(this, projectItemEl)
    )
  }

  connectSwithButton(projectStatus) {
    const projectItemEl = document.getElementById(this.id)
    let switchStatusBtn = projectItemEl.querySelector('button:last-of-type')
    switchStatusBtn = DOMHelper.clearEventListener(switchStatusBtn)
    switchStatusBtn.textContent =
      projectStatus === 'active' ? 'Finish' : 'Activate'
    switchStatusBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    )
  }

  update(updateProjectListsFunction, projectStatus) {
    this.updateProjectListsHandler = updateProjectListsFunction
    this.connectSwithButton(projectStatus)
  }
}

class ProjectsList {
  projects = []

  constructor(projectStatus) {
    this.projectStatus = projectStatus
    const projectItems = document.querySelectorAll(
      `#${projectStatus}-projects li`
    )
    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(
          projectItem.id,
          this.switchProject.bind(this),
          this.projectStatus
        )
      )
    }
    this.connectDroppable()
  }

  connectDroppable() {
    const list = document.querySelector(`#${this.projectStatus}-projects ul`)

    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault()
      }
      list.parentElement.classList.add('droppable')
    })

    list.addEventListener('dragover', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault()
      }
    })

    list.addEventListener('dragleave', event => {
      if (
        event.relatedTarget.closest(`#${this.projectStatus}-projects ul`) !==
        list
      ) {
        list.parentElement.classList.remove('droppable')
      }
    })

    list.addEventListener('drop', event => {
      const projectID = event.dataTransfer.getData('text/plain')
      if (this.projects.find(p => p.id === projectID)) {
        return
      }
      document
        .getElementById(projectID)
        .querySelector('button:last-of-type')
        .click()
      list.parentElement.classList.remove('droppable')
    })
  }

  setSwitchProjectHandler(switcHandlerFunction) {
    this.switchHandler = switcHandlerFunction
  }

  addProject(project) {
    this.projects.push(project)
    DOMHelper.moveElement(project.id, `#${this.projectStatus}-projects ul`)
    project.update(this.switchProject.bind(this), this.projectStatus)
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find(project => project.id === projectId))
    this.projects = this.projects.filter(project => project.id !== projectId)
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectsList('active')
    const finishedProjectsList = new ProjectsList('finished')
    activeProjectsList.setSwitchProjectHandler(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    )
    finishedProjectsList.setSwitchProjectHandler(
      activeProjectsList.addProject.bind(activeProjectsList)
    )
  }
}

App.init()
