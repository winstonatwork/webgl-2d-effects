// MODULE dom-module.js

import { GlobalConstants } from './global-constants.js'

//PRIVATE VARIABLES
let canvas;

export function query(selector) {
	return DOCUMENT.querySelector(selector);
}

export function queryAll(selector) {
	return DOCUMENT.querySelectorAll(selector);
}

export function getCanvas(isEager) {
	if (!canvas || isEager)
		canvas = query("#primary-canvas");
	return canvas;
}

export let Dom = {
	query: query,
	queryAll: queryAll,
	getCanvas: getCanvas
};