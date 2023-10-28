let history=[];
let historyIndex=-1;

let redoArray=[];

let initialPosition=null;


function onMouseDown(e){

if(!(actions.circle || actions.eraser || actions.line || actions.pencil || actions.rectangle)){
   return;
}

initialPosition={x: e.clientX, y:e.clientY};
startIndex=history.length;
ct.beginPath();
ct.strokeStyle=strockParameters.strockcolor;
ct.lineWidth=strockParameters.strockwidth;

canva.addEventListener("mousemove", onMouseMove);
canva.addEventListener("mouseup", onMouseUp);
  
}

function onMouseMove(e){
   
   if(actions.pencil){
      drawFreehand({x:e.clientX,  y:e.clientY});
   }
   else if(actions.circle){
      drawCircle({x:e.clientX,  y:e.clientY})
   }else if(actions.line){
      drawLine({x:e.clientX,  y:e.clientY});
   }else if(actions.rectangle){
      drawRectangle({x:e.clientX,  y:e.clientY});
   }else if(actions.eraser){
      eraseThings({x:e.clientX,  y:e.clientY});
   }else{

   }

}
function onMouseUp(){
//    drawingHistory.push(ct.getImageData( 0, 0, canva.width, canva.height));
// pathTrack++;
 history.push(ct.getImageData( 0, 0, canva.width, canva.height));
historyIndex ++;

   
   canva.removeEventListener("mousemove", onMouseMove);
canva.removeEventListener("mouseup", onMouseUp);
}

canva.addEventListener("mousedown", onMouseDown)

function drawFreehand(currentPosition){
   ct.beginPath();
   ct.moveTo(initialPosition.x, initialPosition.y);
   ct.lineTo(currentPosition.x, currentPosition.y);
   ct.lineCap="round";
   ct.lineJoin="round";
   ct.stroke();
   ct.closePath();
   initialPosition=currentPosition;
}
function drawCircle(currentPosition){

     if(startIndex-1!== -1){
      ct.putImageData(history[startIndex-1], 0, 0);
     }
     else{
      ct.clearRect(0, 0, canva.width, canva.height);
     }
   //   if(startIndex-1!==history.length-1 ){
   //    history.pop();
   //   }

     ct.beginPath();
     const radius=Math.sqrt(
      (currentPosition.x - initialPosition.x)**2+
      (currentPosition.y-initialPosition.y)**2
     );
   
   ct.arc(initialPosition.x, initialPosition.y, radius, 0, 2*Math.PI,true);
   ct.stroke();
   
}
function drawLine(currentPosition){
   if(startIndex-1!== -1){
      ct.putImageData(history[startIndex-1], 0, 0);
     }
     else{
      ct.clearRect(0, 0, canva.width, canva.height);
     }
     ct.beginPath();
   //   ct.lineCap="round";
   //   ct.lineJoin="round";
   ct.moveTo(initialPosition.x, initialPosition.y);
   ct.lineTo(currentPosition.x, currentPosition.y);
     ct.stroke();
     ct.closePath();


}
function drawRectangle(currentPosition){

   if(startIndex-1!== -1){
      ct.putImageData(history[startIndex-1], 0, 0);
     }
     else{
      ct.clearRect(0, 0, canva.width, canva.height);
     }
     ct.beginPath();

     let width=currentPosition.x- initialPosition.x;
     let height=currentPosition.y-initialPosition.y;
     ct.strokeRect(initialPosition.x, initialPosition.y , width, height);

}
 
function eraseThings(currentPosition){
    ct.clearRect(currentPosition.x ,currentPosition.y, strockParameters.strockwidth,strockParameters.strockwidth);
}