// navbaar script 

let navbar=document.getElementById("nav");
let closeButton=document.getElementById("close");
let hamBarger=document.getElementById("hambarger");
let navigation=  document.getElementById("navigation")
const Hide=()=>{
navbar.style.display="none";
closeButton.style.display="none";
hamBarger.style.display="block";
navigation.style.flexDirection="row";

}
const Show=()=>{
navbar.style.display="flex";
closeButton.style.display="block";
hamBarger.style.display="none";
navigation.style.flexDirection="column";
}