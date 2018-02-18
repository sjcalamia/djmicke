import { Element as Elm } from '/node_modules/@polymer/polymer/polymer-element.js'
import { default as DjmickeLogo } from '/src/djmicke-app/djmicke_Logo.js'

/******************************************
 * <djmicke-appbar>
 *
 * More than a header, it's the DJ Micke App Bar
 * It will serve to manage the state for the application.
 * ViewState, especially. While the app handles routing,
 * the appbar should handle the menu creation, and the sub state
 * of the app.
 *
 * it takes no attributes, and instead is populated through
 * fetch to menu.json.  It doesn't have to be this way!
 * We could pre-populate the menu with json data in the
 * menu attribute, if we wanted, but that seems messy.
 * Plus a service worker can push this down instead.
 */

export default ((template_string, style) => {
  let __template = `
    <style>${style}</style>
    ${template_string}
  `
  class DjmickeAppbar extends Elm {
    static get template() { return __template }
    static get properties() { return {
      menu: {
        type: Object,
        value: ()=>({}),
        observer: '_menuChanged'
      }
    } }
    _fetchMenu() {
      let __menu = fetch("/data/menu.json").then(r=>r.json()).then(
        (data)=>{
          this.menu = data
          return data
        }
      )
      return __menu
    }
    _menuChanged(newMenu, oldMenu) {
      // update the menu html
      console.log(`_menuChanged`,oldMenu,newMenu)
    }
    constructor() {
      super()
      this._fetchMenu()
    }
  }
  customElements.define("djmicke-appbar", DjmickeAppbar)
  return DjmickeAppbar;
})(`
  <slot name="drawer"></slot>
  <djmicke-logo class="header" kind="image" size="full" logolink="/" logotext="micke"></djmicke-logo>
  <slot name="left"></slot>
  <slot name="center"></slot>
  <slot name="right"></slot>
`,`
  :host {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    height: fit-content;
    width: 100%;
    }
  :host.sticktotop {
    position: sticky;
    top: 0px;
  }
  :host djmicke-logo.header {
    flex: 1 1 auto;
    text-align: left;
    mix-blend-mode: exclusion;
  }
  :host ::slotted(*) {
    overflow: hidden;
  }
  :host ::slotted([slot=left]) {
    flex: none;
    flex: 1 1 auto;
    display: flex;
    text-align: left;
    justify-content: flex-start;
    mix-blend-mode: exclusion;
  }
  :host ::slotted([slot=center]) {
    flex: 1 1 auto;
    display: flex;
    text-align: center;
    align-items: baseline;
    justify-content: flex-start;
    mix-blend-mode: exclusion;
  }
  :host ::slotted([slot=right]) {
    flex: 0 0 auto;
    flex: none;
    text-align: right;
  }
  :host([hidden]) {
    display: none;
  }
  :host([disabled]) {
    pointer-events: none !important;
    cursor: default !important;
    opacity: var(--nebula-ui-disabled-opacity, 0.6) !important;
}
`)
