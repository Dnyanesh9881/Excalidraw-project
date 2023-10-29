const undo=document.getElementById("undo");
const redo=document.getElementById("redo");


let redoIndex=0;

function onClickUndo(){
    if(historyIndex!==-1){
    //     redoArray.push(history[historyIndex]);
    //    redoIndex++;
        // history.pop();
        historyIndex --;

    if(historyIndex===-1){
        ct.clearRect(0, 0, canva.width, canva.height);
    }
    else{
        ct.putImageData(history[historyIndex], 0, 0);
    }
   
}
}
function onClickRedo(){
   if( historyIndex<history.length-1){
    historyIndex++;
    if(historyIndex!==-1){
        // historyIndex++;
//    history.push(redoArray[redoIndex]);
//        historyIndex++;
    ct.putImageData(history[historyIndex], 0, 0);
    // redoIndex--;
    // redoArray.pop();
    // redoIndex--;
    }
    

   }
  
    
}
undo.addEventListener("click", onClickUndo);
redo.addEventListener("click", onClickRedo);
