// MODULE webgl-module.js

var context;

export function getContext(canvas) {
	if (!context)
		context = canvas.getContext("webgl");
	return context;
}

export let Webgl = {
	getContext: getContext
};