// what is string- the string is use to store and manipulate variable or text
console.log("this is a normal string");
let a = "vaibhav";
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
// console.log(a[7]);
console.log("this is a  new string ")
let user_name = "vaibhav";
let friend = "shubham";
console.log("my name is " + user_name + " and " + friend + " is my best friend");//--->this is a complex way to declare a statement
//instad of it we can use TEMPLATE LITERALS
console.log(`my name is ${user_name} and ${friend} is my best friend`);

//----------------------how to convert a word to upper-cast and  Lower-case--------------------//

let c = "Vaibhav";
console.log(c.toString());//--->string will be printed
console.log(c.toLowerCase());//--->all will be in lower case
console.log(c.toUpperCase());//--->all will be in Upper/capital case

//----------------------slice a string--------------------//

let b="vaibhav";
console.log(b.slice(2,5));
console.log(b.slice(4));

//----------------------replacing character from a string--------------------//

console.log(b.replace("av","au"));
//NOTE-if there will be 2 occurance of sanme character the first occurance will change not second

//----------------------concatenate from a string--------------------//
console.log(b.concat( a ," bro"))

//----------------------Trim from a string--------------------//
console.log(b.trim)//-->use to remove whitespaces

//----------------------charAt from a string--------------------//
let m="shubham"
console.log(b);
console.log(b.charAt(1))

//----------------------startwith and endwith from a string--------------------//
let n="vaibhav";
console.log(b.startsWith("vai"));
console.log(b.startsWith("bha"));

let e="vaibhav";
console.log(b.endsWith("vai"));
console.log(b.endsWith("hav"));
