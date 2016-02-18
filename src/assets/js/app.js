/*
	FrontLaucher main js file 
*/

//es6 style
import FastClick from 'fastclick';
import slick from 'slick-carousel';
import '!style!css!slick-carousel/slick/slick.css';
//import './foundation';
//require.js style
require('!style!css!fancybox/dist/css/jquery.fancybox.css');
require("expose?jQuery!jquery"); // global jquery (but shouldn't be used without webpack)
const fancybox = require('fancybox')($);


const App = {
	initialize: function(){
	    FastClick.attach(document.body);
	    $('.fancybox').fancybox();
	},
	init: function(){
		const self = this;
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