import { Element as Elm } from '../../node_modules/@polymer/polymer/polymer-element.js'
import { DjmickeEvent } from './djmicke-event.js'

export default ((template_string, style) => {
  let __template = `
  ${ style ? `<style>${style}</style>` : ""}
  ${template_string}
  `
  class DjmickeCalendar extends Elm {
    static get template() { return __template }
    static get properties() { return {
      calid: {
        type: String,
        value: false,
        observer: '_calidChanged'
      },
      apikey: {
        type: String,
        value: false,
        observer: '_apikeyChanged'
      },
      calData: {
        type: Object,
        value: {},
        observer: '_calDataChanged'
      },
      events: {
        type: Array,
        value: ()=>[],
        observer: '_eventsChanged'
      }
    } }
    _calidChanged(newId, oldId) {
      console.log("_calidChanged",newId,oldId)
      if (!this.__fetching && this.apikey && newId && (newId != oldId)) {
        this.__fetchCalData()
      }
    }
    _apikeyChanged(newKey, oldKey) {
      console.log("_apikeyChanged",newKey,oldKey)
      if (!this.__fetching && this.calid && newKey && (newKey != oldKey)) {
        this.__fetchCalData()
      }
    }
    _calDataChanged(newCal, oldCal) {
      console.log("_calDataChanged",newCal, oldCal)
    }
    _eventsChanged(newEvents, oldEvents) {
      // this one will be kind of important to ensure that we aren't doing a
      // bunch of unnecessary dom manipulation.
      // For now, it's just a bunch of logging:
      console.log("_eventsChanged",newEvents,oldEvents)
      if (oldEvents && oldEvents.length > 0
        && JSON.stringify(newEvents.map(e=>e.__data)) == JSON.stringify(oldEvents.map(e=>e.__data))) {
        return
      }
      let oldGUIDs = oldEvents ? oldEvents.map((e)=>e.guid) : []
      let newNewEvents = newEvents.filter(ne=>(!oldGUIDs.includes(ne.guid)))
      let changedEvents = newEvents.filter((e)=>!oldEvents.includes(e)).filter(ev=>!newNewEvents.includes(ev))
      console.log("changed events",changedEvents)
      console.log("new events", newNewEvents)
      let allAboard = newEvents.every((e)=>{
        this.shadowRoot.appendChild(e)
        return e.isConnected
      })
      //console.log(`New Elements attached appropriately? ${allAboard}`)
    }
    __fetchCalData() {
      this.__fetching = true
      let __promise = {},
        cid = this.calid,
        key = this.apikey
      if (cid && key) {
        __promise = fetch(`https://www.googleapis.com/calendar/v3/calendars/${cid}/events?key=${key}`)
          .then(r=>r.json())
          .then(d=>{
            // console.log("data returned", this, d)
            this.__receiveCalData(d)
          })
          .catch(err=>console.error(err))
      }
      return __promise
    }
    __receiveCalData(data) {
      //console.log("receivedCalData: ", data)
      this.calData = data
      this.events = data.items.map(d=>{
        let e = document.createElement("djmicke-event")
        e.setProperties({
          raw: d,
          guid: d.id,
          date: new Date(d.start.dateTime),
          name: d.summary,
          location: d.location.split(", ")[0],
          description: d.description.split("\n").map(e=>e.trim()) // I think we should be able to manage a lot of values by parsing the description line by line for parameters.
        })
        return e
      })
      this.__fetching = false
    }
  }
  customElements.define("djmicke-calendar",DjmickeCalendar)
  return DjmickeCalendar
})(`
<h1>Spring/Summer 2018 Tour</h1>
<slot></slot>
`,`
  h1 {
    font-family: flexure;
    font-size: calc( var(--fs-xxl) *1.35);
    text-align: center;
    background-color: rgba(133,33,93,.7);
    mix-blend-mode: hard-light;
    margin-top: .5em;
  }
  h2 {
    font-size: var(--fs-xl)
  }
  djmicke-event {
    transform: rotate(5deg);
    text-align: right;
    background-color: rgba(150,23,84,.7);
    padding-right: 2em;
    transform-origin: 60% 50%;
    /* transform: matrix3d(1.597521, 0.084477, 0, 0.002119,
                        -0.503054, 1.131872, 0, -0.001258,
                        0, 0, 1, 0,
                        88, 153, 0, 1);*/
    transform: matrix3d(1.0032749, 0.159508, 0, -0.001413, -0.030769, 0.890373, 0, 0.001252, 0, 0, 1, 0, 2, 0, 0, 1);
    width: 80vw;
  }

`)

