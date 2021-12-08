'use strict';

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
    let prevElement = 0;
    let newRow = [];
    r.forEach(e=> {
        newRow = newRow.concat(prevElement + e);
        prevElement = e;
    });
    newRow = newRow.concat(1);
    return pascalTriangle(row+1, max, triangle.concat([newRow]));
};

var triangle = pascalTriangle(0, 2, [[]]);
printTriangle(triangle);