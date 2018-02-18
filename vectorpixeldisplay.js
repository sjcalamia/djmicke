
class Vector {
	constructor(coord) {
	  coords = [...coord]
		this.x = coords[0]
		this.y = coords[1]
		this.z = coords[2]
		return this;
	}
	toString() { return [this.x,this.y,this.z].toString() }
	get dimensions() {
		return this.z ? 3 : this.y ? 2 : this.x ? 1 : 0
	}
}
class Color {
	constructor (colorVal) {
	  let colorVals = colorVal ? [...colorVal] : [0,0,0]
		let _parseArray = (arr) => {
				this.r = arr[0]
				this.g = arr[1]
				this.b = arr[2]
		}
		switch(colorVals.length) {
			case 1:
				typeof colorVals[0] == typeof [] ? _parseArray(colorVals[0]) : _parseArray([0,0,0]);
				break;
			case 2:
				_parseArray([colorVals[0],colorVals[1],0])
				break;
			case 3:
      default: 
				_parseArray(colorVals)
		}
	}
	get CSSrgb() { return `rgb(this.r,this.g,this.b)`}
	map(obj) {
		this.r = obj.r == this.r ? this.r : obj.r
		this.g = obj.g == this.g ? this.g : obj.g
		this.b = obj.b == this.b ? this.b : obj.b
	}
}
class Pixel extends HTMLElement{
	constructor(options) {
		super()
		this.__color = options && options.color ? new Color(options.color) : new Color([0,0,0])
		let x = options ? options.x : this.x ? this.x : 0
		let y = options ? options.y : this.y ? this.y : 0
		this.gridHome = new Vector(options.x,options.y)
		this.id = `Pixel_x${x}_y${y}`
		this.name = `X${x}Y${y}`
		this.root = this.attachShadow({mode:"open"})
	}
	connectedCallback() {
		super.connectedCallback()
		this.root.appendChild(Pixel.template.cloneNode(true))
	}
	set color(colorVals) {
	    if (this.__color == new Color(colorVals)) { return this.__color }
		this.__color = (this.__color ? this.__color.map(colorVals) : new Color(colorVals))
		dispatchEvent('pixel-change',{detail: {name: this.name, id: this.id, color: this.__color}})
		this.color = this.__color
	}
	static get template() { return `
<style>
:host {
  height: 1vh;
  width: 1vw;
  margin: 0;
  padding: 0;
  line-height: 1vh;
}
<style>
`
	}
}
customElements.define("pi-xel", Pixel)


class Display extends HTMLElement {
	static get template() {
		let __grid_frag = document.createDocumentFragment()
		__grid_frag.rows = new Array(100)
		for (let i = 0; i < 100; i++) {
		  let rowel = document.createElement("tr")
		  let row = new Array(100)
		  for (let j = 0; j < 100; j++) {
		    let pxel = document.createElement("pi-xel")
		    pxel.x = j
		    pxel.y = i
		    rowel.appendChild(pxel)
		    row.push(pxel)
		  }
		  __grid_frag.appendChild(rowel)
		  __grid_frag.rows.push(row)
		}
		return __grid_frag
	}
	constructor(){
		super()
		this.attachShadow({mode:'open'})
		if (!this.isConnected) {
          document.body.appendChild(this.constructor.template.cloneNode(true))
		}
	}

	
}
customElements.define("dis-play",Display)


document.body.appendChild(document.createElement("dis-play"))
