'use strict';
//borrowed from : https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3
const head = ([x]) => x;
const tail = ([x,...xs]) => xs;
const definition = x => typeof x !== 'undefined';
const mapper = ([x, ...xs], fn) => !x ? [] : [fn(x), ...mapper(xs, fn)];
const reverseArray = ([x, ...xs]) => definition(x) ? [...reverseArray(xs), x] : [];
const firstN = ([x, ...xs], n) => definition(x) && n ? [x, ...firstN(xs, n-1)] : [];
const lastN = (xs, n) => reverseArray(firstN(reverseArray(xs), n));
const count = ([x, ...xs], i = 0) => definition(x) ? count(xs, i+1) : i;
const filter = ([x, ...xs], pred) => definition(x) ? (pred(x) ? [x, ...filter(xs, pred)] : filter(xs, pred)) : [];
const reject = ([x, ...xs], pred) =>definition(x) ? (pred(x)? reject(xs, pred) : [x, ...reject(xs, pred)]) :[];
const reduce = ([x, ...xs], acc, memo) => definition(x) ? reduce(xs, acc, acc(x, memo)) : memo;
const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs);
const pluck = (key, object) => object[key];
const any = ([x, ...xs], pred) => definition(x) ? pred(x) ? true : any(xs) : false;

exports.head = head;
exports.tail = tail;
exports.def = definition;
exports.undef = x => !definition(x);
exports.copy = array => [...array];
exports.map = mapper;
exports.first = firstN;
exports.last = lastN;
exports.reverse = reverseArray;
exports.length = count;
exports.filter = filter;
exports.reject = reject;
exports.reduce = reduce;
exports.partial = partial;
exports.pluck = pluck;
exports.any = any;
//TODO: flow and compose