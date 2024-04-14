// let myHeading = document.querySelector("h1");
// myHeading.textContent = "V.W.P.";

let iceCream = "Ice-cream";
if (iceCream === "Ice-cream")
{
  alert("<I Screaming at live>infection!");
}
// document.querySelector("html").addEventListener("click", function () {
//     alert("You can't offend her beauty!!!");
//   });

let myimg=document.querySelector("img");

myimg.onclick=function()
{
    alert("You can't offend her beauty!!!");
    let mySrc = myimg.getAttribute("src");
    if(mySrc==="images/kaf.png")
    {
        myimg.setAttribute("src","images/kaf2.jpg");
    }
    else
    {
        myimg.setAttribute("src","images/kaf.png");
    }
}

let myButton=document.querySelector("button");
function setUserName()
{
    let myName=prompt("input your name");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name",myName);
        alert("Welcome,"+myName);
    }
}
if(!localStorage.getItem("name"))
{
    setUserName();
    let storeName=localStorage.getItem("name");
    alert("Welcome,"+myName);
}
myButton.onclick=function()
{
    setUserName();
};