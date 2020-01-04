generateGrid = () => {

const container = document.querySelector('.container');

    for(let h = 0; h < 16; h++)
    {
        for(let i = 0; i < 16; i++)
        {  
            let div = document.createElement('div');
            div.classList.add('grid', 'red');
            container.appendChild(div);
        }
    }

}

generateGrid();

let pixel = document.querySelectorAll('div');

pixel.forEach(function(pixel){
    pixel.addEventListener('mouseover', () => {
        pixel.classList.remove('red');
    })
})

let clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    pixel.forEach(function (pixel){ 
        pixel.classList.add('red'); 
    });
});