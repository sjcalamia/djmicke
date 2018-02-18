import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'

export default ((template_string, style) => {
  class DjmickeCalendar extends Elm {
    static get template() { return `
        <style>${style}</style>
        ${template_string}
      `
    }
  }
  customElements.define("djmicke-calendar-entry",DjmickeCalendar)
  return DjmickeCalendar
})(``,``)

