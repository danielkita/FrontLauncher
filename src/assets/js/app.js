/*
	FrontLaucher main js file 
*/

import slick from 'slick-carousel';
import '!style!css!slick-carousel/slick/slick.css';
import 'foundation-sites';
require('!style!css!fancybox/dist/css/jquery.fancybox.css');
const fancybox = require('fancybox')($);


const App = {
	isTouch: function () {
        let isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
        return isTouch;
    },
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
	    $(document).foundation();
	},
	initMap: function(){
		// vanillaJS
		const findMap = document.getElementsByClassName('gmap');
		const scriptUrl = "http://maps.google.com/maps/api/js";

		const loadMap = function(){
			for (let i = findMap.length - 1; i >= 0; i--) {
				let myMap = findMap[i];

				let center = new google.maps.LatLng(myMap.getAttribute('data-lat'), myMap.getAttribute('data-lon'));
				let zoom  = parseInt(myMap.getAttribute('data-zoom')) || 13;

				let map = new google.maps.Map(myMap, {
					zoom,
					center,
					disableDefaultUI: false,
					draggable: !App.isTouch(),
					scrollwheel: false
				});

				let markerOptions = {
					map: map,
				//	icon: 'assets/img/point.png',
					position: point
				};

				let marker = new google.maps.Marker(markerOptions);
			};
		};
		if (findMap.length) {
			const s = document.createElement( 'script' );
			s.setAttribute( 'src', scriptUrl );
			s.onload=loadMap;
			document.body.appendChild( s );
		}
	},
	init: function(){
		document.addEventListener('DOMContentLoaded', () => {
			this.startFastClick();  
			this.initialize();  
		}, false);

		window.onload = () => {
		};

		window.onresize = () => {

		};
	}
}

App.init();