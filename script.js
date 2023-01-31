const gridContainer = document.getElementById('gridContainer');
const cell = document.getElementById('cell');
const eraser = document.getElementById('eraser');

let mouseDown = false;
let eraseButton = false;

function createRow(){
  for (i = 1; i < 17; i++){
    let cellRow = document.createElement('div');
    cellRow.className = 'row';
    // cellRow.innerText = `${i}`;
    cellRow.id = 'cell';
    gridContainer.appendChild(cellRow);

    cellRow.addEventListener('mousedown', function(e){
      mouseDown = true;
      e.target.style.backgroundColor = ('black');
    });
    cellRow.addEventListener('mouseup', function(){
      mouseDown = false;
    });
    cellRow.addEventListener('mouseover', paintPixel);
    
    eraser.addEventListener('onclick', function(e){
      eraseButton = true;
      e.target.style.backgroundColor = ('white')
    })
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
  
  if (eraseButton === true){
    e.target.style.backgroundColor = ('white');
  }
}



