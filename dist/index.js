"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.HOC=undefined;var _actions=require("./actions");Object.keys(_actions).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _actions[key]}})});var _reducer=require("./reducer");Object.keys(_reducer).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _reducer[key]}})});var _hoc=require("./hoc");var _hoc2=_interopRequireDefault(_hoc);var _component=require("./component");var _component2=_interopRequireDefault(_component);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var HOC=exports.HOC=_hoc2.default;exports.default=_component2.default;