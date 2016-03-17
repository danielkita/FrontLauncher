/*
	FrontLaucher main js file 
*/

import slick from 'slick-carousel';
import '!style!css!slick-carousel/slick/slick.css';
import './foundation';
require('!style!css!fancybox/dist/css/jquery.fancybox.css');
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