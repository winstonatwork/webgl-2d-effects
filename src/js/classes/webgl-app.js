// CLASS webgl-app.js

import {Dom} from '../modules/dom-module.js';
import {Webgl} from '../modules/webgl-module.js';

export class App { 
	constructor() {
	}

	//INIT
	run() {
		console.log(this.isWebglAvailable())
	}

	//METHODS
	isWebglAvailable() {
		return Webgl.getContext(this.canvas);
	}
}