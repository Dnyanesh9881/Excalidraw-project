
 let pencil=document.getElementById("pencil");

 let isPencilActive=false;

 pencil.addEventListener("click", onPencilClick);
 let colorPicker=document.getElementById("color-picker");
 colorPicker.addEventListener("change", ()=>{
          drawingColor=colorPicker.value;

 })

 function onPencilClick(){
     pencil.classList.toggle("active");
     isPencilActive=!isPencilActive;
     canva.style.cursor="crosshair"
     if(isPencilActive){
        canva.style.cursor="crosshair";
     canva.addEventListener("mousedown", onMouseDown);
     }else{
        canva.style.cursor="auto";
     canva.removeEventListener("mousedown", onMouseDown);
     }
     }

