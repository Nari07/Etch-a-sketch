const gridContainer = document.getElementById('gridContainer');
const row = document.getElementById('row');

function createGrid(){
  for (i = 1; i < 17; i++){
    let cellRow = document.createElement('div');
    cellRow.className = 'row';
    cellRow.innerText = `${i}`;
    cellRow.id = 'row';
    gridContainer.appendChild(cellRow);
/*     for (i = 0; i < 16; i++){
      createColumn();
    } */
  }
  
}

function createColumn(){
	for (i = 1; i < 17; i++){
    let cellColumn = document.createElement('div');
    cellColumn.className = 'row';
    cellColumn.innerText = `${i}`;
    gridContainer.appendChild(cellColumn);
   }
}

createGrid();
   
