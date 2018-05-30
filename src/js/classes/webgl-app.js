// CLASS webgl-app.js

import { Dom } from '../modules/dom-module.js'
import { Webgl } from '../modules/webgl-module.js'

export class App { 
	constructor() {
		this.canvas = Dom.getCanvas();
		this.webglContext;
	}

	//INIT
	run() {
		alert("isWebglAvailable: " + this.isWebglAvailable())
	}

	//METHODS
	isWebglAvailable() {
		this.webglContext = Webgl.getContext(this.canvas);
		return new Boolean(this.webglContext);
	}

	getWebglContext() {
		if (! this.webglContext)
			this.webglContext = Webgl.getContext(this.canvas);
		return this.webglContext;
	}
}