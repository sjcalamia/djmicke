import { Element as Elm } from '/node_modules/@polymer/polymer/polymer-element.js'
import { html as html } from '/node_modules/@polymer/polymer/lib/utils/html-tag.js'

export default ((template_string, style) => {
  class DjmickeCalendar extends Elm {
    static get template() {
      this.__template = this.__template ? this.__template : html`
        <style>${style}</style>
        ${template_string}
      `
      return this.__template
    }

  }
  customElements.define("",DjmickeCalendar)
  return DjmickeCalendar
})(``,``)

