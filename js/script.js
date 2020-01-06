let size  = 16;
size = size > 50 ? size = 50 : size = size;
size = size < 1 ? size = 1 : size = size;


generateGrid = () => {

let container = document.querySelector('.container');
let main = document.querySelector('.main');

    for(let h = 0; h < size; h++)
    {
        for(let i = 0; i < size; i++)
        {  
            let div = document.createElement('div');
            div.classList.add('grid', 'red');
            container.appendChild(div);
        }
    }
    container.style.cssText = 'grid-template-columns: repeat(' + size + ', 1fr); grid-template-rows: repeat(' + size + ', 1fr);'
    main.appendChild(container);
}

generateGrid();

let pixel = document.querySelectorAll('div');

pixel.forEach(function(pixel){
    pixel.addEventListener('mouseover', () => {
        pixel.classList.remove('red');
    })
})

let clear = document.querySelector('#clear');
let resize = document.querySelector('#resize');

clear.addEventListener('click', () => {
    pixel.forEach(function (pixel){ 
        pixel.classList.add('red'); 
    });
})

resize.addEventListener('click', () => {
    size = prompt('How many pixels would you like the canvas to be? \n Pick a number between 1 and 50');
    generateGrid();
})