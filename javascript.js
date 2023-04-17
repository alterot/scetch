//Add 

const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const classic = document.querySelector('#classic');
const rainbow = document.querySelector('#rainbow');
const grey = document.querySelector('#grey');
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');

let mode = 'classic';
createGrid(16, 16);
classic.style.backgroundColor = 'white';
grid16.style.backgroundColor = 'white';

function handleGridSizeChange(rows, columns) {
    createGrid(rows, columns);
    grid16.style.backgroundColor = rows === 16 ? 'white' : '';
    grid32.style.backgroundColor = rows === 32 ? 'white' : '';
    grid64.style.backgroundColor = rows === 64 ? 'white' : '';
    changeColor();
}

function handleColorModeChange(selectedMode) {
    mode = selectedMode;
    classic.style.backgroundColor = mode === 'classic' ? 'white' : '';
    rainbow.style.backgroundColor = mode === 'rainbow' ? 'white' : '';
    grey.style.backgroundColor = mode === 'grey' ? 'white' : '';
    changeColor();
}

function changeColor() {
    const gridItems = document.querySelectorAll('.grid-item'); //make this a 'clear' function instead. Duplicate of clear button
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
    });
    
    if (mode === 'classic') {
        scetchBlack();
    } else if (mode === 'rainbow') {
        scetchColor();
    } else if (mode === 'grey') {
        scetchGrey();
    }
}

grid16.addEventListener('click', () => handleGridSizeChange(16, 16));
grid32.addEventListener('click', () => handleGridSizeChange(32, 32));
grid64.addEventListener('click', () => handleGridSizeChange(64, 64));
rainbow.addEventListener('click', () => handleColorModeChange('rainbow'));
classic.addEventListener('click', () => handleColorModeChange('classic'));
grey.addEventListener('click', () => handleColorModeChange('grey'));

function createGrid(rows, columns) {  
    
    grid.style.setProperty('--grid-r', rows);
    grid.style.setProperty('--grid-c', columns);

    grid.innerHTML='';
    
    for (let i = 1; i <= (rows * columns); i++) {     
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    };

    changeColor();
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

function scetchGrey() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        let opacity = 0; 
        item.addEventListener('mouseover', () => {
        opacity += 0.1;
        item.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });
  });
}

reset.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
    });
})