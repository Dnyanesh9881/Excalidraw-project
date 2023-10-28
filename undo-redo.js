const undo=document.getElementById("undo");
const redo=document.getElementById("redo");



function onClickUndo(){
    if(historyIndex!==-1){
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

}
undo.addEventListener("click", onClickUndo);
redo.addEventListener("click", onClickRedo);
