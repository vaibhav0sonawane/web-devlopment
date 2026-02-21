// what are function and how it work
// it is a block of code design to perform a perticular task
function username(name, clg) {
    console.log("this is user name of " + name);
    console.log(name + " he is studing in " + clg);
    console.log(name + " he is working on project");
    console.log(name + " he is a good coder");
}
username("vaibhav", "jspm")

// ---------------------Sum function----------------//
function Sum(a, b, c = 3) {//here we have declare value of c as consatant
    console.log(a + b);
    console.log(a * b * 3);//here we have declare value of 3
    console.log(a / b);
    console.log(a - b-c);
    console.log(a, b, c)
    return a + b + c;
}
Sum(6,2);
result = Sum(6, 2);
console.log("the result is:", result)