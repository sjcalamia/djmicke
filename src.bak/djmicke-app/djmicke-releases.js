import { Element as Elm } from '/node_modules/@polymer/polymer/polymer-element.js'
import { html as html } from '/node_modules/@polymer/polymer/lib/utils/html-tag.js'

export default ((template_string, style) => {
  class DjmickeReleases extends Elm {
    static get template() {
      this.__template = this.__template ? this.__template : html`
        <style>${style}</style>
        ${template_string}
      `
      return this.__template
    }

  }
  customElements.define("djmicke-releases",DjmickeReleases)
  return DjmickeReleases
})(``,``)

