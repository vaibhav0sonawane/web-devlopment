//for-of- loop
    // console.log("advance loops");
    // let str="vaibhav";
    // let length=0;
    // for(let i of str){
    //     console.log(i);
    //     length++;
    // }
    // console.log("string size=",length);

//for-in-loop
let student={
  ID:"vaibhav",
  class:"SY",
  prn:356,
}
for(let key in student){
    console.log("key=",key,"value:",student[key]);
}