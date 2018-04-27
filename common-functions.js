'use strict';
const definition = x => typeof x !== 'undefined';

exports.head = ([x]) => x;;
exports.tail = ([x,...xs]) => xs;
exports.def = definition;
exports.undef = x => !definition(x);
exports.copy = array => [...array];
//exports.map = ([x, ...xs], fn) => !x ? [] : [fn(x), ...map(xs, fn)];
//module.exports= function () {return 2;}