//accessing element by multiple ways 

//Document Method
//1.by ID
form=document.getElementById("info");
console.dir(form);
console.log(form);

//2.By Class
heading=document.getElementsByClassName("heading");
console.dir(heading);
console.log(heading);

//3.By Tag
button=document.getElementsByTagName("button");
console.dir(button);
console.log(button);

//Query selector
//document.querySelector("#myId/.myClass/tag")
//return first element
button1=document.querySelector("button");
console.dir(button1);
console.log(button1);

//document.querySelectorAll("#myId/.myClass/tag")
//return a NodeList