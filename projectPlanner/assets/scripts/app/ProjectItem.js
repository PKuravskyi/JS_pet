import { DOMHelper } from '../utility/DOMHelper.js'

export class ProjectItem {
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
    import('./Tooltip.js').then(module => {
      const tooltip = new module.Tooltip(
        projectItem,
        () => (this.hasActiveTooltip = false),
        tooltipText,
        this.id
      )
      tooltip.show()
      this.hasActiveTooltip = true
    })
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
