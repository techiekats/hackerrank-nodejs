'use strict';

const f = require('./common-functions')

const printTriangle = t => t.forEach(element => {
    let s = '';
    element.forEach(e=> s = `${s} ${e}`);
    s = s.trim();
    console.log(s);
});

const pascalTriangle = (row, max, triangle) => {    
    if (row === 0) {
        return pascalTriangle (row+1, max, [[1]]);
    }
    if (row === 1) {
        return pascalTriangle (row+1, max, triangle.concat([[1,1]]));
    }
    if (row === max) {
        return triangle;
    }
    let r = triangle[row-1];
    let prevElement = 1;
    let newRow = [];
    r.forEach(e=> {
        if (e===1) {
            newRow.concat(1);
        }
        else {
            newRow.concat(prevElement + e);
        }
        prevElement = e;
    });
    newRow.concat(1);
    return pascalTriangle(row+1, max, triangle.concat(newRow));
};

exports.pascalTriangle = pascalTriangle;
exports.printTriangle = printTriangle;