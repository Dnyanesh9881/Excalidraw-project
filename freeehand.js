//   for free hand drawing
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

//  for Straigth line
     let line=document.getElementById("line");
     let isLineActive=false;

     line.addEventListener("click", onLineClick);
 
 colorPicker.addEventListener("change", ()=>{
          drawingColor=colorPicker.value;
          ct.strokeStyle=drawingColor;

 })
   function onLineClick(){
      line.classList.toggle("active");
      isLineActive=!isLineActive;
      if(isLineActive){
       
         canva.addEventListener("mousedown", onMouseDown1);
         canva.addEventListener("mouseup", onMouseUp1);
         
      }else{
         canva.removeEventListener("mousedown", onMouseDown1);
         canva.removeEventListener("mouseup", onMouseUp1);
      }
     
   }  