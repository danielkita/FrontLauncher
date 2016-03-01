/*
	FrontLaucher main js file 
*/

//es6 style
import slick from 'slick-carousel';
import '!style!css!slick-carousel/slick/slick.css';
import './foundation';
//require.js style
require('!style!css!fancybox/dist/css/jquery.fancybox.css');
require("expose?jQuery!jquery"); // global jquery (but shouldn't be used without webpack)
const fancybox = require('fancybox')($);


const App = {
	startFastClick: function() {
		if ('touchAction' in document.body.style) {
		    document.body.style.touchAction = 'manipulation';
		} else {
		    require.ensure(['fastclick'], (require) => {
		        const FastClick = require('fastclick');

		        window.addEventListener('load', () => {
		            FastClick.attach(document.body);
		        });
		    }, 'fastclick');
		}
	},
	initialize: function(){
	    $('.fancybox').fancybox();
	},
	init: function(){
		const self = this;
		document.addEventListener('DOMContentLoaded', function() {
			self.startFastClick();  
			self.initialize();  
		}, false);

		window.onload = function() {
		};

		window.onresize = function() {

		};
	}
}

App.init();