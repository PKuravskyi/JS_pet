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
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    )
  }
}

class Tooltip extends Component {
  constructor(projectItem, closeNotifierFunction) {
    super('active-projects', true)
    this.projectItem = projectItem
    this.closeNotifier = closeNotifierFunction
    this.create(projectItem)
  }

  closeTooltip() {
    this.hide()
    this.closeNotifier()
  }

  create(projectItem) {
    const tooltipEl = document.createElement('div')
    tooltipEl.className = 'card'
    tooltipEl.textContent = `More info of '${
      projectItem.querySelector('h2').innerText
    }' project`
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
  }

  showMoreInfoHandler(projectItem) {
    if (this.hasActiveTooltip) {
      return
    }
    const tooltip = new Tooltip(
      projectItem,
      () => (this.hasActiveTooltip = false)
    )
    tooltip.show()
    this.hasActiveTooltip = true
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
