'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var utils = require('../../core/utils');
var GLRunner = require('../gl-runner');
var WebGL2FunctionBuilder = require('./function-builder');
var WebGL2Kernel = require('./kernel');
var isCompatible = null;

var WebGL2Runner = function (_GLRunner) {
	_inherits(WebGL2Runner, _GLRunner);

	_createClass(WebGL2Runner, null, [{
		key: 'isRelatedContext',
		value: function isRelatedContext(context) {
			// from global
			if (typeof WebGL2RenderingContext !== 'undefined') {
				return context instanceof WebGL2RenderingContext;
			}
			return false;
		}

		/**
   * @desc Instantiates a Runner instance for the kernel.
   * @param {Object} settings - Settings to instantiate properties in Runner, with given values
   */

	}, {
		key: 'isCompatible',
		get: function get() {
			if (isCompatible !== null) {
				return isCompatible;
			}
			isCompatible = utils.isWebGl2Supported();
			return isCompatible;
		}
	}]);

	function WebGL2Runner(settings) {
		_classCallCheck(this, WebGL2Runner);

		var _this = _possibleConstructorReturn(this, (WebGL2Runner.__proto__ || Object.getPrototypeOf(WebGL2Runner)).call(this, new WebGL2FunctionBuilder(), settings));

		_this.Kernel = WebGL2Kernel;
		_this.kernel = null;
		return _this;
	}

	_createClass(WebGL2Runner, [{
		key: 'getIsIntegerDivisionAccurate',
		value: function getIsIntegerDivisionAccurate() {
			if (!this._webGl) throw new Error('webGl not initialized');
			this._webGl.getExtension('EXT_color_buffer_float');
			return _get(WebGL2Runner.prototype.__proto__ || Object.getPrototypeOf(WebGL2Runner.prototype), 'getIsIntegerDivisionAccurate', this).call(this);
		}

		/**
   * @desc Return the current mode in which gpu.js is executing.
   * @returns {String} The current mode; "gpu".
   */

	}, {
		key: 'getMode',
		value: function getMode() {
			return 'gpu';
		}
	}]);

	return WebGL2Runner;
}(GLRunner);

module.exports = WebGL2Runner;