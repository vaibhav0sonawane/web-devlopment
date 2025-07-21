console.log("Will now learn Loops");
let a =1;
// -----------------------for loop-----------------//
for(i=0;i<10;i++){
    console.log(a+i);
}

// -----------------------for in loop-----------------//
//use to print key  and elements of objects 
console.log("this is  for-in loop");
let obj={
    name:"vaibhav",//here name is key and vaibhav is element of the object
    roll:"CR",
    clg:"JSPM UNI",
}
for (const key in obj) {
    const element=obj[key];
    console.log(key, element);
}

for (const c in obj) {
        console.log(c)
}

// -----------------------for in loop-----------------//
//it is use to print array or itration
// here array contain name Vaibhav
console.log("this is  for-of loop");
for (const c of "vaibhav") {
    console.log(c)
}

// -----------------------While loop-----------------//
console.log("this is while loop");
i=0;
while(i<6){
    console.log(i);
    i++;
}

// -----------------------do-While loop-----------------//
//run at least one time 
console.log("this is do-while loop");
i=0;
do {
    console.log(i);
    i++;
} while (i<5);