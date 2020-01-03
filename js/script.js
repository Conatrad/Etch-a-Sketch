generateGrid = () => {
    
const div = document.createElement('div');
const section = document.querySelector('section');

    for(let i = 0; i < 16; i++)
    {
        div.classList.add('row');
        div.style.cssText = "background-color: red";
        div.textContent = ".";
        div.appendChild(section);
    }

}
generateGrid();