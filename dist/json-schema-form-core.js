/*!
 * json-schema-form-core
 * @version 1.0.0-alpha.2
 * @date Sun, 19 Feb 2017 04:08:50 GMT
 * @link https://github.com/json-schema-form/json-schema-form-core
 * @license MIT
 * Copyright (c) 2014-2017 JSON Schema Form
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_objectpath__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_objectpath___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_objectpath__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_objectpath__, "parse")) __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_0_objectpath__["parse"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_objectpath__, "stringify")) __webpack_require__.d(__webpack_exports__, "stringify", function() { return __WEBPACK_IMPORTED_MODULE_0_objectpath__["stringify"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_objectpath__, "normalize")) __webpack_require__.d(__webpack_exports__, "normalize", function() { return __WEBPACK_IMPORTED_MODULE_0_objectpath__["normalize"]; });
/* harmony export (immutable) */ __webpack_exports__["name"] = name;




/**
 * I am a name formatter function for processing keys into names for classes or Id.
 *
 * @param  {Array<string>} key         I am the key array of a processed schema key
 * @param  {string}        separator   I am the separator between the key items and optional form name
 * @param  {string}        formName    I am an optional form name
 * @param  {boolean}       omitNumbers I determine if numeric values should be included in the output or withheld
 *
 * @return {string}                    I am the formatted key
 */
function name(key, separator) {
  var formName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var omitNumbers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (key) {
    var fieldKey = key.slice();
    var fieldSeparator = separator || '-';

    if (omitNumbers) {
      fieldKey = fieldKey.filter(function (currentKey) {
        return typeof currentKey !== 'number';
      });
    };

    return (formName.length !== 0 ? formName + fieldSeparator : '') + fieldKey.join(fieldSeparator);
  };

  return '';
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Takes a titleMap in either object or list format and returns one
/* harmony default export */ __webpack_exports__["a"] = function (titleMap, originalEnum) {
  if (!Array.isArray(titleMap)) {
    var _ret = function () {
      var canonical = [];
      if (originalEnum) {
        originalEnum.forEach(function (value) {
          canonical.push({ name: titleMap[value], value: value });
        });
      } else {
        Object.keys(titleMap).forEach(function (value) {
          canonical.push({ name: titleMap[value], value: value });
        });
      }
      return {
        v: canonical
      };
    }();

    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
  }
  return titleMap;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).ObjectPath;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sf_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canonical_title_map__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["defaultFormDefinition"] = defaultFormDefinition;
/* harmony export (immutable) */ __webpack_exports__["stdFormObj"] = stdFormObj;
/* harmony export (immutable) */ __webpack_exports__["text"] = text;
/* harmony export (immutable) */ __webpack_exports__["number"] = number;
/* harmony export (immutable) */ __webpack_exports__["integer"] = integer;
/* harmony export (immutable) */ __webpack_exports__["checkbox"] = checkbox;
/* harmony export (immutable) */ __webpack_exports__["select"] = select;
/* harmony export (immutable) */ __webpack_exports__["checkboxes"] = checkboxes;
/* harmony export (immutable) */ __webpack_exports__["fieldset"] = fieldset;
/* harmony export (immutable) */ __webpack_exports__["array"] = array;
/* harmony export (immutable) */ __webpack_exports__["createDefaults"] = createDefaults;
/* harmony export (immutable) */ __webpack_exports__["defaultForm"] = defaultForm;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/* Utils */
var stripNullType = function stripNullType(type) {
  if (Array.isArray(type) && type.length === 2) {
    if (type[0] === 'null') {
      return type[1];
    };
    if (type[1] === 'null') {
      return type[0];
    };
  };
  return type;
};

// Creates an default titleMap list from an enum, i.e. a list of strings.
var enumToTitleMap = function enumToTitleMap(enm) {
  var titleMap = []; // canonical titleMap format is a list.
  enm.forEach(function (name) {
    titleMap.push({ name: name, value: name });
  });
  return titleMap;
};

/**
 * Creates a default form definition from a schema.
 */
function defaultFormDefinition(schemaTypes, name, schema, options) {
  var rules = schemaTypes[stripNullType(schema.type)];
  if (rules) {
    var def = void 0;
    // We give each rule a possibility to recurse it's children.
    var innerDefaultFormDefinition = function innerDefaultFormDefinition(childName, childSchema, childOptions) {
      return defaultFormDefinition(schemaTypes, childName, childSchema, childOptions);
    };
    for (var i = 0; i < rules.length; i++) {
      def = rules[i](name, schema, options, innerDefaultFormDefinition);

      // first handler in list that actually returns something is our handler!
      if (def) {

        // Do we have form defaults in the schema under the x-schema-form-attribute?
        if (def.schema['x-schema-form']) {
          Object.assign(def, def.schema['x-schema-form']);
        }

        return def;
      }
    }
  }
}

/**
 * Creates a form object with all common properties
 */
function stdFormObj(name, schema, options) {
  options = options || {};

  // The Object.assign used to be a angular.copy. Should work though.
  var f = options.global && options.global.formDefaults ? Object.assign({}, options.global.formDefaults) : {};
  if (options.global && options.global.supressPropertyTitles === true) {
    f.title = schema.title;
  } else {
    f.title = schema.title || name;
  }

  if (schema.description) {
    f.description = schema.description;
  }
  if (options.required === true || schema.required === true) {
    f.required = true;
  }
  if (schema.maxLength) {
    f.maxlength = schema.maxLength;
  }
  if (schema.minLength) {
    f.minlength = schema.minLength;
  }
  if (schema.readOnly || schema.readonly) {
    f.readonly = true;
  }
  if (schema.minimum) {
    f.minimum = schema.minimum + (schema.exclusiveMinimum ? 1 : 0);
  }
  if (schema.maximum) {
    f.maximum = schema.maximum - (schema.exclusiveMaximum ? 1 : 0);
  }

  // Non standard attributes (DONT USE DEPRECATED)
  // If you must set stuff like this in the schema use the x-schema-form attribute
  if (schema.validationMessage) {
    f.validationMessage = schema.validationMessage;
  }
  if (schema.enumNames) {
    f.titleMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__canonical_title_map__["a" /* default */])(schema.enumNames, schema['enum']);
  }
  f.schema = schema;

  // Ng model options doesn't play nice with undefined, might be defined
  // globally though
  f.ngModelOptions = f.ngModelOptions || {};

  return f;
};

/*** Schema types to form type mappings, with defaults ***/
function text(name, schema, options) {
  if (stripNullType(schema.type) === 'string' && !schema['enum']) {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'text';
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

// default in json form for number and integer is a text field
// input type="number" would be more suitable don't ya think?
function number(name, schema, options) {
  if (stripNullType(schema.type) === 'number') {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'number';
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

function integer(name, schema, options) {
  if (stripNullType(schema.type) === 'integer') {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'number';
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

function checkbox(name, schema, options) {
  if (stripNullType(schema.type) === 'boolean') {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'checkbox';
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

function select(name, schema, options) {
  if (stripNullType(schema.type) === 'string' && schema['enum']) {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'select';
    if (!f.titleMap) {
      f.titleMap = enumToTitleMap(schema['enum']);
    }
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

function checkboxes(name, schema, options) {
  if (stripNullType(schema.type) === 'array' && schema.items && schema.items['enum']) {
    var f = stdFormObj(name, schema, options);
    f.key = options.path;
    f.type = 'checkboxes';
    if (!f.titleMap) {
      f.titleMap = enumToTitleMap(schema.items['enum']);
    }
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;
    return f;
  }
}

function fieldset(name, schema, options, defaultFormDef) {
  if (stripNullType(schema.type) === 'object') {
    var _ret = function () {
      var f = stdFormObj(name, schema, options);
      f.type = 'fieldset';
      f.key = options.path;
      f.items = [];
      options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;

      // recurse down into properties
      if (schema.properties) {
        Object.keys(schema.properties).forEach(function (key) {
          var value = schema.properties[key];
          var path = options.path.slice();
          path.push(key);
          if (options.ignore[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(path)] !== true) {
            var required = schema.required && schema.required.indexOf(key) !== -1;

            var def = defaultFormDef(key, value, {
              path: path,
              required: required || false,
              lookup: options.lookup,
              ignore: options.ignore,
              global: options.global
            });
            if (def) {
              f.items.push(def);
            }
          }
        });
      }
      return {
        v: f
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}

function array(name, schema, options, defaultFormDef) {
  if (stripNullType(schema.type) === 'array') {
    var f = stdFormObj(name, schema, options);
    f.type = 'array';
    f.key = options.path;
    options.lookup[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(options.path)] = f;

    var required = schema.required && schema.required.indexOf(options.path[options.path.length - 1]) !== -1;

    // The default is to always just create one child. This works since if the
    // schemas items declaration is of type: "object" then we get a fieldset.
    // We also follow json form notatation, adding empty brackets "[]" to
    // signify arrays.

    var arrPath = options.path.slice();
    arrPath.push('');

    f.items = [defaultFormDef(name, schema.items, {
      path: arrPath,
      required: required || false,
      lookup: options.lookup,
      ignore: options.ignore,
      global: options.global
    })];

    return f;
  }
}

function createDefaults() {
  // First sorted by schema type then a list.
  // Order has importance. First handler returning an form snippet will be used.
  return {
    string: [select, text],
    object: [fieldset],
    number: [number],
    integer: [integer],
    boolean: [checkbox],
    array: [checkboxes, array]
  };
};

/**
 * Create form defaults from schema
 */
function defaultForm(schema, defaultSchemaTypes, ignore, globalOptions) {
  var form = [];
  var lookup = {}; // Map path => form obj for fast lookup in merging
  ignore = ignore || {};
  globalOptions = globalOptions || {};
  defaultSchemaTypes = defaultSchemaTypes || createDefaults();

  if (schema.properties) {
    Object.keys(schema.properties).forEach(function (key) {
      if (ignore[key] !== true) {
        var required = schema.required && schema.required.indexOf(key) !== -1;
        var def = defaultFormDefinition(defaultSchemaTypes, key, schema.properties[key], {
          path: [key], // Path to this property in bracket notation.
          lookup: lookup, // Extra map to register with. Optimization for merger.
          ignore: ignore, // The ignore list of paths (sans root level name)
          required: required, // Is it required? (v4 json schema style)
          global: globalOptions // Global options, including form defaults
        });
        if (def) {
          form.push(def);
        }
      }
    });
  } else {
    throw new Error('Not implemented. Only type "object" allowed at root level of schema.');
  }
  return { form: form, lookup: lookup };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_schema_defaults__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_sf_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_canonical_title_map__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_merge__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_3__lib_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_select__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_resolve__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "jsonref", function() { return __WEBPACK_IMPORTED_MODULE_5__lib_resolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_traverse__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "traverseSchema", function() { return __WEBPACK_IMPORTED_MODULE_6__lib_traverse__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "traverseForm", function() { return __WEBPACK_IMPORTED_MODULE_6__lib_traverse__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_validate__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_validate__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sfPath", function() { return sfPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaDefaults", function() { return schemaDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canonicalTitleMap", function() { return canonicalTitleMap; });










var sfPath = __WEBPACK_IMPORTED_MODULE_1__lib_sf_path__;
var schemaDefaults = __WEBPACK_IMPORTED_MODULE_0__lib_schema_defaults__;
var canonicalTitleMap = __WEBPACK_IMPORTED_MODULE_2__lib_canonical_title_map__["a" /* default */];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.JsonRefs = e();
  }
}(function () {
  var e;return function t(e, r, n) {
    function o(s, a) {
      if (!r[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;if (!a && u) return require(s, !0);if (i) return i(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
        }var f = r[s] = { exports: {} };e[s][0].call(f.exports, function (t) {
          var r = e[s][1][t];return o(r ? r : t);
        }, f, f.exports, t, e, r, n);
      }return r[s].exports;
    }for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) {
      o(n[s]);
    }return o;
  }({ 1: [function (e, t, r) {
      "use strict";
      function n(e) {
        var t;return d(e, "Array") ? (t = [], e.forEach(function (e, r) {
          t[r] = n(e);
        })) : d(e, "Object") ? (t = {}, Object.keys(e).forEach(function (r) {
          t[r] = n(e[r]);
        })) : t = e, t;
      }function o(e, t) {
        function r(e) {
          Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          });
        }var n = {};return r(N.parse(e || "")), r(N.parse(t || "")), 0 === Object.keys(n).length ? void 0 : N.stringify(n);
      }function i(e, t) {
        d(e, "String") && (e = F(e)), d(t, "String") && (t = F(t));var r,
            n,
            i = m(d(t, "Undefined") ? "" : t);return M.indexOf(i.reference) > -1 ? n = i : (r = d(e, "Undefined") ? void 0 : m(e), d(r, "Undefined") ? n = i : (n = r, n.path = F(U.join(r.path, i.path)), n.query = o(r.query, i.query))), n.fragment = void 0, (-1 === M.indexOf(n.reference) && 0 === n.path.indexOf("../") ? "../" : "") + q.serialize(n);
      }function s(e, t) {
        var r,
            n = [];return t.length > 0 && (r = e, t.slice(0, t.length - 1).forEach(function (e) {
          e in r && (r = r[e], n.push(r));
        })), n;
      }function a(e, t, r, o, i, s, a, f, p) {
        var h, l;if (r.length > 0) try {
          h = c(t, r);
        } catch (y) {
          "remote" === e && (o.error = y.message, o.missing = !0);
        } else h = t;return d(h, "Undefined") || (o.value = h), d(h, "Array") || d(h, "Object") ? (l = n(i), "local" === e ? (delete l.subDocPath, t = h) : (l.relativeBase = U.dirname(s[s.length - 1]), 0 === r.length ? delete l.subDocPath : l.subDocPath = r), u(t, l, s, a, f, p)) : void 0;
      }function u(e, t, r, n, o, s) {
        var u = Promise.resolve(),
            c = n.length ? j(n[n.length - 1]) : [],
            f = O(e, t),
            p = t.subDocPath || [],
            l = S(p),
            y = ["#"];return r.forEach(function (e, t) {
          "#" !== e.charAt(0) && y.push(n[t]);
        }), y.reverse(), "#" !== (r[r.length - 1] || "").charAt(0) && (o.documents[S(c)] = e), Object.keys(f).forEach(function (v) {
          var m,
              g,
              b,
              E,
              w = f[v];b = 0 === r.length ? c.concat(j(v)) : c.concat(j(v).slice(0 === r.length ? 0 : p.length)), E = S(b), d(o[E], "Undefined") && (o.refs[E] = f[v], d(w.error, "Undefined") && "invalid" !== w.type && (L.indexOf(w.type) > -1 ? (m = i(t.relativeBase, w.uri), g = r.indexOf(m)) : (m = w.uri, g = n.indexOf(m)), w.ancestorPtrs = y, w.indirect = s, -1 === g ? L.indexOf(w.type) > -1 ? u = u.then(function () {
            return h(m, t).then(function (e) {
              return a("remote", e, d(w.uriDetails.fragment, "Undefined") ? [] : j(decodeURI(w.uriDetails.fragment)), w, t, r.concat(m), n.concat(E), o, s);
            })["catch"](function (e) {
              w.error = e.message, w.missing = !0;
            });
          }) : 0 !== E.indexOf(m + "/") && E !== m && 0 !== l.indexOf(m + "/") && l !== m ? 0 !== m.indexOf(l + "/") && (u = u.then(function () {
            return a("local", e, j(m), w, t, r.concat(m), n.concat(E), o, s || -1 === m.indexOf(l + "/") && m !== l);
          })) : w.circular = !0 : (n.slice(g).forEach(function (e) {
            o.refs[e].circular = !0;
          }), w.circular = !0)));
        }), u = u.then(function () {
          function e(i, s, a, u) {
            Object.keys(o.refs).forEach(function (c) {
              var f = o.refs[c];-1 === n.indexOf(u) && -1 === r.indexOf(a) && -1 === t.indexOf(u) && c !== a && 0 === c.indexOf(u + "/") && (s.indexOf(u) > -1 ? s.forEach(function (e) {
                -1 === t.indexOf(u) && t.push(e);
              }) : e(i.concat(a), s.concat(u), c, f.uri), r.push(a), n.push(u));
            });
          }var t = [],
              r = [],
              n = [];Object.keys(o.refs).forEach(function (r) {
            var n = o.refs[r];"local" !== n.type || n.circular || -1 !== t.indexOf(n.uri) || e([], [], r, n.uri);
          }), Object.keys(o.refs).forEach(function (e) {
            var r = o.refs[e];t.indexOf(r.uri) > -1 && (r.circular = !0);
          });
        }).then(function () {
          return o;
        });
      }function c(e, t) {
        var r = e;return t.forEach(function (e) {
          if (e = decodeURI(e), !(e in r)) throw Error("JSON Pointer points to missing location: " + S(t));r = r[e];
        }), r;
      }function f(e) {
        return Object.keys(e).filter(function (e) {
          return "$ref" !== e;
        });
      }function p(e) {
        var t;switch (e.uriDetails.reference) {case "absolute":case "uri":
            t = "remote";break;case "same-document":
            t = "local";break;default:
            t = e.uriDetails.reference;}return t;
      }function h(e, t) {
        var r = k[e],
            o = Promise.resolve(),
            i = n(t.loaderOptions || {});return d(r, "Undefined") ? (d(i.processContent, "Undefined") && (i.processContent = function (e, t) {
          t(void 0, JSON.parse(e.text));
        }), o = I.load(decodeURI(e), i), o = o.then(function (t) {
          return k[e] = { value: t }, t;
        })["catch"](function (t) {
          throw k[e] = { error: t }, t;
        })) : o = o.then(function () {
          return r.value;
        }), o = o.then(function (e) {
          return n(e);
        });
      }function l(e, t) {
        var r = !0;try {
          if (!d(e, "Object")) throw new Error("obj is not an Object");if (!d(e.$ref, "String")) throw new Error("obj.$ref is not a String");
        } catch (n) {
          if (t) throw n;r = !1;
        }return r;
      }function d(e, t) {
        return "Undefined" === t ? "undefined" == typeof e : Object.prototype.toString.call(e) === "[object " + t + "]";
      }function y(e) {
        var t, r;return d(e.filter, "Array") || d(e.filter, "String") ? (r = d(e.filter, "String") ? [e.filter] : e.filter, t = function t(e) {
          return r.indexOf(e.type) > -1 || r.indexOf(p(e)) > -1;
        }) : d(e.filter, "Function") ? t = e.filter : d(e.filter, "Undefined") && (t = function t() {
          return !0;
        }), function (r, n) {
          return ("invalid" !== r.type || e.includeInvalid === !0) && t(r, n);
        };
      }function v(e) {
        var t;return d(e.subDocPath, "Array") ? t = e.subDocPath : d(e.subDocPath, "String") ? t = j(e.subDocPath) : d(e.subDocPath, "Undefined") && (t = []), t;
      }function m(e) {
        return q.parse(encodeURI(decodeURI(e)));
      }function g(e, t, r) {
        c(e, t.slice(0, t.length - 1))[decodeURI(t[t.length - 1])] = r;
      }function b(e, t, r, n) {
        function o(t, o) {
          r.push(o), b(e, t, r, n), r.pop();
        }var i = !0;d(n, "Function") && (i = n(e, t, r)), -1 === e.indexOf(t) && (e.push(t), i !== !1 && (d(t, "Array") ? t.forEach(function (e, t) {
          o(e, t.toString());
        }) : d(t, "Object") && Object.keys(t).forEach(function (e) {
          o(t[e], e);
        }))), e.pop();
      }function E(e, t) {
        if (e = d(e, "Undefined") ? {} : n(e), !d(e, "Object")) throw new TypeError("options must be an Object");if (!(d(e.filter, "Undefined") || d(e.filter, "Array") || d(e.filter, "Function") || d(e.filter, "String"))) throw new TypeError("options.filter must be an Array, a Function of a String");if (!d(e.includeInvalid, "Undefined") && !d(e.includeInvalid, "Boolean")) throw new TypeError("options.includeInvalid must be a Boolean");if (!d(e.refPreProcessor, "Undefined") && !d(e.refPreProcessor, "Function")) throw new TypeError("options.refPreProcessor must be a Function");if (!d(e.refPostProcessor, "Undefined") && !d(e.refPostProcessor, "Function")) throw new TypeError("options.refPostProcessor must be a Function");if (!d(e.subDocPath, "Undefined") && !d(e.subDocPath, "Array") && !_(e.subDocPath)) throw new TypeError("options.subDocPath must be an Array of path segments or a valid JSON Pointer");if (e.filter = y(e), e.subDocPath = v(e), !d(t, "Undefined")) try {
          c(t, e.subDocPath);
        } catch (r) {
          throw r.message = r.message.replace("JSON Pointer", "options.subDocPath"), r;
        }return e;
      }function w() {
        k = {};
      }function x(e) {
        if (!d(e, "Array")) throw new TypeError("path must be an array");return e.map(function (e) {
          return d(e, "String") || (e = JSON.stringify(e)), decodeURI(e.replace(/~1/g, "/").replace(/~0/g, "~"));
        });
      }function C(e) {
        if (!d(e, "Array")) throw new TypeError("path must be an array");return e.map(function (e) {
          return d(e, "String") || (e = JSON.stringify(e)), e.replace(/~/g, "~0").replace(/\//g, "~1");
        });
      }function O(e, t) {
        var r = {};if (!d(e, "Array") && !d(e, "Object")) throw new TypeError("obj must be an Array or an Object");return t = E(t, e), b(s(e, t.subDocPath), c(e, t.subDocPath), n(t.subDocPath), function (e, o, i) {
          var s,
              a = !0;return l(o) && (d(t.refPreProcessor, "Undefined") || (o = t.refPreProcessor(n(o), i)), s = T(o), d(t.refPostProcessor, "Undefined") || (s = t.refPostProcessor(s, i)), t.filter(s, i) && (r[S(i)] = s), f(o).length > 0 && (a = !1)), a;
        }), r;
      }function P(e, t) {
        var r = Promise.resolve();return r = r.then(function () {
          if (!d(e, "String")) throw new TypeError("location must be a string");return t = E(t), e = i(t.relativeBase, e), h(e, t);
        }).then(function (r) {
          var o = n(k[e]),
              i = n(t),
              s = m(e);return d(o.refs, "Undefined") && (delete i.filter, delete i.subDocPath, i.includeInvalid = !0, k[e].refs = O(r, i)), d(t.filter, "Undefined") || (i.filter = t.filter), d(s.fragment, "Undefined") ? d(s.subDocPath, "Undefined") || (i.subDocPath = t.subDocPath) : i.subDocPath = j(decodeURI(s.fragment)), { refs: O(r, i), value: r };
        });
      }function T(e) {
        var t,
            r,
            n,
            o = { def: e };try {
          l(e, !0) ? (t = e.$ref, n = $[t], d(n, "Undefined") && (n = $[t] = m(t)), o.uri = t, o.uriDetails = n, d(n.error, "Undefined") ? o.type = p(o) : (o.error = o.uriDetails.error, o.type = "invalid"), r = f(e), r.length > 0 && (o.warning = "Extra JSON Reference properties will be ignored: " + r.join(", "))) : o.type = "invalid";
        } catch (i) {
          o.error = i.message, o.type = "invalid";
        }return o;
      }function _(e, t) {
        var r,
            n = !0;try {
          if (!d(e, "String")) throw new Error("ptr is not a String");if ("" !== e) {
            if (r = e.charAt(0), -1 === ["#", "/"].indexOf(r)) throw new Error("ptr must start with a / or #/");if ("#" === r && "#" !== e && "/" !== e.charAt(1)) throw new Error("ptr must start with a / or #/");if (e.match(H)) throw new Error("ptr has invalid token(s)");
          }
        } catch (o) {
          if (t === !0) throw o;n = !1;
        }return n;
      }function A(e, t) {
        return l(e, t) && "invalid" !== T(e, t).type;
      }function j(e) {
        if (!_(e)) throw new Error("ptr must be a JSON Pointer");var t = e.split("/");return t.shift(), x(t);
      }function S(e, t) {
        if (!d(e, "Array")) throw new Error("path must be an Array");return (t !== !1 ? "#" : "") + (e.length > 0 ? "/" : "") + C(e).join("/");
      }function D(e, t) {
        var r = Promise.resolve();return r = r.then(function () {
          if (!d(e, "Array") && !d(e, "Object")) throw new TypeError("obj must be an Array or an Object");t = E(t, e), e = n(e);
        }).then(function () {
          return u(e, t, [], [], { documents: {}, refs: {} });
        }).then(function (t) {
          function r(e, t) {
            return j(e).length - j(t).length;
          }var n = {},
              o = {};return Object.keys(t.refs).sort(r).forEach(function (r) {
            var i = t.refs[r];i.indirect || (o[r] = i), delete i.indirect, d(i.error, "Undefined") && "invalid" !== i.type ? (d(i.value, "Undefined") && i.circular && (i.value = i.def), d(i.value, "Undefined") ? n[r] = i : ("#" === r ? e = i.value : g(e, j(r), i.value), delete i.ancestorPtrs)) : delete i.ancestorPtrs;
          }), Object.keys(n).forEach(function (r) {
            var o = n[r];o.ancestorPtrs.forEach(function (n, i) {
              if (d(o.value, "Undefined")) try {
                o.value = c(t.documents[n], j(o.uri)), delete o.ancestorPtrs, g(e, j(r), o.value);
              } catch (s) {
                i === o.ancestorPtrs.length - 1 && (o.error = s.message, o.missing = !0, delete o.ancestorPtrs);
              }
            });
          }), { refs: o, resolved: e };
        });
      }function R(e, t) {
        var r = Promise.resolve();return r = r.then(function () {
          if (!d(e, "String")) throw new TypeError("location must be a string");return t = E(t), e = i(t.relativeBase, e), h(e, t);
        }).then(function (r) {
          var o = n(t),
              i = m(e);return d(i.fragment, "Undefined") || (o.subDocPath = j(decodeURI(i.fragment))), o.relativeBase = U.dirname(e), D(r, o).then(function (e) {
            return { refs: e.refs, resolved: e.resolved, value: r };
          });
        });
      }var U = e("path"),
          I = e("path-loader"),
          N = e("querystring"),
          F = e("slash"),
          q = e("uri-js"),
          H = /~(?:[^01]|$)/g,
          k = {},
          L = ["relative", "remote"],
          M = ["absolute", "uri"],
          $ = {};"undefined" == typeof Promise && e("native-promise-only"), t.exports.clearCache = w, t.exports.decodePath = x, t.exports.encodePath = C, t.exports.findRefs = O, t.exports.findRefsAt = P, t.exports.getRefDetails = T, t.exports.isPtr = _, t.exports.isRef = A, t.exports.pathFromPtr = j, t.exports.pathToPtr = S, t.exports.resolveRefs = D, t.exports.resolveRefsAt = R;
    }, { "native-promise-only": 3, path: 4, "path-loader": 5, querystring: 11, slash: 13, "uri-js": 23 }], 2: [function (e, t, r) {
      function n(e) {
        return e ? o(e) : void 0;
      }function o(e) {
        for (var t in n.prototype) {
          e[t] = n.prototype[t];
        }return e;
      }t.exports = n, n.prototype.on = n.prototype.addEventListener = function (e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
      }, n.prototype.once = function (e, t) {
        function r() {
          this.off(e, r), t.apply(this, arguments);
        }return r.fn = t, this.on(e, r), this;
      }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var r = this._callbacks["$" + e];if (!r) return this;if (1 == arguments.length) return delete this._callbacks["$" + e], this;for (var n, o = 0; o < r.length; o++) {
          if (n = r[o], n === t || n.fn === t) {
            r.splice(o, 1);break;
          }
        }return this;
      }, n.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};var t = [].slice.call(arguments, 1),
            r = this._callbacks["$" + e];if (r) {
          r = r.slice(0);for (var n = 0, o = r.length; o > n; ++n) {
            r[n].apply(this, t);
          }
        }return this;
      }, n.prototype.listeners = function (e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
      }, n.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
      };
    }, {}], 3: [function (t, r, n) {
      (function (t) {
        !function (t, n, o) {
          n[t] = n[t] || o(), "undefined" != typeof r && r.exports ? r.exports = n[t] : "function" == typeof e && e.amd && e(function () {
            return n[t];
          });
        }("Promise", "undefined" != typeof t ? t : this, function () {
          "use strict";
          function e(e, t) {
            h.add(e, t), p || (p = d(h.drain));
          }function t(e) {
            var t,
                r = typeof e === "undefined" ? "undefined" : _typeof(e);return null == e || "object" != r && "function" != r || (t = e.then), "function" == typeof t ? t : !1;
          }function r() {
            for (var e = 0; e < this.chain.length; e++) {
              n(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
            }this.chain.length = 0;
          }function n(e, r, n) {
            var o, i;try {
              r === !1 ? n.reject(e.msg) : (o = r === !0 ? e.msg : r.call(void 0, e.msg), o === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = t(o)) ? i.call(o, n.resolve, n.reject) : n.resolve(o));
            } catch (s) {
              n.reject(s);
            }
          }function o(n) {
            var s,
                u = this;if (!u.triggered) {
              u.triggered = !0, u.def && (u = u.def);try {
                (s = t(n)) ? e(function () {
                  var e = new a(u);try {
                    s.call(n, function () {
                      o.apply(e, arguments);
                    }, function () {
                      i.apply(e, arguments);
                    });
                  } catch (t) {
                    i.call(e, t);
                  }
                }) : (u.msg = n, u.state = 1, u.chain.length > 0 && e(r, u));
              } catch (c) {
                i.call(new a(u), c);
              }
            }
          }function i(t) {
            var n = this;n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = t, n.state = 2, n.chain.length > 0 && e(r, n));
          }function s(e, t, r, n) {
            for (var o = 0; o < t.length; o++) {
              !function (o) {
                e.resolve(t[o]).then(function (e) {
                  r(o, e);
                }, n);
              }(o);
            }
          }function a(e) {
            this.def = e, this.triggered = !1;
          }function u(e) {
            this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
          }function c(t) {
            if ("function" != typeof t) throw TypeError("Not a function");if (0 !== this.__NPO__) throw TypeError("Not a promise");this.__NPO__ = 1;var n = new u(this);this.then = function (t, o) {
              var i = { success: "function" == typeof t ? t : !0, failure: "function" == typeof o ? o : !1 };return i.promise = new this.constructor(function (e, t) {
                if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");i.resolve = e, i.reject = t;
              }), n.chain.push(i), 0 !== n.state && e(r, n), i.promise;
            }, this["catch"] = function (e) {
              return this.then(void 0, e);
            };try {
              t.call(void 0, function (e) {
                o.call(n, e);
              }, function (e) {
                i.call(n, e);
              });
            } catch (s) {
              i.call(n, s);
            }
          }var f,
              p,
              h,
              l = Object.prototype.toString,
              d = "undefined" != typeof setImmediate ? function (e) {
            return setImmediate(e);
          } : setTimeout;try {
            Object.defineProperty({}, "x", {}), f = function f(e, t, r, n) {
              return Object.defineProperty(e, t, { value: r, writable: !0, configurable: n !== !1 });
            };
          } catch (y) {
            f = function f(e, t, r) {
              return e[t] = r, e;
            };
          }h = function () {
            function e(e, t) {
              this.fn = e, this.self = t, this.next = void 0;
            }var t, r, n;return { add: function add(o, i) {
                n = new e(o, i), r ? r.next = n : t = n, r = n, n = void 0;
              }, drain: function drain() {
                var e = t;for (t = r = p = void 0; e;) {
                  e.fn.call(e.self), e = e.next;
                }
              } };
          }();var v = f({}, "constructor", c, !1);return c.prototype = v, f(v, "__NPO__", 0, !1), f(c, "resolve", function (e) {
            var t = this;return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && 1 === e.__NPO__ ? e : new t(function (t, r) {
              if ("function" != typeof t || "function" != typeof r) throw TypeError("Not a function");t(e);
            });
          }), f(c, "reject", function (e) {
            return new this(function (t, r) {
              if ("function" != typeof t || "function" != typeof r) throw TypeError("Not a function");r(e);
            });
          }), f(c, "all", function (e) {
            var t = this;return "[object Array]" != l.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function (r, n) {
              if ("function" != typeof r || "function" != typeof n) throw TypeError("Not a function");var o = e.length,
                  i = Array(o),
                  a = 0;s(t, e, function (e, t) {
                i[e] = t, ++a === o && r(i);
              }, n);
            });
          }), f(c, "race", function (e) {
            var t = this;return "[object Array]" != l.call(e) ? t.reject(TypeError("Not an array")) : new t(function (r, n) {
              if ("function" != typeof r || "function" != typeof n) throw TypeError("Not a function");s(t, e, function (e, t) {
                r(t);
              }, n);
            });
          }), c;
        });
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 4: [function (e, t, r) {
      (function (e) {
        function t(e, t) {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var o = e[n];"." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
          }if (t) for (; r--; r) {
            e.unshift("..");
          }return e;
        }function n(e, t) {
          if (e.filter) return e.filter(t);for (var r = [], n = 0; n < e.length; n++) {
            t(e[n], n, e) && r.push(e[n]);
          }return r;
        }var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function i(e) {
          return o.exec(e).slice(1);
        };r.resolve = function () {
          for (var r = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
            var s = i >= 0 ? arguments[i] : e.cwd();if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");s && (r = s + "/" + r, o = "/" === s.charAt(0));
          }return r = t(n(r.split("/"), function (e) {
            return !!e;
          }), !o).join("/"), (o ? "/" : "") + r || ".";
        }, r.normalize = function (e) {
          var o = r.isAbsolute(e),
              i = "/" === s(e, -1);return e = t(n(e.split("/"), function (e) {
            return !!e;
          }), !o).join("/"), e || o || (e = "."), e && i && (e += "/"), (o ? "/" : "") + e;
        }, r.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }, r.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);return r.normalize(n(e, function (e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");return e;
          }).join("/"));
        }, r.relative = function (e, t) {
          function n(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) {}for (var r = e.length - 1; r >= 0 && "" === e[r]; r--) {}return t > r ? [] : e.slice(t, r - t + 1);
          }e = r.resolve(e).substr(1), t = r.resolve(t).substr(1);for (var o = n(e.split("/")), i = n(t.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; s > u; u++) {
            if (o[u] !== i[u]) {
              a = u;break;
            }
          }for (var c = [], u = a; u < o.length; u++) {
            c.push("..");
          }return c = c.concat(i.slice(a)), c.join("/");
        }, r.sep = "/", r.delimiter = ":", r.dirname = function (e) {
          var t = i(e),
              r = t[0],
              n = t[1];return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : ".";
        }, r.basename = function (e, t) {
          var r = i(e)[2];return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
        }, r.extname = function (e) {
          return i(e)[3];
        };var s = "b" === "ab".substr(-1) ? function (e, t, r) {
          return e.substr(t, r);
        } : function (e, t, r) {
          return 0 > t && (t = e.length + t), e.substr(t, r);
        };
      }).call(this, e("_process"));
    }, { _process: 8 }], 5: [function (e, t, r) {
      "use strict";
      function n(e) {
        return "undefined" != typeof e && (e = -1 === e.indexOf("://") ? "" : e.split("://")[0]), e;
      }function o(e) {
        var t = n(e),
            r = i[t];if ("undefined" == typeof r) {
          if ("" !== t) throw new Error("Unsupported scheme: " + t);r = s;
        }return r;
      }var i = { file: e("./lib/loaders/file"), http: e("./lib/loaders/http"), https: e("./lib/loaders/http") },
          s = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) || "function" == typeof importScripts ? i.http : i.file;"undefined" == typeof Promise && e("native-promise-only"), t.exports.load = function (e, t) {
        var r = Promise.resolve();return "undefined" == typeof t && (t = {}), r = r.then(function () {
          if ("undefined" == typeof e) throw new TypeError("location is required");if ("string" != typeof e) throw new TypeError("location must be a string");if ("undefined" != typeof t) {
            if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new TypeError("options must be an object");if ("undefined" != typeof t.processContent && "function" != typeof t.processContent) throw new TypeError("options.processContent must be a function");
          }
        }), r = r.then(function () {
          return new Promise(function (r, n) {
            var i = o(e);i.load(e, t || {}, function (e, t) {
              e ? n(e) : r(t);
            });
          });
        }).then(function (e) {
          return t.processContent ? new Promise(function (r, n) {
            t.processContent("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : { text: e }, function (e, t) {
              e ? n(e) : r(t);
            });
          }) : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e.text : e;
        });
      };
    }, { "./lib/loaders/file": 6, "./lib/loaders/http": 7, "native-promise-only": 3 }], 6: [function (e, t, r) {
      "use strict";
      var n = new TypeError("The 'file' scheme is not supported in the browser");t.exports.getBase = function () {
        throw n;
      }, t.exports.load = function () {
        var e = arguments[arguments.length - 1];if ("function" != typeof e) throw n;e(n);
      };
    }, {}], 7: [function (e, t, r) {
      "use strict";
      var n = e("superagent"),
          o = ["delete", "get", "head", "patch", "post", "put"];t.exports.load = function (e, t, r) {
        function i(e, t) {
          e ? r(e) : ("function" == typeof t.buffer && t.buffer(!0), t.end(function (e, t) {
            e ? r(e) : r(void 0, t);
          }));
        }var s,
            a,
            u = t.method ? t.method.toLowerCase() : "get";if ("undefined" != typeof t.method ? "string" != typeof t.method ? s = new TypeError("options.method must be a string") : -1 === o.indexOf(t.method) && (s = new TypeError("options.method must be one of the following: " + o.slice(0, o.length - 1).join(", ") + " or " + o[o.length - 1])) : "undefined" != typeof t.prepareRequest && "function" != typeof t.prepareRequest && (s = new TypeError("options.prepareRequest must be a function")), s) r(s);else if (a = n["delete" === u ? "del" : u](e), t.prepareRequest) try {
          t.prepareRequest(a, i);
        } catch (c) {
          r(c);
        } else i(void 0, a);
      };
    }, { superagent: 14 }], 8: [function (e, t, r) {
      function n() {
        f = !1, a.length ? c = a.concat(c) : p = -1, c.length && o();
      }function o() {
        if (!f) {
          var e = setTimeout(n);f = !0;for (var t = c.length; t;) {
            for (a = c, c = []; ++p < t;) {
              a && a[p].run();
            }p = -1, t = c.length;
          }a = null, f = !1, clearTimeout(e);
        }
      }function i(e, t) {
        this.fun = e, this.array = t;
      }function s() {}var a,
          u = t.exports = {},
          c = [],
          f = !1,
          p = -1;u.nextTick = function (e) {
        var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }c.push(new i(e, t)), 1 !== c.length || f || setTimeout(o, 0);
      }, i.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, u.cwd = function () {
        return "/";
      }, u.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, u.umask = function () {
        return 0;
      };
    }, {}], 9: [function (e, t, r) {
      "use strict";
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }t.exports = function (e, t, r, i) {
        t = t || "&", r = r || "=";var s = {};if ("string" != typeof e || 0 === e.length) return s;var a = /\+/g;e = e.split(t);var u = 1e3;i && "number" == typeof i.maxKeys && (u = i.maxKeys);var c = e.length;u > 0 && c > u && (c = u);for (var f = 0; c > f; ++f) {
          var p,
              h,
              l,
              d,
              y = e[f].replace(a, "%20"),
              v = y.indexOf(r);v >= 0 ? (p = y.substr(0, v), h = y.substr(v + 1)) : (p = y, h = ""), l = decodeURIComponent(p), d = decodeURIComponent(h), n(s, l) ? o(s[l]) ? s[l].push(d) : s[l] = [s[l], d] : s[l] = d;
        }return s;
      };var o = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    }, {}], 10: [function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e.map) return e.map(t);for (var r = [], n = 0; n < e.length; n++) {
          r.push(t(e[n], n));
        }return r;
      }var o = function o(e) {
        switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "string":
            return e;case "boolean":
            return e ? "true" : "false";case "number":
            return isFinite(e) ? e : "";default:
            return "";}
      };t.exports = function (e, t, r, a) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? n(s(e), function (s) {
          var a = encodeURIComponent(o(s)) + r;return i(e[s]) ? n(e[s], function (e) {
            return a + encodeURIComponent(o(e));
          }).join(t) : a + encodeURIComponent(o(e[s]));
        }).join(t) : a ? encodeURIComponent(o(a)) + r + encodeURIComponent(o(e)) : "";
      };var i = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
          s = Object.keys || function (e) {
        var t = [];for (var r in e) {
          Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        }return t;
      };
    }, {}], 11: [function (e, t, r) {
      "use strict";
      r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode");
    }, { "./decode": 9, "./encode": 10 }], 12: [function (e, t, r) {
      t.exports = function (e, t, r) {
        for (var n = 0, o = e.length, i = 3 == arguments.length ? r : e[n++]; o > n;) {
          i = t.call(null, i, e[n], ++n, e);
        }return i;
      };
    }, {}], 13: [function (e, t, r) {
      "use strict";
      t.exports = function (e) {
        var t = /^\\\\\?\\/.test(e),
            r = /[^\x00-\x80]+/.test(e);return t || r ? e : e.replace(/\\/g, "/");
      };
    }, {}], 14: [function (e, t, r) {
      function n() {}function o(e) {
        var t = {}.toString.call(e);switch (t) {case "[object File]":case "[object Blob]":case "[object FormData]":
            return !0;default:
            return !1;}
      }function i(e) {
        if (!b(e)) return e;var t = [];for (var r in e) {
          null != e[r] && s(t, r, e[r]);
        }return t.join("&");
      }function s(e, t, r) {
        return Array.isArray(r) ? r.forEach(function (r) {
          s(e, t, r);
        }) : void e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
      }function a(e) {
        for (var t, r, n = {}, o = e.split("&"), i = 0, s = o.length; s > i; ++i) {
          r = o[i], t = r.split("="), n[decodeURIComponent(t[0])] = decodeURIComponent(t[1]);
        }return n;
      }function u(e) {
        var t,
            r,
            n,
            o,
            i = e.split(/\r?\n/),
            s = {};i.pop();for (var a = 0, u = i.length; u > a; ++a) {
          r = i[a], t = r.indexOf(":"), n = r.slice(0, t).toLowerCase(), o = w(r.slice(t + 1)), s[n] = o;
        }return s;
      }function c(e) {
        return (/[\/+]json\b/.test(e)
        );
      }function f(e) {
        return e.split(/ *; */).shift();
      }function p(e) {
        return m(e.split(/ *; */), function (e, t) {
          var r = t.split(/ *= */),
              n = r.shift(),
              o = r.shift();return n && o && (e[n] = o), e;
        }, {});
      }function h(e, t) {
        t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), this.header = this.headers = u(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
      }function l(e, t) {
        var r = this;this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function () {
          var e = null,
              t = null;try {
            t = new h(r);
          } catch (n) {
            return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = n, e.rawResponse = r.xhr && r.xhr.responseText ? r.xhr.responseText : null, e.statusCode = r.xhr && r.xhr.status ? r.xhr.status : null, r.callback(e);
          }if (r.emit("response", t), e) return r.callback(e, t);if (t.status >= 200 && t.status < 300) return r.callback(e, t);var o = new Error(t.statusText || "Unsuccessful HTTP response");o.original = e, o.response = t, o.status = t.status, r.callback(o, t);
        });
      }function d(e, t) {
        var r = E("DELETE", e);return t && r.end(t), r;
      }var y,
          v = e("emitter"),
          m = e("reduce"),
          g = e("./request-base"),
          b = e("./is-object");y = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;var E = t.exports = e("./request").bind(null, l);E.getXHR = function () {
        if (!(!y.XMLHttpRequest || y.location && "file:" == y.location.protocol && y.ActiveXObject)) return new XMLHttpRequest();try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}return !1;
      };var w = "".trim ? function (e) {
        return e.trim();
      } : function (e) {
        return e.replace(/(^\s*|\s*$)/g, "");
      };E.serializeObject = i, E.parseString = a, E.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, E.serialize = { "application/x-www-form-urlencoded": i, "application/json": JSON.stringify }, E.parse = { "application/x-www-form-urlencoded": a, "application/json": JSON.parse }, h.prototype.get = function (e) {
        return this.header[e.toLowerCase()];
      }, h.prototype.setHeaderProperties = function (e) {
        var t = this.header["content-type"] || "";this.type = f(t);var r = p(t);for (var n in r) {
          this[n] = r[n];
        }
      }, h.prototype.parseBody = function (e) {
        var t = E.parse[this.type];return !t && c(this.type) && (t = E.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null;
      }, h.prototype.setStatusProperties = function (e) {
        1223 === e && (e = 204);var t = e / 100 | 0;this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = 4 == t || 5 == t ? this.toError() : !1, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.notFound = 404 == e, this.forbidden = 403 == e;
      }, h.prototype.toError = function () {
        var e = this.req,
            t = e.method,
            r = e.url,
            n = "cannot " + t + " " + r + " (" + this.status + ")",
            o = new Error(n);return o.status = this.status, o.method = t, o.url = r, o;
      }, E.Response = h, v(l.prototype);for (var x in g) {
        l.prototype[x] = g[x];
      }l.prototype.abort = function () {
        return this.aborted ? void 0 : (this.aborted = !0, this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this);
      }, l.prototype.type = function (e) {
        return this.set("Content-Type", E.types[e] || e), this;
      }, l.prototype.responseType = function (e) {
        return this._responseType = e, this;
      }, l.prototype.accept = function (e) {
        return this.set("Accept", E.types[e] || e), this;
      }, l.prototype.auth = function (e, t, r) {
        switch (r || (r = { type: "basic" }), r.type) {case "basic":
            var n = btoa(e + ":" + t);this.set("Authorization", "Basic " + n);break;case "auto":
            this.username = e, this.password = t;}return this;
      }, l.prototype.query = function (e) {
        return "string" != typeof e && (e = i(e)), e && this._query.push(e), this;
      }, l.prototype.attach = function (e, t, r) {
        return this._getFormData().append(e, t, r || t.name), this;
      }, l.prototype._getFormData = function () {
        return this._formData || (this._formData = new y.FormData()), this._formData;
      }, l.prototype.send = function (e) {
        var t = b(e),
            r = this._header["content-type"];if (t && b(this._data)) for (var n in e) {
          this._data[n] = e[n];
        } else "string" == typeof e ? (r || this.type("form"), r = this._header["content-type"], "application/x-www-form-urlencoded" == r ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;return !t || o(e) ? this : (r || this.type("json"), this);
      }, h.prototype.parse = function (e) {
        return y.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), this.serialize(e), this;
      }, h.prototype.serialize = function (e) {
        return this._parser = e, this;
      }, l.prototype.callback = function (e, t) {
        var r = this._callback;this.clearTimeout(), r(e, t);
      }, l.prototype.crossDomainError = function () {
        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e);
      }, l.prototype.timeoutError = function () {
        var e = this._timeout,
            t = new Error("timeout of " + e + "ms exceeded");t.timeout = e, this.callback(t);
      }, l.prototype.withCredentials = function () {
        return this._withCredentials = !0, this;
      }, l.prototype.end = function (e) {
        var t = this,
            r = this.xhr = E.getXHR(),
            i = this._query.join("&"),
            s = this._timeout,
            a = this._formData || this._data;this._callback = e || n, r.onreadystatechange = function () {
          if (4 == r.readyState) {
            var e;try {
              e = r.status;
            } catch (n) {
              e = 0;
            }if (0 == e) {
              if (t.timedout) return t.timeoutError();if (t.aborted) return;return t.crossDomainError();
            }t.emit("end");
          }
        };var u = function u(e) {
          e.total > 0 && (e.percent = e.loaded / e.total * 100), e.direction = "download", t.emit("progress", e);
        };this.hasListeners("progress") && (r.onprogress = u);try {
          r.upload && this.hasListeners("progress") && (r.upload.onprogress = u);
        } catch (f) {}if (s && !this._timer && (this._timer = setTimeout(function () {
          t.timedout = !0, t.abort();
        }, s)), i && (i = E.serializeObject(i), this.url += ~this.url.indexOf("?") ? "&" + i : "?" + i), this.username && this.password ? r.open(this.method, this.url, !0, this.username, this.password) : r.open(this.method, this.url, !0), this._withCredentials && (r.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof a && !o(a)) {
          var p = this._header["content-type"],
              h = this._parser || E.serialize[p ? p.split(";")[0] : ""];!h && c(p) && (h = E.serialize["application/json"]), h && (a = h(a));
        }for (var l in this.header) {
          null != this.header[l] && r.setRequestHeader(l, this.header[l]);
        }return this._responseType && (r.responseType = this._responseType), this.emit("request", this), r.send("undefined" != typeof a ? a : null), this;
      }, E.Request = l, E.get = function (e, t, r) {
        var n = E("GET", e);return "function" == typeof t && (r = t, t = null), t && n.query(t), r && n.end(r), n;
      }, E.head = function (e, t, r) {
        var n = E("HEAD", e);return "function" == typeof t && (r = t, t = null), t && n.send(t), r && n.end(r), n;
      }, E.del = d, E["delete"] = d, E.patch = function (e, t, r) {
        var n = E("PATCH", e);return "function" == typeof t && (r = t, t = null), t && n.send(t), r && n.end(r), n;
      }, E.post = function (e, t, r) {
        var n = E("POST", e);return "function" == typeof t && (r = t, t = null), t && n.send(t), r && n.end(r), n;
      }, E.put = function (e, t, r) {
        var n = E("PUT", e);return "function" == typeof t && (r = t, t = null), t && n.send(t), r && n.end(r), n;
      };
    }, { "./is-object": 15, "./request": 17, "./request-base": 16, emitter: 2, reduce: 12 }], 15: [function (e, t, r) {
      function n(e) {
        return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      }t.exports = n;
    }, {}], 16: [function (e, t, r) {
      var n = e("./is-object");r.clearTimeout = function () {
        return this._timeout = 0, clearTimeout(this._timer), this;
      }, r.parse = function (e) {
        return this._parser = e, this;
      }, r.timeout = function (e) {
        return this._timeout = e, this;
      }, r.then = function (e, t) {
        return this.end(function (r, n) {
          r ? t(r) : e(n);
        });
      }, r.use = function (e) {
        return e(this), this;
      }, r.get = function (e) {
        return this._header[e.toLowerCase()];
      }, r.getHeader = r.get, r.set = function (e, t) {
        if (n(e)) {
          for (var r in e) {
            this.set(r, e[r]);
          }return this;
        }return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
      }, r.unset = function (e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this;
      }, r.field = function (e, t) {
        return this._getFormData().append(e, t), this;
      };
    }, { "./is-object": 15 }], 17: [function (e, t, r) {
      function n(e, t, r) {
        return "function" == typeof r ? new e("GET", t).end(r) : 2 == arguments.length ? new e("GET", t) : new e(t, r);
      }t.exports = n;
    }, {}], 18: [function (e, t, r) {
      var n = function () {
        function e(e) {
          throw new RangeError(P[e]);
        }function t(e, t) {
          for (var r = e.length, n = []; r--;) {
            n[r] = t(e[r]);
          }return n;
        }function r(e, r) {
          var n = e.split("@"),
              o = "";n.length > 1 && (o = n[0] + "@", e = n[1]), e = e.replace(O, ".");var i = e.split("."),
              s = t(i, r).join(".");return o + s;
        }function n(e) {
          for (var t, r, n = [], o = 0, i = e.length; i > o;) {
            t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && i > o ? (r = e.charCodeAt(o++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), o--)) : n.push(t);
          }return n;
        }function o(e) {
          return t(e, function (e) {
            var t = "";return e > 65535 && (e -= 65536, t += A(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e);
          }).join("");
        }function i(e) {
          return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : d;
        }function s(e, t) {
          return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
        }function a(e, t, r) {
          var n = 0;for (e = r ? _(e / g) : e >> 1, e += _(e / t); e > T * v >> 1; n += d) {
            e = _(e / T);
          }return _(n + (T + 1) * e / (e + m));
        }function u(t) {
          var r,
              n,
              s,
              u,
              c,
              f,
              p,
              h,
              m,
              g,
              x = [],
              C = t.length,
              O = 0,
              P = E,
              T = b;for (n = t.lastIndexOf(w), 0 > n && (n = 0), s = 0; n > s; ++s) {
            t.charCodeAt(s) >= 128 && e("not-basic"), x.push(t.charCodeAt(s));
          }for (u = n > 0 ? n + 1 : 0; C > u;) {
            for (c = O, f = 1, p = d; u >= C && e("invalid-input"), h = i(t.charCodeAt(u++)), (h >= d || h > _((l - O) / f)) && e("overflow"), O += h * f, m = T >= p ? y : p >= T + v ? v : p - T, !(m > h); p += d) {
              g = d - m, f > _(l / g) && e("overflow"), f *= g;
            }r = x.length + 1, T = a(O - c, r, 0 == c), _(O / r) > l - P && e("overflow"), P += _(O / r), O %= r, x.splice(O++, 0, P);
          }return o(x);
        }function c(t) {
          var r,
              o,
              i,
              u,
              c,
              f,
              p,
              h,
              m,
              g,
              x,
              C,
              O,
              P,
              T,
              j = [];for (t = n(t), C = t.length, r = E, o = 0, c = b, f = 0; C > f; ++f) {
            x = t[f], 128 > x && j.push(A(x));
          }for (i = u = j.length, u && j.push(w); C > i;) {
            for (p = l, f = 0; C > f; ++f) {
              x = t[f], x >= r && p > x && (p = x);
            }for (O = i + 1, p - r > _((l - o) / O) && e("overflow"), o += (p - r) * O, r = p, f = 0; C > f; ++f) {
              if (x = t[f], r > x && ++o > l && e("overflow"), x == r) {
                for (h = o, m = d; g = c >= m ? y : m >= c + v ? v : m - c, !(g > h); m += d) {
                  T = h - g, P = d - g, j.push(A(s(g + T % P, 0))), h = _(T / P);
                }j.push(A(s(h, 0))), c = a(o, O, i == u), o = 0, ++i;
              }
            }++o, ++r;
          }return j.join("");
        }function f(e) {
          return r(e, function (e) {
            return x.test(e) ? u(e.slice(4).toLowerCase()) : e;
          });
        }function p(e) {
          return r(e, function (e) {
            return C.test(e) ? "xn--" + c(e) : e;
          });
        }var h,
            l = 2147483647,
            d = 36,
            y = 1,
            v = 26,
            m = 38,
            g = 700,
            b = 72,
            E = 128,
            w = "-",
            x = /^xn--/,
            C = /[^\x20-\x7E]/,
            O = /[\x2E\u3002\uFF0E\uFF61]/g,
            P = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
            T = d - y,
            _ = Math.floor,
            A = String.fromCharCode;return h = { version: "1.3.2", ucs2: { decode: n, encode: o }, decode: u, encode: c, toASCII: p, toUnicode: f };
      }();"undefined" == typeof COMPILED && "undefined" != typeof t && (t.exports = n);
    }, {}], 19: [function (e, t, r) {
      e("./schemes/http"), e("./schemes/urn"), e("./schemes/mailto");
    }, { "./schemes/http": 20, "./schemes/mailto": 21, "./schemes/urn": 22 }], 20: [function (e, t, r) {
      if ("undefined" == typeof COMPILED && "undefined" == typeof n && "function" == typeof e) var n = e("../uri");n.SCHEMES.http = n.SCHEMES.https = { domainHost: !0, parse: function parse(e, t) {
          return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
        }, serialize: function serialize(e, t) {
          return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e;
        } };
    }, { "../uri": 23 }], 21: [function (e, t, r) {
      if ("undefined" == typeof COMPILED && "undefined" == typeof n && "function" == typeof e) var n = e("../uri"),
          o = e("../punycode");!function () {
        function e() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            e[t - 0] = arguments[t];
          }if (e.length > 1) {
            e[0] = e[0].slice(0, -1);for (var r = e.length - 1, n = 1; r > n; ++n) {
              e[n] = e[n].slice(1, -1);
            }return e[r] = e[r].slice(1), e.join("");
          }return e[0];
        }function t(e) {
          return "(?:" + e + ")";
        }function r(e) {
          return e.toUpperCase();
        }function i(e) {
          var t = n.pctDecChars(e);return t.match(D) ? t : e;
        }function s(e) {
          return void 0 !== e && null !== e ? e instanceof Array && !e.callee ? e : "number" != typeof e.length || e.split || e.setInterval || e.call ? [e] : Array.prototype.slice.call(e) : [];
        }var a = {},
            u = n.IRI_SUPPORT,
            c = "[A-Za-z0-9\\-\\.\\_\\~" + (u ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]",
            f = "[0-9A-Fa-f]",
            p = t(t("%[EFef]" + f + "%" + f + f + "%" + f + f) + "|" + t("%[89A-Fa-f]" + f + "%" + f + f) + "|" + t("%" + f + f)),
            h = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
            l = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",
            d = e(l, '[\\"\\\\]'),
            y = t(h + "+" + t("\\." + h + "+") + "*"),
            v = t("\\\\" + d),
            m = t(l + "|" + v),
            g = t('\\"' + m + '*\\"'),
            b = "[\\x21-\\x5A\\x5E-\\x7E]",
            E = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",
            w = t(c + "|" + p + "|" + E),
            x = t(y + "|\\[" + b + "*\\]"),
            C = t(y + "|" + g),
            O = t(C + "\\@" + x),
            P = t(O + t("\\," + O) + "*"),
            T = t(w + "*"),
            _ = T,
            A = t(T + "\\=" + _),
            j = t(A + t("\\&" + A) + "*"),
            S = t("\\?" + j),
            D = (n.VALIDATE_SUPPORT && new RegExp("^mailto\\:" + P + "?" + S + "?$"), new RegExp(c, "g")),
            R = new RegExp(p, "g"),
            U = new RegExp(e("[^]", h, "[\\.]", '[\\"]', d), "g"),
            I = new RegExp(e("[^]", h, "[\\.]", "[\\[]", b, "[\\]]"), "g"),
            N = new RegExp(e("[^]", c, E), "g"),
            F = N,
            q = n.VALIDATE_SUPPORT && new RegExp("^" + P + "$"),
            H = n.VALIDATE_SUPPORT && new RegExp("^" + j + "$");n.SCHEMES.mailto = { parse: function parse(e, t) {
            n.VALIDATE_SUPPORT && !e.error && (e.path && !q.test(e.path) ? e.error = "Email address is not valid" : e.query && !H.test(e.query) && (e.error = "Header fields are invalid"));var r = e.to = e.path ? e.path.split(",") : [];if (e.path = void 0, e.query) {
              for (var i = !1, s = {}, a = e.query.split("&"), u = 0, c = a.length; c > u; ++u) {
                var f = a[u].split("=");switch (f[0]) {case "to":
                    for (var p = f[1].split(","), h = 0, l = p.length; l > h; ++h) {
                      r.push(p[h]);
                    }break;case "subject":
                    e.subject = n.unescapeComponent(f[1], t);break;case "body":
                    e.body = n.unescapeComponent(f[1], t);break;default:
                    i = !0, s[n.unescapeComponent(f[0], t)] = n.unescapeComponent(f[1], t);}
              }i && (e.headers = s);
            }e.query = void 0;for (var u = 0, c = r.length; c > u; ++u) {
              var d = r[u].split("@");if (d[0] = n.unescapeComponent(d[0]), "undefined" == typeof o || t.unicodeSupport) d[1] = n.unescapeComponent(d[1], t).toLowerCase();else try {
                d[1] = o.toASCII(n.unescapeComponent(d[1], t).toLowerCase());
              } catch (y) {
                e.error = e.error || "Email address's domain name can not be converted to ASCII via punycode: " + y;
              }r[u] = d.join("@");
            }return e;
          }, serialize: function serialize(e, t) {
            var u = s(e.to);if (u) {
              for (var c = 0, f = u.length; f > c; ++c) {
                var p = String(u[c]),
                    h = p.lastIndexOf("@"),
                    l = p.slice(0, h),
                    d = p.slice(h + 1);if (l = l.replace(R, i).replace(R, r).replace(U, n.pctEncChar), "undefined" != typeof o) try {
                  d = t.iri ? o.toUnicode(d) : o.toASCII(n.unescapeComponent(d, t).toLowerCase());
                } catch (y) {
                  e.error = e.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + y;
                } else d = d.replace(R, i).toLowerCase().replace(R, r).replace(I, n.pctEncChar);u[c] = l + "@" + d;
              }e.path = u.join(",");
            }var v = e.headers = e.headers || {};e.subject && (v.subject = e.subject), e.body && (v.body = e.body);var m = [];for (var g in v) {
              v[g] !== a[g] && m.push(g.replace(R, i).replace(R, r).replace(N, n.pctEncChar) + "=" + v[g].replace(R, i).replace(R, r).replace(F, n.pctEncChar));
            }return m.length && (e.query = m.join("&")), e;
          } };
      }();
    }, { "../punycode": 18, "../uri": 23 }], 22: [function (e, t, r) {
      if ("undefined" == typeof COMPILED && "undefined" == typeof n && "function" == typeof e) var n = e("../uri");!function () {
        var e = n.pctEncChar,
            t = "(?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31})",
            r = "(?:\\%[0-9A-Fa-f]{2})",
            o = "[0-9A-Za-z\\(\\)\\+\\,\\-\\.\\:\\=\\@\\;\\$\\_\\!\\*\\'\\/\\?\\#]",
            i = "(?:(?:" + r + "|" + o + ")+)",
            s = new RegExp("^urn\\:(" + t + ")$"),
            a = new RegExp("^(" + t + ")\\:(" + i + ")$"),
            u = /^([^\:]+)\:(.*)/,
            c = /[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g,
            f = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;n.SCHEMES.urn = { parse: function parse(e, t) {
            var r,
                o,
                i = e.path.match(a);return i || (t.tolerant || (e.error = e.error || "URN is not strictly valid."), i = e.path.match(u)), i ? (r = "urn:" + i[1].toLowerCase(), o = n.SCHEMES[r], o || (o = n.SCHEMES[r] = { parse: function parse(e, t) {
                return e;
              }, serialize: n.SCHEMES.urn.serialize }), e.scheme = r, e.path = i[2], e = o.parse(e, t)) : e.error = e.error || "URN can not be parsed.", e;
          }, serialize: function serialize(t, r) {
            var n,
                o = t.scheme || r.scheme;if (o && "urn" !== o) {
              var n = o.match(s);n || (n = ["urn:" + o, o]), t.scheme = "urn", t.path = n[1] + ":" + (t.path ? t.path.replace(c, e) : "");
            }return t;
          } }, n.SCHEMES["urn:uuid"] = { parse: function parse(e, t) {
            return t.tolerant || e.path && e.path.match(f) || (e.error = e.error || "UUID is not valid."), e;
          }, serialize: function serialize(e, t) {
            return t.tolerant || e.path && e.path.match(f) ? e.path = (e.path || "").toLowerCase() : e.scheme = void 0, n.SCHEMES.urn.serialize(e, t);
          } };
      }();
    }, { "../uri": 23 }], 23: [function (e, t, r) {
      var n = !1,
          o = !0,
          i = !0,
          s = function () {
        function e() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            e[t - 0] = arguments[t];
          }if (e.length > 1) {
            e[0] = e[0].slice(0, -1);for (var r = e.length - 1, n = 1; r > n; ++n) {
              e[n] = e[n].slice(1, -1);
            }return e[r] = e[r].slice(1), e.join("");
          }return e[0];
        }function t(e) {
          return "(?:" + e + ")";
        }function r(r) {
          var n = "[A-Za-z]",
              o = "[0-9]",
              s = e(o, "[A-Fa-f]"),
              a = t(t("%[EFef]" + s + "%" + s + s + "%" + s + s) + "|" + t("%[89A-Fa-f]" + s + "%" + s + s) + "|" + t("%" + s + s)),
              u = "[\\:\\/\\?\\#\\[\\]\\@]",
              c = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
              f = e(u, c),
              p = r ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
              h = r ? "[\\uE000-\\uF8FF]" : "[]",
              l = e(n, o, "[\\-\\.\\_\\~]", p),
              d = t(n + e(n, o, "[\\+\\-\\.]") + "*"),
              y = t(t(a + "|" + e(l, c, "[\\:]")) + "*"),
              v = t(t("25[0-5]") + "|" + t("2[0-4]" + o) + "|" + t("1" + o + o) + "|" + t("[1-9]" + o) + "|" + o),
              m = t(v + "\\." + v + "\\." + v + "\\." + v),
              g = t(s + "{1,4}"),
              b = (t(t(g + "\\:" + g) + "|" + m), t(e(l, c, "[\\:]") + "+")),
              E = t("v" + s + "+\\." + e(l, c, "[\\:]") + "+"),
              w = t("\\[" + t(b + "|" + E) + "\\]"),
              x = t(t(a + "|" + e(l, c)) + "*"),
              C = t(w + "|" + m + "(?!" + x + ")|" + x),
              O = t(o + "*"),
              P = t(t(y + "@") + "?" + C + t("\\:" + O) + "?"),
              T = t(a + "|" + e(l, c, "[\\:\\@]")),
              _ = t(T + "*"),
              A = t(T + "+"),
              j = t(t(a + "|" + e(l, c, "[\\@]")) + "+"),
              S = t(t("\\/" + _) + "*"),
              D = t("\\/" + t(A + S) + "?"),
              R = t(j + S),
              U = t(A + S),
              I = "(?!" + T + ")",
              N = (t(S + "|" + D + "|" + R + "|" + U + "|" + I), t(t(T + "|" + e("[\\/\\?]", h)) + "*")),
              F = t(t(T + "|[\\/\\?]") + "*"),
              q = t(t("\\/\\/" + P + S) + "|" + D + "|" + U + "|" + I),
              H = t(d + "\\:" + q + t("\\?" + N) + "?" + t("\\#" + F) + "?"),
              k = t(t("\\/\\/" + P + S) + "|" + D + "|" + R + "|" + I),
              L = t(k + t("\\?" + N) + "?" + t("\\#" + F) + "?"),
              M = (t(H + "|" + L), t(d + "\\:" + q + t("\\?" + N) + "?"), "^(" + d + ")\\:" + t(t("\\/\\/(" + t("(" + y + ")@") + "?(" + C + ")" + t("\\:(" + O + ")") + "?)") + "?(" + S + "|" + D + "|" + U + "|" + I + ")") + t("\\?(" + N + ")") + "?" + t("\\#(" + F + ")") + "?$"),
              $ = "^(){0}" + t(t("\\/\\/(" + t("(" + y + ")@") + "?(" + C + ")" + t("\\:(" + O + ")") + "?)") + "?(" + S + "|" + D + "|" + R + "|" + I + ")") + t("\\?(" + N + ")") + "?" + t("\\#(" + F + ")") + "?$";"^(" + d + ")\\:" + t(t("\\/\\/(" + t("(" + y + ")@") + "?(" + C + ")" + t("\\:(" + O + ")") + "?)") + "?(" + S + "|" + D + "|" + U + "|" + I + ")") + t("\\?(" + N + ")") + "?$", "^" + t("\\#(" + F + ")") + "?$", "^" + t("(" + y + ")@") + "?(" + C + ")" + t("\\:(" + O + ")") + "?$";return { URI_REF: i && new RegExp("(" + M + ")|(" + $ + ")"), NOT_SCHEME: new RegExp(e("[^]", n, o, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(e("[^\\%\\:]", l, c), "g"), NOT_HOST: new RegExp(e("[^\\%]", l, c), "g"), NOT_PATH: new RegExp(e("[^\\%\\/\\:\\@]", l, c), "g"), NOT_PATH_NOSCHEME: new RegExp(e("[^\\%\\/\\@]", l, c), "g"), NOT_QUERY: new RegExp(e("[^\\%]", l, c, "[\\:\\@\\/\\?]", h), "g"), NOT_FRAGMENT: new RegExp(e("[^\\%]", l, c, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(e("[^]", l, c), "g"), UNRESERVED: new RegExp(l, "g"), OTHER_CHARS: new RegExp(e("[^\\%]", l, f), "g"), PCT_ENCODED: new RegExp(a, "g") };
        }function n(e) {
          var t,
              r = e.charCodeAt(0);return t = 16 > r ? "%0" + r.toString(16).toUpperCase() : 128 > r ? "%" + r.toString(16).toUpperCase() : 2048 > r ? "%" + (r >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase() : "%" + (r >> 12 | 224).toString(16).toUpperCase() + "%" + (r >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase();
        }function s(e) {
          for (var t, r, n, o = "", i = 0, s = e.length; s > i;) {
            t = parseInt(e.substr(i + 1, 2), 16), 128 > t ? (o += String.fromCharCode(t), i += 3) : t >= 194 && 224 > t ? (s - i >= 6 ? (r = parseInt(e.substr(i + 4, 2), 16), o += String.fromCharCode((31 & t) << 6 | 63 & r)) : o += e.substr(i, 6), i += 6) : t >= 224 ? (s - i >= 9 ? (r = parseInt(e.substr(i + 4, 2), 16), n = parseInt(e.substr(i + 7, 2), 16), o += String.fromCharCode((15 & t) << 12 | (63 & r) << 6 | 63 & n)) : o += e.substr(i, 9), i += 9) : (o += e.substr(i, 3), i += 3);
          }return o;
        }function u(e) {
          return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();
        }function c(e) {
          return e.toUpperCase();
        }function f(e, t) {
          function r(e) {
            var r = s(e);return r.match(t.UNRESERVED) ? r : e;
          }return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, r).replace(t.NOT_USERINFO, n).replace(t.PCT_ENCODED, c)), void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_HOST, n).replace(t.PCT_ENCODED, c)), void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, r).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, n).replace(t.PCT_ENCODED, c)), void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, r).replace(t.NOT_QUERY, n).replace(t.PCT_ENCODED, c)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, r).replace(t.NOT_FRAGMENT, n).replace(t.PCT_ENCODED, c)), e;
        }function p(e, t) {
          void 0 === t && (t = {});var r,
              n,
              u = o && t.iri !== !1 ? x : w,
              c = !1,
              p = {};if ("suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e), i ? (r = e.match(u.URI_REF), r && (r = r[1] ? r.slice(1, 10) : r.slice(10, 19)), r || (c = !0, t.tolerant || (p.error = p.error || "URI is not strictly valid."), r = e.match(C))) : r = e.match(C), r) {
            if (A ? (p.scheme = r[1], p.userinfo = r[3], p.host = r[4], p.port = parseInt(r[5], 10), p.path = r[6] || "", p.query = r[7], p.fragment = r[8], isNaN(p.port) && (p.port = r[5])) : (p.scheme = r[1] || void 0, p.userinfo = -1 !== e.indexOf("@") ? r[3] : void 0, p.host = -1 !== e.indexOf("//") ? r[4] : void 0, p.port = parseInt(r[5], 10), p.path = r[6] || "", p.query = -1 !== e.indexOf("?") ? r[7] : void 0, p.fragment = -1 !== e.indexOf("#") ? r[8] : void 0, isNaN(p.port) && (p.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? r[4] : void 0)), void 0 !== p.scheme || void 0 !== p.userinfo || void 0 !== p.host || void 0 !== p.port || p.path || void 0 !== p.query ? void 0 === p.scheme ? p.reference = "relative" : void 0 === p.fragment ? p.reference = "absolute" : p.reference = "uri" : p.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== p.reference && (p.error = p.error || "URI is not a " + t.reference + " reference."), n = j[(t.scheme || p.scheme || "").toLowerCase()], !o || "undefined" == typeof a || t.unicodeSupport || n && n.unicodeSupport) f(p, u);else {
              if (p.host && (t.domainHost || n && n.domainHost)) try {
                p.host = a.toASCII(p.host.replace(u.PCT_ENCODED, s).toLowerCase());
              } catch (h) {
                p.error = p.error || "Host's domain name can not be converted to ASCII via punycode: " + h;
              }f(p, w);
            }n && n.parse && n.parse(p, t);
          } else c = !0, p.error = p.error || "URI can not be parsed.";return p;
        }function h(e, t) {
          var r = [];return void 0 !== e.userinfo && (r.push(e.userinfo), r.push("@")), void 0 !== e.host && r.push(e.host), "number" == typeof e.port && (r.push(":"), r.push(e.port.toString(10))), r.length ? r.join("") : void 0;
        }function l(e) {
          for (var t, r = []; e.length;) {
            e.match(O) ? e = e.replace(O, "") : e.match(P) ? e = e.replace(P, "/") : e.match(T) ? (e = e.replace(T, "/"), r.pop()) : "." === e || ".." === e ? e = "" : (t = e.match(_)[0], e = e.slice(t.length), r.push(t));
          }return r.join("");
        }function d(e, t) {
          void 0 === t && (t = {});var r,
              n,
              i,
              u = o && t.iri ? x : w,
              c = [];if (r = j[(t.scheme || e.scheme || "").toLowerCase()], r && r.serialize && r.serialize(e, t), o && "undefined" != typeof a && e.host && (t.domainHost || r && r.domainHost)) try {
            e.host = t.iri ? a.toUnicode(e.host) : a.toASCII(e.host.replace(u.PCT_ENCODED, s).toLowerCase());
          } catch (p) {
            e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + p;
          }return f(e, u), "suffix" !== t.reference && e.scheme && (c.push(e.scheme), c.push(":")), n = h(e, t), void 0 !== n && ("suffix" !== t.reference && c.push("//"), c.push(n), e.path && "/" !== e.path.charAt(0) && c.push("/")), void 0 !== e.path && (i = e.path, t.absolutePath || r && r.absolutePath || (i = l(i)), void 0 === n && (i = i.replace(/^\/\//, "/%2F")), c.push(i)), void 0 !== e.query && (c.push("?"), c.push(e.query)), void 0 !== e.fragment && (c.push("#"), c.push(e.fragment)), c.join("");
        }function y(e, t, r, n) {
          void 0 === r && (r = {});var o = {};return n || (e = p(d(e, r), r), t = p(d(t, r), r)), r = r || {}, !r.tolerant && t.scheme ? (o.scheme = t.scheme, o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = l(t.path), o.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = l(t.path), o.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? o.path = l(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? o.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : o.path = t.path : o.path = "/" + t.path, o.path = l(o.path)), o.query = t.query) : (o.path = e.path, void 0 !== t.query ? o.query = t.query : o.query = e.query), o.userinfo = e.userinfo, o.host = e.host, o.port = e.port), o.scheme = e.scheme), o.fragment = t.fragment, o;
        }function v(e, t, r) {
          return d(y(p(e, r), p(t, r), r, !0), r);
        }function m(e, t) {
          return "string" == typeof e ? e = d(p(e, t), t) : "object" === u(e) && (e = p(d(e, t), t)), e;
        }function g(e, t, r) {
          return "string" == typeof e ? e = d(p(e, r), r) : "object" === u(e) && (e = d(e, r)), "string" == typeof t ? t = d(p(t, r), r) : "object" === u(t) && (t = d(t, r)), e === t;
        }function b(e, t) {
          return e && e.toString().replace(o && t && t.iri ? x.ESCAPE : w.ESCAPE, n);
        }function E(e, t) {
          return e && e.toString().replace(o && t && t.iri ? x.PCT_ENCODED : w.PCT_ENCODED, s);
        }var w = r(!1),
            x = o ? r(!0) : void 0,
            C = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i,
            O = /^\.\.?\//,
            P = /^\/\.(\/|$)/,
            T = /^\/\.\.(\/|$)/,
            _ = /^\/?(?:.|\n)*?(?=\/|$)/,
            A = void 0 === "".match(/(){0}/)[1],
            j = {};return { IRI_SUPPORT: o, VALIDATE_SUPPORT: i, pctEncChar: n, pctDecChars: s, SCHEMES: j, parse: p, _recomposeAuthority: h, removeDotSegments: l, serialize: d, resolveComponents: y, resolve: v, normalize: m, equal: g, escapeComponent: b, unescapeComponent: E };
      }();if (!n && "undefined" != typeof t && "function" == typeof e) {
        var a = e("./punycode");t.exports = s, e("./schemes");
      }
    }, { "./punycode": 18, "./schemes": 19 }] }, {}, [1])(1);
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sf_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_defaults__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canonical_title_map__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





// export function merge(schema, form, schemaDefaultTypes, ignore, options, readonly, asyncTemplates) {
function merge(lookup, form, ignore, options, readonly, asyncTemplates) {
  var formItems = [];
  var formItemRest = [];
  form = form || [];
  var idx = form.indexOf('*');
  options = options || {};
  var stdForm = {};

  var idxRest = form.indexOf('...');
  if ((typeof lookup === 'undefined' ? 'undefined' : _typeof(lookup)) === 'object' && lookup.hasOwnProperty('properties')) {
    readonly = readonly || lookup.readonly || lookup.readOnly;
    stdForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__schema_defaults__["defaultForm"])(lookup, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__schema_defaults__["createDefaults"])(), ignore, options);

    var defaultFormLookup = stdForm.lookup;

    lookup = defaultFormLookup || lookup;
    formItems = formItems.concat(stdForm.form);
  };

  if (idx !== -1) {
    form = form.slice(0, idx).concat(formItems).concat(form.slice(idx + 1));
  }

  //simple case, we have a "...", just put the formItemRest there
  if (stdForm.form && idxRest !== -1) {
    (function () {
      var formKeys = form.map(function (obj) {
        if (typeof obj === 'string') {
          return obj;
        } else if (obj.key) {
          return obj.key;
        };
      }).filter(function (element) {
        return element !== undefined;
      });

      formItemRest = formItemRest.concat(stdForm.form.map(function (obj) {
        var isInside = formKeys.indexOf(obj.key[0]) !== -1;
        if (!isInside) {
          return obj;
        };
      }).filter(function (element) {
        return element !== undefined;
      }));
    })();
  };

  if (idxRest !== -1) {
    form = form.slice(0, idxRest).concat(formItemRest).concat(form.slice(idxRest + 1));
  };

  // ok let's merge!
  // We look at the supplied form and extend it with schema standards
  return form.map(function (obj) {
    // handle the shortcut with just a name
    if (typeof obj === 'string') {
      obj = { key: obj };
    }

    if (obj.key) {
      if (typeof obj.key === 'string') {
        obj.key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["parse"])(obj.key);
      }
    }

    // If it has a titleMap make sure it's a list
    if (obj.titleMap) {
      obj.titleMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__canonical_title_map__["a" /* default */])(obj.titleMap);
    }

    // extend with std form from schema.
    if (obj.key) {
      var strid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sf_path__["stringify"])(obj.key);
      if (lookup[strid]) {
        (function () {
          var schemaDefaults = lookup[strid];
          if (schemaDefaults) {
            Object.keys(schemaDefaults).forEach(function (attr) {
              if (obj[attr] === undefined) {
                obj[attr] = schemaDefaults[attr];
              }
            });
          }
        })();
      }
    }

    // Are we inheriting readonly?
    if (readonly === true) {
      // Inheriting false is not cool.
      obj.readonly = true;
    }

    // if it's a type with items, merge 'em!
    if (obj.items) {
      obj.items = merge(lookup, obj.items, ignore, options, obj.readonly, asyncTemplates);
    }

    // if its has tabs, merge them also!
    if (obj.tabs) {
      obj.tabs.forEach(function (tab) {
        if (tab.items) {
          tab.items = merge(lookup, tab.items, ignore, options, obj.readonly, asyncTemplates);
        }
      });
    }

    // Special case: checkbox
    // Since have to ternary state we need a default
    if (obj.type === 'checkbox' && obj.schema['default'] === undefined) {
      obj.schema['default'] = false;
    };

    // Special case: template type with tempplateUrl that's needs to be loaded before rendering
    // TODO: this is not a clean solution. Maybe something cleaner can be made when $ref support
    // is introduced since we need to go async then anyway
    if (asyncTemplates && obj.type === 'template' && !obj.template && obj.templateUrl) {
      asyncTemplates.push(obj);
    }

    return obj;
  });
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_json_refs_standalone_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_json_refs_standalone_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_json_refs_standalone_min__);
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonref;


function jsonref(schema, callBack) {
  var promise = new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_0__lib_json_refs_standalone_min__["resolveRefs"](schema, {
      "filter": ['relative', 'local']
    }).then(function (res) {
      resolve(res.resolved);
    }).catch(function (err) {
      reject(new Error(err));
    });
  });

  if (typeof callBack === 'function') {
    promise.then(function (resolved) {
      callBack(null, resolved);
    }).catch(function (error) {
      callBack(error);
    });
  } else {
    return promise;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sf_path__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = select;


var numRe = /^\d+$/;

/**
  * @description
  * Utility method to access deep properties without
  * throwing errors when things are not defined.
  * Can also set a value in a deep structure, creating objects when missing
  * ex.
  * var foo = Select('address.contact.name',obj)
  * Select('address.contact.name',obj,'Leeroy')
  *
  * @param {string} projection A dot path to the property you want to get/set
  * @param {object} obj   (optional) The object to project on, defaults to 'this'
  * @param {Any}    valueToSet (opional)  The value to set, if parts of the path of
  *                 the projection is missing empty objects will be created.
  * @returns {Any|undefined} returns the value at the end of the projection path
  *                          or undefined if there is none.
  */
function select(projection, obj, valueToSet) {
  if (!obj) {
    obj = this;
  };

  // Support [] array syntax
  var parts = typeof projection === 'string' ? __WEBPACK_IMPORTED_MODULE_0__sf_path__["parse"](projection) : projection;

  if (typeof valueToSet !== 'undefined' && parts.length === 1) {
    // special case, just setting one variable
    obj[parts[0]] = valueToSet;

    return obj;
  };

  if (typeof valueToSet !== 'undefined' && typeof obj[parts[0]] === 'undefined') {
    // We need to look ahead to check if array is appropriate
    obj[parts[0]] = parts.length > 2 && numRe.test(parts[1]) ? [] : {};
  };

  var value = obj[parts[0]];

  for (var i = 1; i < parts.length; i++) {
    // Special case: We allow JSON Form syntax for arrays using empty brackets
    // These will of course not work here so we exit if they are found.
    if (parts[i] === '') {
      return undefined;
    };

    if (typeof valueToSet !== 'undefined') {
      if (i === parts.length - 1) {
        // last step. Let's set the value
        value[parts[i]] = valueToSet;
        return valueToSet;
      } else {
        // Make sure to create new objects on the way if they are not there.
        // We need to look ahead to check if array is appropriate
        var tmp = value[parts[i]];

        if (typeof tmp === 'undefined' || tmp === null) {
          tmp = numRe.test(parts[i + 1]) ? [] : {};
          value[parts[i]] = tmp;
        };

        value = tmp;
      };
    } else if (value) {
      // Just get nex value.
      value = value[parts[i]];
    };
  };

  return value;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = traverseSchema;
/* harmony export (immutable) */ __webpack_exports__["b"] = traverseForm;
/**
 * Traverse a schema, applying a function(schema,path) on every sub schema
 * i.e. every property of an object.
 */
function traverseSchema(schema, fn, path, ignoreArrays) {
  ignoreArrays = ignoreArrays === undefined ? true : ignoreArrays;

  path = path || [];

  var traverse = function traverse(schemaObject, processorFunction, pathArray) {
    processorFunction(schemaObject, pathArray);
    if (schemaObject.properties) {
      Object.keys(schemaObject.properties).forEach(function (name) {
        var currentPath = pathArray.slice();
        currentPath.push(name);
        traverse(schemaObject.properties[name], processorFunction, currentPath);
      });
    }

    // Only support type "array" which have a schemaObject as "items".
    if (!ignoreArrays && schemaObject.items) {
      var arrPath = pathArray.slice();arrPath.push('');
      traverse(schemaObject.items, processorFunction, arrPath);
    }
  };

  traverse(schema, fn, path || []);
}

function traverseForm(form, fn) {
  fn(form);
  if (form.items) {
    form.items.forEach(function (f) {
      traverseForm(f, fn);
    });
  }

  if (form.tabs) {
    form.tabs.forEach(function (tab) {
      if (tab.items) {
        tab.items.forEach(function (f) {
          traverseForm(f, fn);
        });
      }
    });
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tv4__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tv4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tv4__);
/* harmony export (immutable) */ __webpack_exports__["a"] = validate;
/*  Common code for validating a value against its form and schema definition */


/**
 * Validate a value against its form definition and schema.
 * The value should either be of proper type or a string, some type
 * coercion is applied.
 *
 * @param {Object} form A merged form definition, i.e. one with a schema.
 * @param {Any} value the value to validate.
 * @return {Object} a tv4js result object.
 */
function validate(form, value) {
  if (!form) {
    return { valid: true };
  };

  var schema = form.schema;
  if (!schema) {
    return { valid: true };
  };

  // Input of type text and textareas will give us a viewValue of ''
  // when empty, this is a valid value in a schema and does not count as something
  // that breaks validation of 'required'. But for our own sanity an empty field should
  // not validate if it's required.
  if (value === '') {
    value = undefined;
  };

  // Numbers fields will give a null value, which also means empty field
  if (form.type === 'number' && value === null) {
    value = undefined;
  };

  // Version 4 of JSON Schema has the required property not on the
  // property itself but on the wrapping object. Since we like to test
  // only this property we wrap it in a fake object.
  var wrap = { type: 'object', 'properties': {}, required: undefined };
  var propName = form.key[form.key.length - 1];
  wrap.properties[propName] = schema;

  if (form.required) {
    wrap.required = [propName];
  };

  var valueWrap = {};
  if (!!value) {
    valueWrap[propName] = value;
  };

  return __WEBPACK_IMPORTED_MODULE_0_tv4___default.a.validateResult(valueWrap, wrap);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

;!function(undefined) {

	var ObjectPath = {
		parse: function(str){
			if(typeof str !== 'string'){
				throw new TypeError('ObjectPath.parse must be passed a string');
			}

			var i = 0;
			var parts = [];
			var d, b, q, c;
			while (i < str.length){
				d = str.indexOf('.', i);
				b = str.indexOf('[', i);

				// we've reached the end
				if (d === -1 && b === -1){
					parts.push(str.slice(i, str.length));
					i = str.length;
				}

				// dots
				else if (b === -1 || (d !== -1 && d < b)) {
					parts.push(str.slice(i, d));
					i = d + 1;
				}

				// brackets
				else {
					if (b > i){
						parts.push(str.slice(i, b));
						i = b;
					}
					q = str.slice(b+1, b+2);
					if (q !== '"' && q !=='\'') {
						c = str.indexOf(']', b);
						if (c === -1) c = str.length;
						parts.push(str.slice(i + 1, c));
						i = (str.slice(c + 1, c + 2) === '.') ? c + 2 : c + 1;
					} else {
						c = str.indexOf(q+']', b);
						if (c === -1) c = str.length;
						while (str.slice(c - 1, c) === '\\' && b < str.length){
							b++;
							c = str.indexOf(q+']', b);
						}
						parts.push(str.slice(i + 2, c).replace(new RegExp('\\'+q,'g'), q));
						i = (str.slice(c + 2, c + 3) === '.') ? c + 3 : c + 2;
					}
				}
			}
			return parts;
		},

		// root === true : auto calculate root; must be dot-notation friendly
		// root String : the string to use as root
		stringify: function(arr, quote){

			if(!Array.isArray(arr))
				arr = [arr.toString()];

			quote = quote === '"' ? '"' : '\'';

			return arr.map(function(n){ return '[' + quote + (n.toString()).replace(new RegExp(quote, 'g'), '\\' + quote) + quote + ']'; }).join('');
		},

		normalize: function(data, quote){
			return ObjectPath.stringify(Array.isArray(data) ? data : ObjectPath.parse(data), quote);
		},

		// Angular
		registerModule: function(angular) {
			angular.module('ObjectPath', []).provider('ObjectPath', function(){
				this.parse = ObjectPath.parse;
				this.stringify = ObjectPath.stringify;
				this.normalize = ObjectPath.normalize;
				this.$get = function(){
					return ObjectPath;
				};
			});
		}
	};

	// AMD
	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return {ObjectPath: ObjectPath};
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// CommonJS
	else if (typeof exports === 'object') {
		exports.ObjectPath = ObjectPath;
	}

	// Browser global
	else {
		window.ObjectPath = ObjectPath;
	}
	
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = tv4;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=json-schema-form-core.js.map