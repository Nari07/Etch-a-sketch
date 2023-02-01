const gridContainer = document.getElementById('gridContainer');
const cell = document.getElementById('cell');
const eraser = document.getElementById('eraser');
let pixel = document.getElementsByClassName('row');
const sketch = document.getElementById('sketch');

let mouseDown = false;
let eraseButton = false;

eraser.addEventListener('click', function(){
  eraseButton = true;
  mouseDown = false;
});

sketch.addEventListener('click', function(){
  eraseButton = false;
  paintPixel();
});


function createRow(){
  for (i = 1; i < 17; i++){
    let cellRow = document.createElement('div');
    cellRow.className = 'row';
    // cellRow.innerText = `${i}`;
    cellRow.id = 'cell';
    gridContainer.appendChild(cellRow);

    cellRow.addEventListener('mousedown', function(e){
      mouseDown = true;
      if (eraseButton === true) {
        e.target.style.backgroundColor = 'white';
      } else {
        e.target.style.backgroundColor = 'black';
      }
    });

    cellRow.addEventListener('mouseup', function(){
      mouseDown = false;
    });

    cellRow.addEventListener('mouseover', paintPixel);

    eraseAll.addEventListener('click', function(){
      eraseButton = false;
      for (let i = 0; i < pixel.length; i++){
        pixel[i].style.backgroundColor = 'white';
      }
     });

  }

}

function createGrid(){
  for (j= 1; j < 17; j++){
    createRow();
  }
}


createGrid();

function paintPixel(e){
  if (mouseDown === true){
    e.target.style.backgroundColor = ('black');
  }
  
  if (eraseButton === true && mouseDown === true) {
    e.target.style.backgroundColor = ('white');
  }
}



