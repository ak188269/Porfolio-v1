var role=["c.s student","developer","coder"]
let role_text=document.getElementById("role");
// role_text.innerHTML="developer";
// setInterval(myfun(),1000);



let i=0,j=0;
let interval2;
const myfun=()=>{
// console.log("setinterval");
// document.getElementById("welcome").style.display="none";
// document.getElementById("photo").display="none";
let curr_role=role[i];
    document.getElementById("role").innerHTML =curr_role;
            i++;
            if(i==role.length)
            i=0;
     
}
const print=()=>{
    let curr_role=role[i];
    // for( let j=0; j< element.length;j++) {
        document.getElementById("role").innerHTML += curr_role[j];
    // }
    j++;
    if(j===curr_role.length)
clearInterval(interval2)
}
let interval;
const changeit=()=>{

    setTimeout(change,4000);
}
const change=()=>{
    // document.getElementById("myphoto").src="";
    document.getElementById("photo").style.display="none";
    document.getElementById("welcome").innerHTML="Lets go through the journey of a";
 
    // document.getElementById("name").style.display="none";
    interval=setInterval(myfun, 1300);
}
changeit();
// side menu 
// let hamberger=document.getElementById("hamberger");
// hamberger.onclick=function(){show()};
// const show=()=>{
//     console.log("inside show");
//     document.getElementById("myNav").classList.toggle('show');
//     // document.getElementById("welcome").classList.toggle('fun');
// }
