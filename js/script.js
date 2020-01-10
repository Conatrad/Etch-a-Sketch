let size = 16;
let container = document.querySelector('.container');
let main = document.querySelector('.main');
let pixel;

function generateGrid() {

    for(let h = 0; h < size; h++)
    {
        for(let i = 0; i < size; i++)
        {  
            let div = document.createElement('div');
            div.classList.add('grid', 'red');
            container.appendChild(div);
        }
    }
    print();
}

hover = () => {
pixel = document.querySelectorAll('div');
pixel.forEach(function(pixel){
    pixel.addEventListener('mouseover', () => {
        pixel.classList.remove('red');
        })
    })
}

print = () => {
    
    container.style.cssText = 'grid-template-columns: repeat(' + size + ', 1fr); grid-template-rows: repeat(' + size + ', 1fr);'
    main.appendChild(container);
    hover();
}

let clearBtn = document.querySelector('#clear');
let resizeBtn = document.querySelector('#resize');

clearBtn.addEventListener('click', clear);

resizeBtn.addEventListener('click', () => {
    size = prompt('How many pixels would you like the canvas to be? \n Pick a number between 1 and 50');
    size = size > 50 ? size = 50 : size = size;
    size = size < 1 ? size = 1 : size = size;
    generateGrid();
    clear();
})

clear = () => {
    pixel.forEach(function (pixel){ 
        pixel.classList.add('red'); 
    })
}

document.onload = generateGrid();