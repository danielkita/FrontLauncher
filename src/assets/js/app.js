//Include NPM packages (es6)
import normalize from '!style!css!sass!normalize.scss/normalize.scss';
import FastClick from 'fastclick';

//Main 
var App = {
	initialize: function(){
	    FastClick.attach(document.body);
	},
	init: function(){
		let self = this;
		document.addEventListener('DOMContentLoaded', function() {
			self.initialize();
		}, false);

		window.onload = function() {
		};

		window.onresize = function() {

		};
	}
}

App.init();