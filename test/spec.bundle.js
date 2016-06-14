/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* global chai it describe beforeEach afterEach sinon */

	'use strict';

	var expect = chai.expect;

	describe('selectorMenu', function () {

	  beforeEach(function () {
	    this.player = videojs.getPlayers().exampleVideo;
	    this.mockVideoData = [{
	      id: 0,
	      selected: true,
	      label: '1080p',
	      src: 'https://archive.org/download/ElephantsDream/ed_1024.mp4',
	      type: 'video/mp4'
	    }, {
	      id: 1,
	      selected: false,
	      label: '720p',
	      src: 'https://archive.org/download/ElephantsDream/ed_hd.mp4',
	      type: 'video/mp4'
	    }];
	  });

	  afterEach(function () {
	    this.player = null;
	    this.mockVideoData = null;
	  });

	  it('registers itself as a plugin with videojs', function () {
	    expect(this.player.selectorMenu).to.be.a('function');
	  });

	  it('listens to the "menudataready" event for data', function () {
	    var callback;
	    var args;
	    var mockDataNoop = {
	      menuData: {
	        video: this.mockVideoData
	      },
	      onChange: function noop() {}
	    };

	    this.player.on('menudataready', callback = sinon.spy());
	    this.player.trigger('menudataready', mockDataNoop);

	    expect(callback.args[0][1]).to.equal(mockDataNoop);
	    expect(callback.calledOnce).to.be.true;
	  });

	  describe('Button', function () {
	    it('creates a new button', function () {
	      var buttons = document.getElementsByClassName('vjs-selector-menu-control');

	      expect(buttons.length).to.equal(1);
	    });

	    it('has the correct icon class', function () {
	      var button = document.getElementsByClassName('vjs-selector-menu-control')[0];

	      expect(button.className.indexOf('vjs-icon-cog') > -1).to.be.true;
	    });

	    it('has the correct control text', function () {
	      var button = document.getElementsByClassName('vjs-selector-menu-control')[0];

	      expect(button.children[0].innerText).to.equal('SelectorMenu');
	    });
	  });

	  describe('Menu List', function () {
	    it('has the correct amount if menu items', function () {
	      var button = document.getElementsByClassName('vjs-selector-menu-control')[0];
	      var menuListLength = button.children[1].children[0].children.length;

	      expect(menuListLength).to.equal(2);
	    });
	  });
	});

/***/ }
/******/ ]);