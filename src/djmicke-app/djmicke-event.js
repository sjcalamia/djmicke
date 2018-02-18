import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'
export default (()=>{
class DjmickeEvent extends Elm {
  static get template() { return `
    <style>
      :host {
        display: block;
      }
    </style>
    <h2><span class="date">{{date_string}}</span> {{name}}</h2>
    <h4>{{location}}</h4>
    ` }
  static get properties() { return {
    date: {
      type: Date,
      value: ()=>new Date()
    },
    date_string: {
      type: String,
      computed: '_computedDateString(date)'
    },
    //dayOfTheWeek: {
      //type: String,
      //computed: '_computedDayOfTheWeek()'
    //},
    name: { type: String },
    location: { type: String },
    description: { type: Array },
    raw: { type: String },
    guid: {
      type: String,
      value: ()=>{
        var hash = 0, i, chr;
        if (this.name.length === 0) return hash;
        for (i = 0; i < this.name.length; i++) {
          chr   = this.name.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
      }
    }
  }}
  _computedDateString() {
    return this.date.toLocaleDateString().split("/").slice(0,2).join("/")
  }
}
customElements.define("djmicke-event",DjmickeEvent)
})()

