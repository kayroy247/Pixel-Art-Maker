// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

(function(document){

  let colorPicker, pixelCanvas, inputHeight, inputWidth, sizePicker, canvasRows, canvasColumns;

 inputWidth = document.getElementById('inputWidth');
  inputHeight = document.getElementById('inputHeight');
  colorPicker = document.getElementById('colorPicker');
  pixelCanvas = document.getElementById('pixelCanvas');
  sizePicker = document.getElementById('sizePicker');
  
  
  
  function makeGrid() {
      // Prevents page from refreshing.
      event.preventDefault();
      
       
       canvasRows = parseInt(inputHeight.value);
       canvasColumns = parseInt(inputWidth.value);
        
       if (canvasRows > 60 || canvasColumns > 60 || canvasRows < 1 || canvasColumns < 1) {
         alert('Input must be between 1 and 60');
         return;

       } else {

       //clearCanvas();
       pixelCanvas.innerHTML = '';

      for (let i = 0; i < canvasRows; i++) {
          let tr = pixelCanvas.insertRow(i);

          
          for (let j = 0; j < canvasColumns; j++) {
              
              tr.insertCell(j);
          }
      }
    }
  }
  //Event Listeners
  sizePicker.addEventListener('submit', makeGrid, false);
  pixelCanvas.addEventListener('click', setGridColor);


  // Sets Picked Color
  function setGridColor(event) {
      let pickColor = colorPicker.value;

      event.target.setAttribute('style', 'background-color: ' + pickColor);
  }

}(document));