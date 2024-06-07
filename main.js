//Manipulando el DOM
const inputList = document.querySelectorAll(".input__fields");
const containerOfInput = document.querySelectorAll(".card__input-container");
const form = document.querySelector("form");
const submitButtom = document.getElementById("button-submit");
const firstCard = document.getElementById("rating-component");
const secondCard = document.getElementById("thank-you-component");
const ratingNumber = document.querySelector(".rating-number");

console.log(inputList, submitButtom);

//evitar que el formulario se recargue cuando se haga click en submit

//Primero recorrer los inputs
inputList.forEach((checkbox, index) => {
    //El programa detecta que el usuario le dio click a uno o varios de los inputs (por cierto hay que hacer una logica si escogen uno de los inputs, los demas se bloqueen)
    checkbox.addEventListener("click", () => {
        inputList.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = checkbox.checked;
            }

            console.log("presiono el input");
        })

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            firstCard.classList.add("interactive-card--hidden");
            secondCard.classList.remove("interactive-card--hidden");
            ratingNumber.innerHTML = inputList[index].value;
            //cambiar color del container
            // if(checkbox.checked) {
            //     firstCard.classList.add("interactive-card--hidden");
            //     secondCard.classList.remove("interactive-card--hidden");
            //     ratingNumber.innerHTML = inputList[index].value;
            
        })

        if(checkbox.checked) {
            containerOfInput[index].style.backgroundColor = "grey";
            
        } else {
            containerOfInput[index].style.backgroundColor = "";
        }
        
    });
})