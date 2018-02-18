import { Element as Elm } from '/node_modules/@polymer/polymer/polymer-element.js';
import { default as DjmickeAppbar } from '/src/djmicke-app/djmicke-appbar.js'
import { default as DjmickeInfo } from '/src/djmicke-app/djmicke-info.js'
import { default as DjmickeCalendar } from '/src/djmicke-app/djmicke-calendar.js'
/* PolymerElement = require('../../bower_components/polymer/polymer-element.js'); */
/**
* @customElement
* @polymer
*/

export default ((template_string, style)=>{
  let __template = `
    <style>${style}</style>
    ${template_string}
  `
  class DjmickeApp extends Elm {
    static get is() { return 'djmicke-app'; }
    static get template() { return __template }
    static get properties() {
      return {
        siteName: {
          type: String,
          value: 'micke'
        },
        routes: {
          type: Object,
          value: ()=>({}),
          observer: '_routeChanged'
        }
      }
    }
    connectedCallback() {
      super.connectedCallback()
      console.log(this)
    }
    _routeChanged(oldRoute, newRoute) {
      return newRoute
    }
  } // END OF CLASS

  customElements.define(DjmickeApp.is, DjmickeApp)

  return DjmickeApp

})(`
  <slot name="notification"></slot>
  <djmicke-appbar>
    <slot slot="left" name="appbar_left"></slot>
  </djmicke-appbar>
  <section id="main_content"><canvas id="main_canvas" class="hide hidden"></canvas>
    <slot name="announcement"></slot>
    <slot name="content"></slot>
  </section>
  <footer id="app_footer" class="footer">
    <slot name="footer"></slot>
  </footer>
`, `
  :host {
    display: block;
    font-family: var(--font-title);
    color: rgba(245,245,245,1);
    height: 100%;
  }
  h1, h2 {
    font-family: var(--font-title);
    font-size: var(--fs-xxl);
  }
  h3, h4, h5 {
    font-family: var(--font-disp);
    font-size: var(--fs-lg);
  }
  a, a.visited, a.hover, a.active {
    color: rgba(245,245,245,1);
    text-decoration: none;
  }
  :host djmicke-appbar,
  :host ::slotted([slot=header]) {
    height: var(--header-height);
    width: 100%;
    position: sticky;
    top: 0px;
    background:
      linear-gradient(to left, rgba(67,67,67,.5) 0%, rgba(0,0,0,1) 100%),
      url("/img/bnwmicke.jpg"),
      linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%),
      radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%),
      linear-gradient(to right, black 0%, #434343 100%);
    background-blend-mode:
      multiply,
      difference,
      overlay,
      difference,
      normal;
    background-size: cover;
    background-position: 0 37%;
    z-index: 9999;
  }
  :host #main_content {
    position: relative;
    height: 100%;
    margin-bottom: var(--footer-height)
  }
  :host #main_content:after {
    content: "";
    display: block;
    height: var(--footer-height);
  }
  :host #main_content canvas {
    display: none;
  }
  :host ::slotted([slot=footer]), footer {
    height: var(--footer-height);
    width: 100%;
    position: sticky;
    bottom: 0px;
    background:
      linear-gradient(to left, rgba(67,67,67,.5) 0%, rgba(0,0,0,1) 100%),
      url("/img/bnwmicke.jpg"),
      linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%),
      radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%),
      linear-gradient(to right, black 0%, #434343 100%);
    background-blend-mode:
      multiply,
      difference,
      overlay,
      difference,
      normal;
    background-size: cover;
    background-position: 0 37%;
  }
  `
)

