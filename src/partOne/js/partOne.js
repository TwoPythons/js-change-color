//I parte, cambiar color y texto a darkblue

function changeColor(){
const bg = document.getElementById("background");
    bg.style.backgroundColor = "darkblue";};

function changeText(){
const texto = document.getElementById ("text")
   texto.innerHTML = "darkblue";
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}