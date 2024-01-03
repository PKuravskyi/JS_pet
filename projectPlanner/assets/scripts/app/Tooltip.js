import { Component } from './Component.js'

export class Tooltip extends Component {
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
