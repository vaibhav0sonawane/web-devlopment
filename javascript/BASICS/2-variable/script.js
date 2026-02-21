console.log("enter a number");
let a = 2;
var b = 3;
var c = "vaibhav";
console.log(a + b);
console.log(typeof a, typeof b, typeof c);

// Let= using let variables can't be redeclared but can be reassigned 
// var= using var variables can be redeclared and reassigned   
//const: using const variables can't be redeclared and can't be reassigned
// eg first let a= 5  
{
    let a = 66
    console.log(a);//value of a here will be 66
}
console.log(a);//value of a here will be 2

console.log(b);
{
    var b = 54;
    console.log(b);
}
// { }-this denotes blocks the let value in box is only within the box and will not be applied outside the block

// where as if we see var it is a global variable and will change according to applied condition


// ---------------------------Primative Datatype-------------------------------------
// 7 SVGUnitTypes
// 1. null 2.Number 3.string 4.symbol
//  5.undefined 6.boolean 7.biglnt
//  this are all 7 types of primitive datatypes
let x = "vaibhav"
let k = 12;
let m = true;
let q = undefined;
let n = null;
console.log(x, k, m, q, n);
console.log(typeof x, typeof k, typeof m, typeof q, typeof n);

// NOTE:
// why type of null is Object:In JavaScript, null is a primitive value that represents the intentional absence of any object value. However, the typeof operator returns "object" when applied to null. This behavior is a long-standing bug in JavaScript that 
// originated from the very first version of the language.

//---------------------Object-------------------------------------------
let o ={
    "name":"vaibhav",
    "job code":5600,
    "doing job":false
};//use to group values of same topics or objects
console.log(o);
o.projects="2";//add sub-values
