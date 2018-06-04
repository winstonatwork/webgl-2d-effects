// MODULE dom-module.js
import {GlobalConstants} from './global-constants-module.js'

function query(selector, domElement) {
	return domElement? 
		domElement.querySelector(selector) :
		GlobalConstants.DOCUMENT.querySelector(selector);
}

function queryAll(selector, domElement) {
	return domElement? 
		domElement.querySelectorAll(selector) :
		GlobalConstants.DOCUMENT.querySelectorAll(selector);
}

export let Dom = {
	query: query,
	queryAll: queryAll
};
