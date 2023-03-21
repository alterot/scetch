const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const classic = document.querySelector('#classic');
const rainbow = document.querySelector('#rainbow');
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');

/*

FUNCTION FOR INCREASING BLACKNESS:
function sketchColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    let opacity = 0; // set initial opacity to 0
    item.addEventListener('mouseover', () => {
      opacity += 0.1; // increase opacity by 0.1 on each mouseover
      item.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // set the background color with increased opacity
    });
  });
}

ALSO: create TWO new funtions for handling grid size changes (including button color change) 
AND a new function to handle color change. Even more important with a third button for black / white.  

*/

let classicMode = true;
createGrid(16, 16);
classic.style.backgroundColor = 'white';
grid16.style.backgroundColor = 'white';

grid16.addEventListener('click', () => {
    createGrid(16, 16);
    grid16.style.backgroundColor = 'white';
    grid32.style.backgroundColor = '';
    grid64.style.backgroundColor = '';
});

grid32.addEventListener('click', () => {
    createGrid(32, 32);
    grid16.style.backgroundColor = '';
    grid32.style.backgroundColor = 'white';
    grid64.style.backgroundColor = '';
});

grid64.addEventListener('click', () => {
    createGrid(64, 64);
    grid16.style.backgroundColor = '';
    grid32.style.backgroundColor = '';
    grid64.style.backgroundColor = 'white';
});

rainbow.addEventListener('click', () => {
    classic.style.backgroundColor = '';
    rainbow.style.backgroundColor = 'white';
    classicMode = false;
    createGrid(16, 16);
    grid16.style.backgroundColor = 'white';
    grid32.style.backgroundColor = '';
    grid64.style.backgroundColor = '';
});

classic.addEventListener('click', () => {
    rainbow.style.backgroundColor = '';
    classic.style.backgroundColor = 'white';
    classicMode = true;
    createGrid(16, 16);
    grid16.style.backgroundColor = 'white';
    grid32.style.backgroundColor = '';
    grid64.style.backgroundColor = '';
})

function createGrid(rows, columns) {  
    
    grid.style.setProperty('--grid-r', rows);
    grid.style.setProperty('--grid-c', columns);

    grid.innerHTML='';
    
    for (let i = 1; i <= (rows * columns); i++) {     
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    };

    if(classicMode) {
        scetchBlack();
    } else {
        scetchColor();
    };
}

function scetchBlack () {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
    });
}

function scetchColor () {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const rainbow = Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = '#' + rainbow;
    })
});
}

reset.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
    });
})