const undo=document.getElementById("undo");
const redo=document.getElementById("redo");


let redoIndex=0;

function onClickUndo(){
    if(historyIndex!==-1){
    //     redoArray.push(history[historyIndex]);
    //    redoIndex++;
        history.pop();
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
//    if(redoArray.length>=0){
   
//     ct.putImageData(redoArray[redoIndex-1], 0, 0);
//     redoIndex--;
//    }
    
}
undo.addEventListener("click", onClickUndo);
redo.addEventListener("click", onClickRedo);
