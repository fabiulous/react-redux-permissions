"use strict";Object.defineProperty(exports,"__esModule",{value:true});var checkVisibility=exports.checkVisibility=function checkVisibility(roles,allowed,except){if(except.length>0&&except.every(function(elem){return roles.indexOf(elem)>-1})){return false}if(allowed.length>0){if(allowed.every(function(elem){return roles.indexOf(elem)>-1})){return true}return false}return true};exports.default={checkVisibility:checkVisibility};