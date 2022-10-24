const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".option-containor");

const optionList = document.querySelector(".option")

selected.addEventListener("click", () =>{
    optionContainer.classList.toggle("activate");
});