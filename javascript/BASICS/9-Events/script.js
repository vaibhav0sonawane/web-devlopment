// let btn1=document.querySelector("#btn1");

// btn1.onclick= () => {
//     console.log("btn1 was clicked"); 
// }

// let howwer=document.querySelector("#howwer");
// howwer.onmouseover =() => {
//     console.log("howwer")
// }

//EVENT OBJECT

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }

//Event listeners:we can do same event otr trigger same event for
//  multiple type of events
//syntax: node.addEventlisterner(click,callback):to add eventlistener
//syntax: node.removeEventlisterner(click,callback):to remove eventlistener

// //add
// btn1.addEventListener("click",()=>{
//     console.log("Event work on click 1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("Event work on click 2");
// })

// //to rempove first create a function
// const handler3=()=> {
//     console.log("Event work on click 3")
// }

// //remove
// btn1.removeEventListener("click",handler3);

//Toggeling from light-mode to dark-mode
let modebtn1 = document.querySelector("#btn1")
let Currmode = "light";
let body=document.querySelector("body");

modebtn1.addEventListener("click", () => {
    if (Currmode === "light") {
        Currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        Currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(Currmode);
});