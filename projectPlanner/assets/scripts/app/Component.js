export class Component {
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
