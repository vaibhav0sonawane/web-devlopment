// WAP to print the marks of a student 
// in an object using for of loop 
let obj={
    vaibhav:98,
    abhay:88,
    shubhu:92,
}
for(const key in obj){
    const element=obj[key];
    console.log(key,element);
}