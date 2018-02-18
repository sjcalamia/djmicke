import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'

/******************************************
 * <djmicke-example>
 *
 * Description of why you want to use this.
 * When writing this, it may be helpful to
 * consider why you are making it in the
 * first place.
 *
 * @prop1 [ String ]: prop1 description
 * @prop2 [ String ]: prop2 description
 *
 */
export default ((template_string, style) => {
  let __template = `
    <style>${style}</style>
    ${template_string}
  `
  class DjmickeExample extends Elm {
    static get template() { return __template }
    static get properties() {
      let props = {
        prop1: {
          type: String,
          value: '',
          observer: '_prop1Changed'
        },
        prop2: {
          type: String,
          computed: '_computedProp2(prop1)'
        }
      }
    }
    _prop1Changed(oldVal, newVal) { /* Do something on change */ }
    _computedProp2(val) { return val }

  }
  customElements.define("djmicke-example",DjmickeExample)
  return DjmickeExample
})(``,``)

