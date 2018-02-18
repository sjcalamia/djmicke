import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'
import { html as html } from '../../node_modules/@polymer/polymer/lib/utils/html-tag.js'

export default ((template_string, style) => {
  class DjmickeReleases extends Elm {
    static get template() { return `
        <style>${style}</style>
        ${template_string}
      `
    }

  }
  customElements.define("djmicke-releases",DjmickeReleases)
  return DjmickeReleases
})(``,``)

