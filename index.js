
const canva=document.getElementById("canvas");
canva.width=window.innerWidth;
canva.height=window.innerHeight;

const ct=canva.getContext("2d");

// canva.addEventListener("mousedown", onMouseDown);
// canva.addEventListener("mouseup", onMouseUp);

// function onMouseDown(event){
//     let {clientX, clientY} =event;
//     ct.beginPath();
//     ct.moveTo(clientX, clientY);
//     ct.strokeStyle="red"
//     ct.lineWidth=4;
// }
// function onMouseUp(event){
//     let {clientX, clientY} =event;
    
//     ct.lineTo(clientX, clientY);
//     ct.stroke();
//     ct.closePath();
// }
    let drawingColor="black";
// canva.addEventListener("mousedown", onMouseDown);
   let previousPosition=null;
function onMouseDown(e){
   previousPosition=[e.clientX, e.clientY];
   
   canva.addEventListener("mousemove", onMouseMove);
   canva.addEventListener("mouseup", onMouseUp);
}
function onMouseMove(e){
    let currentPosition=[e.clientX, e.clientY];
    ct.strokeStyle=drawingColor;
    ct.beginPath();
    ct.moveTo(...previousPosition);
    ct.lineTo(...currentPosition);
    ct.stroke();
    ct.closePath();
    previousPosition=currentPosition;
}
function onMouseUp(e){

    canva.removeEventListener("mousemove", onMouseMove);
}