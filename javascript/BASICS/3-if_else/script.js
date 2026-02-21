console.log("hello World");
console.log("check if i am elegible for driving or not");
// --------------------IF ELse ladder-----------------------//
age = 12;
console.log("result:")
if (age >= 18) {
    console.log("Enligible for driving car");

}
else if (age == 0) {
    console.log("Invalid statement");
}
else {
    console.log("not eligible for driving car")
}

// -------------------ternary statement-----------------------//
// ?=if;
// :=or
let a = 20;
let b = 16;
let c = a > b ? (a - b) : (b - a);
console.log(c);

// -------------------ternary statement-----------------------//
/* Operators in JavaScript
1.Arithmetic operators
+ = addition
- = subtraction
* = multiplication
/ = division 
% =modules(remainder)
++ = increament
-- =decrement

2.Assignment operators
= (x=y)
+= (x=x+y)
*= (x=x*y)
%= (x=x%y)
/= (x=x/y)
**= (x=x**y) -- y is power of x

3.comparison operators
== equal to
!= not equal to
=== equal value and type
!== not equal value or equal to
> grater then
< less then
>= greater then equal to
<= less then equal to
? ternary operator

4.logical operators
&& logical and --both true
|| logical or --one of stament should be true
! logical not -- convert true to false
*/