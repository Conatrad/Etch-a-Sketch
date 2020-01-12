let size = 16;
let container = document.querySelector('.container');
let main = document.querySelector('.main');
let pixel;

//The starting canvas generated on webpage load
function generateGrid() {

    for(let h = 0; h < size; h++)
    {
        for(let i = 0; i < size; i++)
        {  
            let div = document.createElement('div');
            div.classList.add('grid', 'clean');
            container.appendChild(div);
        }
    }
    print();
}

//Changes the color of the pixels as you mouse over them
hover = () => {
    pixel = document.querySelectorAll('div');
    pixel.forEach(function(pixel){
        pixel.addEventListener('mouseover', () => {
            pixel.classList.remove('clean');
        })
    })
}

//Generates canvas with specified size
print = () => {
    container.style.cssText = 'grid-template-columns: repeat(' + size + ', 1fr); grid-template-rows: repeat(' + size + ', 1fr);'
    main.appendChild(container);
    hover();
}

let clearBtn = document.querySelector('#clear');
let resizeBtn = document.querySelector('#resize');

clearBtn.addEventListener('click', clear);

resizeBtn.addEventListener('click', () => {
    size = prompt('How many pixels would you like the new canvas to be? \n Choose a number between 1 and 50.');
    size = size > 50 ? size = 50 : size = size;
    size = size < 1 ? size = 1 : size = size;
    generateGrid();
    clear();
})

function clear() {
    pixel.forEach(function(pixel){ 
        pixel.classList.add('clean'); 
    })
}

document.onload = generateGrid();