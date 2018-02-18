import { DjmickApp } from './djmicke-app/djmicke-app.js';

export default (()=>{

/* Google Analytics Code */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-113018662-1');

/* Polymer Options */
// I forget what this is all about, but it seemed required in the Poly2.0 days...
// Thinking about this, how would it not get overridden by the Polymer import?
// ...while I'm not importing to the Polymer name, anything that does would install it
// to local scope which would supercede the global.
//
  window.Polymer = window.Polymer || {
    rootPath: "/",
    importPath: "/"
  }
  return window.Polymer
})()

  /*
  // window.WebComponents is usually not true yet, but will be shortly. Let's try a different approach, after we fix this.
let wcl = window.WebComponents ? window.WebComponents.ready ? (()=>{})() : document.scripts.wcl || document.scripts[0].insertAdjacentElement('beforeBegin',(() => {
  // webcomponentloader is not set up for module style inclusion. And we need to ensure that it's loaded before all the other scripts are...
  // I guess <script src=url> wasn't good enough...
  for (let script in document.scripts) {
    let s = document.scripts[script]
    let src = s.src
    if (src && src.indexOf("webcomponents") > 0) {
      return s
      break
    }
  }
  let s = document.createElement("script")
  s.id ="wcl"
  s.datapromise = fetch("/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js").then((r)=>r.text()).then((tx) => {
    if (!window.WebComponents.ready) {
      s.innerHTML = tx
    } else {
      document.removeElement(s)
    }
    wclLoaded()
  }).catch((err)=>console.error("Issue loading webcomponentloader",err))
  return s;
})()) // WebComponentLoader....finds a way, or MAKES ONE.

function wclLoaded(){
  // Is there a way to hook this into WebComponents.ready ?
  // do things with the page load, like IDK, maybe routing?
  // perhaps fetch and set up some data?
}
*/
