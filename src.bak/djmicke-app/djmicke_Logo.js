import { Element as Elm } from '/node_modules/@polymer/polymer/polymer-element.js'
import { html as html } from '/node_modules/@polymer/polymer/lib/utils/html-tag.js'
// let ISizeable = ((SuperClass) => class ISizeable extends SuperClass { get size () { } });
export default ((template_string,style) => {
  let __template = html`
      <style>${style}</style>
      ${template_string}
  `
  class DjmickeLogo extends Elm {
    static get importPath() {
      return `/img`
    }
    static get is() { return 'djmicke-logo'}
    static get template() { return __template }
    static get properties() {
      let props = {
        kind: {
          type: String,
          observer: '_kindChanged',
          value: "image"
        },
        size: {
          type: String,
          observer: '_sizeChanged',
          value: "full"
        },
        logotext: {
          type: String,
          value: "micke",
          observer: '_logoTextChanged'
        },
        logolink: {
          type: String,
          value: "/"
        },
        source: {
          type: String,
          computed: '_computedImgSrc(size)'
        }
      }
      return props
    }
    connectedCallback() {
      super.connectedCallback();
      this._kindChanged(undefined, this.kind);
      console.log(this.size)
      if (this.size) {
        this._sourceChanged(undefined,this._computedImgSrc(this.size))
      }
    }
    _computedImgSrc(size) {
      console.log(size, this.size)
      return `${this.constructor.importPath}/${size}-logo-white.png`
    }
    _sizeChanged(oldSize, newSize) {
      //change the size somehow.
      // this really should update itself, really.
    }
    _kindChanged(oldKind, newKind) {
      // "text" or "image"
      switch (newKind) {
        case "text":
          // hide logoimage
          this.hideLogoImage()
          break;
        case "image":
          // hide logoType
          this.hideLogoType()
          break;
        default:
          this.hideLogoType();
      }
    }
    _sourceChanged(oldSource, newSource) {
      this.$.logoimage.src = newSource
    }
    _logoTextChanged(oldTxt, newTxt) {
      // do we need to react to this??
      if (!newTxt) {
        this.hideLogoType();
      }
    }
    hideLogoType() {
      this.shadowRoot.querySelector(".logotype").classList.add("hide")
      this.shadowRoot.querySelector(".logo").classList.remove("hide")
    }
    hideLogoImage() {
      this.shadowRoot.querySelector(".logo").classList.remove("hide")
      this.shadowRoot.querySelector(".logotype").classList.add("hide")
    }
  }

  customElements.define(DjmickeLogo.is, DjmickeLogo);
  return DjmickeLogo
})(`<a class="logolink" href$="[[logolink]]"><img id="logoimage" src="[[source]]" class="logo" alt="dj micke logo"><h1 class="logotype">{{logotext}}</h1></a>`,`
      :host {
        --logo-height: calc( var(--header-height) - .25em );
        height: var(--logo-height);
        margin-left: .75em;
      }
      .hide { display: none; }
      a, a.visited, a.hover, a.active {
        text-decoration: none;
        color: rgba(255,255,255,1);
      }
      h1.logotype {
        font-size: var(--fs-md);
        font-family: var(--font-disp);
      }
      img {
        height: var(--logo-height);
        width: auto;
      }
`)


