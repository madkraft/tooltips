export default class TeleTooltip {
  constructor (target, content) {
    this.target = document.querySelector(target)
    this.content = content
    this.opened = false
    this._init()
  }

  _init () {
    this._registerEventHandlers()
  }

  _registerEventHandlers () {
    this.target.addEventListener('mouseenter', this._handleMouseEnter.bind(this))
    this.target.addEventListener('mouseleave', this._handleMouseLeave.bind(this))
  }

  _handleMouseEnter () {
    this.show()
  }

  _handleMouseLeave () {
    this.hide()
  }

  _createTooltip () {
    let div = document.createElement('div')
    div.classList.add('js-tooltip', 'tooltip')
    return div
  }

  _appendTooltip () {
    let element = this._createTooltip()
    element.innerHTML = this.content
    this.target.appendChild(element)
  }

  _removeTooltip () {
    let tooltip = this.target.querySelector('.js-tooltip')
    this.target.removeChild(tooltip)
  }

  show () {
    this.opened = true
    this._appendTooltip()
  }

  hide () {
    this.opened = false
    this._removeTooltip()
  }

}
