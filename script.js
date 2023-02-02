const gridContainer = document.getElementById('gridContainer');
const cell = document.getElementById('cell');
const eraser = document.getElementById('eraser');
let pixel = document.getElementsByClassName('row');
const sketch = document.getElementById('sketch');
const slider = document.getElementById("myRange");
const output = document.getElementById("size");

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

// slider value
output.innerHTML = slider.value + ' x ' + slider.value;
slider.addEventListener('input', function(){
  output.innerHTML = this.value + ' x ' + this.value;
});



slider.oninput = function(){
  document.querySelectorAll('.row').forEach(e => e.remove());
  createGrid(slider.value);
}

function createRow(val){
  for (i = 0; i < val; i++){
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

function createGrid(val){
  for (j= 0; j < val; j++){
    createRow(val);
  }
}


createGrid(16);

function paintPixel(e){
  if (mouseDown === true){
    e.target.style.backgroundColor = ('black');
  }
  
  if (eraseButton === true && mouseDown === true) {
    e.target.style.backgroundColor = ('white');
  }
}



