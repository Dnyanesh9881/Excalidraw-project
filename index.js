
const canva=document.getElementById("canvas");
canva.width=window.innerWidth;
canva.height=window.innerHeight;
const parameters=document.querySelector(".strock-color-width");
const menuButtons=document.querySelectorAll(".btn");

const ct=canva.getContext("2d");

// let drawingHistory=[];
// let pathTrack=0;

let strockParameters={
    strockwidth:2,
    strockcolor:"black", 
}

function onClickInput(element){
       let valuep=element.value;
       if(element.name==="strockcolor"){
        strockParameters[element.name]=valuep;
       }
       else{
        strockParameters[element.name]=parseInt(valuep);
       }

}
let actions={
    pencil:false,
    line:false,
    rectangle:false,
    circle:false,
    eraser:false
}
function onActionClick(element){
  const currentActive=element.id;
  menuButtons.forEach(btn =>{
    if(btn.classList.contains("active") && btn.id!==currentActive){
        toggleWidthColor()
        btn.classList.remove("active")
    }
     
  })
    element.classList.toggle("active");
    toggleWidthColor()
    menuButtons.forEach(btn =>{
        const isActive=btn.classList.contains("active");
        actions[btn.id]=isActive;
    })
}

function toggleWidthColor(){
    parameters.classList.toggle("hide");

}