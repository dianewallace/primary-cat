/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/block.js":
/*!*************************!*\
  !*** ./blocks/block.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _primary_category_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-category/index.js */ \"./blocks/primary-category/index.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=webpack:///./blocks/block.js?");

/***/ }),

/***/ "./blocks/components/MetaDropdown.js":
/*!*******************************************!*\
  !*** ./blocks/components/MetaDropdown.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/**\n * WordPress dependencies.\n */\nvar Component = wp.element.Component;\nvar _wp$components = wp.components,\n    BaseControl = _wp$components.BaseControl,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$data = wp.data,\n    withSelect = _wp$data.withSelect,\n    withDispatch = _wp$data.withDispatch;\nvar compose = wp.compose.compose;\nvar __ = wp.i18n.__;\n/**\n * Custom Component that gets post ids from meta and passes that to a post query.\n */\n\nvar MetaDropdown = /*#__PURE__*/function (_Component) {\n  _inherits(MetaDropdown, _Component);\n\n  var _super = _createSuper(MetaDropdown);\n\n  function MetaDropdown() {\n    _classCallCheck(this, MetaDropdown);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MetaDropdown, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          label = _this$props.label,\n          _this$props$multiple = _this$props.multiple,\n          multiple = _this$props$multiple === void 0 ? false : _this$props$multiple,\n          value = _this$props.value,\n          onChange = _this$props.onChange,\n          posts = _this$props.posts; // Posts are retrieved from database using withSelect below.\n\n      if (!posts) {\n        return __('Loading posts...', 'primary-cat');\n      }\n\n      if (posts.length === 0) {\n        return __('No Posts to Select', 'primary-cat');\n      }\n\n      var post = posts[0];\n      var options = [];\n      var option = {\n        value: '',\n        label: __('Choose posts for this block', 'primary-cat')\n      };\n      options.push(option);\n\n      for (var i = 0; i < posts.length; i++) {\n        option = {\n          value: posts[i].id,\n          label: posts[i].title.raw\n        };\n        options.push(option);\n      }\n\n      return wp.element.createElement(SelectControl, {\n        multiple: multiple,\n        label: label,\n        value: value,\n        onChange: onChange,\n        options: options\n      });\n    }\n  }]);\n\n  return MetaDropdown;\n}(Component); // Fetch the posts by ID.\n\n\nvar applyWithSelect = withSelect(function (select) {\n  var selected = primary_category.meta;\n\n  var _select = select('core'),\n      getEntityRecords = _select.getEntityRecords; // let query = { include: selected, per_page: 10, orderby: 'title', order: 'asc', status: ['publish', 'future'] };\n\n\n  var query = {\n    per_page: 10,\n    orderby: 'title',\n    order: 'asc',\n    status: ['publish', 'future']\n  };\n  return {\n    posts: getEntityRecords('postType', 'post', query)\n  };\n}); // Combine the higher-order components.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compose([applyWithSelect])(MetaDropdown));\n\n//# sourceURL=webpack:///./blocks/components/MetaDropdown.js?");

/***/ }),

/***/ "./blocks/primary-category/index.js":
/*!******************************************!*\
  !*** ./blocks/primary-category/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MetaDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MetaDropdown */ \"./blocks/components/MetaDropdown.js\");\n\n\n(function (wp) {\n  /**\n   * Registers a new block provided a unique name and an object defining its behavior.\n   * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api\n   */\n  var registerBlockType = wp.blocks.registerBlockType;\n  /**\n   * Component used for server-side rendering a preview of dynamic blocks to display in the editor.\n   * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/server-side-render\n   */\n\n  var ServerSideRender = wp.serverSideRender;\n  /**\n   * Components used to generate block controls.\n   * @see https://github.com/WordPress/gutenberg/tree/master/packages/components\n   */\n\n  var _wp$components = wp.components,\n      TextControl = _wp$components.TextControl,\n      SelectControl = _wp$components.SelectControl;\n  /**\n   * Inspector Controls appear in the post settings sidebar when a block is being edited.\n   * @see https://github.com/WordPress/gutenberg/tree/master/packages/editor/src/components/inspector-controls\n   */\n\n  var InspectorControls = wp.blockEditor.InspectorControls;\n  /**\n   * Fragments let you group a list of children without adding extra nodes to the DOM.\n   * @see https://reactjs.org/docs/fragments.html\n   */\n\n  var Fragment = wp.element.Fragment;\n  /**\n   * Retrieves the translation of text.\n   * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api\n   */\n\n  var __ = wp.i18n.__;\n  /**\n   * Retrieves WordPress data.\n   */\n\n  var _wp$data$select = wp.data.select('core/editor'),\n      getCurrentPost = _wp$data$select.getCurrentPost,\n      getCurrentPostId = _wp$data$select.getCurrentPostId,\n      getCurrentPostType = _wp$data$select.getCurrentPostType;\n  /**\n   * Every block starts by registering InspectorControls new block type definition.\n   * @see https://wordpress.org/gutenberg/handbook/block-api/\n   */\n\n\n  registerBlockType('primary-cat/get-primary-cat', {\n    /**\n     * This is the display title for your block, which can be translated with `i18n` functions.\n     * The block inserter will show this name.\n     */\n    title: __('Posts by Primary Category', 'primary-cat'),\n\n    /**\n     * An icon property should be specified to make it easier to identify a block.\n     * These can be any of WordPress’ Dashicons, or a custom svg element.\n     */\n    icon: 'category',\n\n    /**\n     * Blocks are grouped into categories to help users browse and discover them.\n     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.\n     */\n    category: 'common',\n\n    /**\n     * The edit function describes the structure of your block in the context of the editor.\n     * This represents what the editor will render when the block is used.\n     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit\n     *\n     * @param {Object} [props] Properties passed from the editor.\n     * @return {Element}       Element to render.\n     */\n    edit: function edit(props) {\n      var _props$attributes = props.attributes,\n          heading = _props$attributes.heading,\n          post_ids = _props$attributes.post_ids,\n          post_id = _props$attributes.post_id,\n          _props$attributes$opt = _props$attributes.options,\n          options = _props$attributes$opt === void 0 ? [] : _props$attributes$opt;\n\n      var updateHeading = function updateHeading(newValue) {\n        props.setAttributes({\n          heading: newValue\n        });\n      };\n\n      var updatePostIds = function updatePostIds(newValue) {\n        var posts = newValue.toString();\n        props.setAttributes({\n          post_ids: posts\n        });\n      };\n\n      var urlQueryArgs = {\n        post_id: getCurrentPostId()\n      };\n      return wp.element.createElement(Fragment, null, wp.element.createElement(ServerSideRender, {\n        block: \"primary-cat/get-primary-cat\" // urlQueryArgs={ urlQueryArgs }\n        ,\n        attributes: props.attributes\n      }), wp.element.createElement(InspectorControls, null, wp.element.createElement(TextControl, {\n        label: \"Block Title\",\n        value: props.attributes.heading,\n        onChange: updateHeading\n      }), wp.element.createElement(_components_MetaDropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        multiple: true,\n        label: __('Select Posts:'),\n        value: selectedPosts,\n        onChange: updatePostIds,\n        options: options\n      })));\n    },\n\n    /**\n     * The save function defines the way in which the different attributes should be combined\n     * into the final markup, which is then serialized by Gutenberg into `post_content`.\n     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save\n     *\n     * @return {Element} Element to render.\n     */\n    save: function save() {\n      // return null for ServerSideRender.\n      return null;\n    }\n  });\n})(window.wp);\n\n//# sourceURL=webpack:///./blocks/primary-category/index.js?");

/***/ })

/******/ });