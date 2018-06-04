// MODULE webgl-module.js
import {GlobalConstants} from './global-constants-module.js';

let context; 

function getContext() {
	if (!context)
		context = GlobalConstants.CANVAS.getContext("webgl");
	return context;
}

export let Webgl = {
	getContext: getContext
};