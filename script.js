const gridContainer = document.getElementById('gridContainer');
const cell = document.getElementById('cell');
const eraser = document.getElementById('eraser');
const pixel = document.getElementsByClassName('row');
const ink = document.getElementById('ink');
const slider = document.getElementById("myRange");
const output = document.getElementById("size");
const rainbow = document.getElementById("rainbow");
const pencil = document.getElementById("pencil");

let mouseDown = false;
let eraseButton = false;
let rgbButton = false;
let pencilButton = false;
let sliderValue = slider.value;



// slider value
output.innerHTML = slider.value + ' x ' + slider.value;
slider.addEventListener('input', function(){
  output.innerHTML = this.value + ' x ' + this.value;
  sliderValue = slider.value;
});


//create new grid based on slider input
slider.oninput = function(){
  document.querySelectorAll('.row').forEach(e => e.remove());
  createGrid(slider.value);
 	gridContainer.style.display = 'grid'; 
  gridContainer.style.gridTemplateColumns = 'repeat(' + `${sliderValue}` + ', [col-start] minmax(0, 25px))';
  // gridContainer.style.columnGap = '0px';
  // gridContainer.style.gridTemplateColumns = 'minmax(0, 1fr)';
  gridContainer.style.maxWidth = '500px';
  gridContainer.style.maxHeight = '500px';
}

function createRow(val){
  for (i = 0; i < val; i++){
    let cellRow = document.createElement('div');
    cellRow.className = 'row';
    cellRow.id = 'cell';
    gridContainer.appendChild(cellRow);

    cellRow.addEventListener('mousedown', function(e){
      mouseDown = true;
      paintPixel(e);
    });

    cellRow.addEventListener('mouseup', function(){
      mouseDown = false;
    });

    cellRow.addEventListener('mouseover', paintPixel);

    eraseAll.addEventListener('click', function(){
      eraseButton = false;
      for (let i = 0; i < pixel.length; i++){
        pixel[i].style.backgroundColor = 'white';
       	pixel[i].style.border = '1px solid rgba(157, 174, 180, 0.2';
      }
     });
		
  }

}

function createGrid(val){
  for (j= 0; j < val; j++){
    createRow(val);
  }
}

createGrid(20);
gridContainer.style.gridTemplateColumns='repeat(' + `${sliderValue}` + ', [col-start] 25px)';


function paintPixel(e){  
  if (mouseDown === true){
    e.target.style.backgroundColor = ('black');
    e.target.style.margin = '0px';
    e.target.style.border = '0px';
    e.target.style.backgroundClip = 'content-box';
  } 
  if (eraseButton === true && mouseDown === true){
    e.target.style.backgroundColor = ('white');
    e.target.style.backgroundClip = 'content-box';
    e.target.style.border = '1px solid rgba(157, 174, 180, 0.2';

  }
  if (rgbButton === true && mouseDown === true){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = randomColor;
    e.target.style.margin = '0px';
    e.target.style.borderWidth = '0px';
    e.target.style.backgroundClip = 'content-box';
  }
  if (pencilButton === true && mouseDown === true){
  	e.target.style.backgroundColor = ('rgba(52,52,52, 0.15)');
		e.target.style.margin = '0px';
    e.target.style.border = '0px';
    e.target.style.backgroundClip = 'content-box';

  }
}

eraser.addEventListener('click', function(){
   eraseButton = true;
   mouseDown = false;
   rgbButton = false;
   pencilButton = false;
   paintPixel();
});

ink.addEventListener('click', function(){
  eraseButton = false;
  rgbButton = false;
  pencilButton = false;
  paintPixel();
});

rainbow.addEventListener('click', function(){
  rgbButton = true;
  pencilButton = false;
  eraseButton = false;
  paintPixel();
});
pencil.addEventListener('click', function(){
  pencilButton = true;
  rgbButton = false;
  eraseButton = false;
  paintPixel();
});

