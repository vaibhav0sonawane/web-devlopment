//add element to exesting html code
//node.append(el):adds at the end of the node(inside)
//node.prepend(el):adds at the start of the node(inside)
//node.befor(el):adds before the node(outside)
// Node.after(el):adds after the node (Outside)

// eg 
// adding variable to code 
let NewBtn=document.createElement("button");
NewBtn.innerText="click me";
NewBtn.style.color="white";
NewBtn.style.background="red";

//adding variable to the web-page
document.querySelector("body").prepend(NewBtn);

//access or change attribute value for an element
let newpara=document.querySelector("p");
para.getAttribute("class");
para.setAttributr("class","newClass"); 