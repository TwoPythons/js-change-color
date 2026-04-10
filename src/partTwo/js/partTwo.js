//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
const bg = document.getElementById("background");
console.log("Текущий цвет:", bg.style.backgroundColor); // Посмотри это в консоли браузера (F12)


  // Используем двойное или тройное равно для сравнения
  if (bg.style.backgroundColor === "darkblue") {
    bg.style.backgroundColor = "red";
  } else {
    bg.style.backgroundColor = "darkblue";
  }
}

function changeText(){
const texto = document.getElementById ("text")

if (texto.textContent === "darkblue") {
   texto.textContent = "red";
} else { 
   texto.textContent = "darkblue";
}}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}