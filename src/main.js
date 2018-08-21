require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import BamComponent from './ui/bam-component.vue';

ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
		'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js'
         ]
});

ljs.load('dep', function() {

	console.log("wtf");
	if (!window.registredAerisElements) {
		window.registredAerisElements = [];
	}

	var timer;

	function stopTimer() {
	    clearInterval(timer);
	}

	function registerElement(name, component) {
        if (!window.registredAerisElements) {
            window.registredAerisElements = [];
        }
        if (window.registredAerisElements.indexOf(name) < 0) {
            Vue.customElement(name, component);
            window.registredAerisElements.push(name)
        }
    }

	function register() {
		console.info("trying to register fictionnal dependency");
		
		Vue.component('bam-component', BamComponent);
		registerElement('bam-component', BamComponent);

		stopTimer()
		console.info("Fictionnal dependency registration complete");

	}

	timer = setInterval(function(){register()}, 1000);
})
