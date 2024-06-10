const inputList = document.querySelectorAll(".input__fields");
const containerOfInput = document.querySelectorAll(".card__input-container");
const form = document.querySelector("form");
const submitButtom = document.getElementById("button-submit");
const firstCard = document.getElementById("rating-component");
const secondCard = document.getElementById("thank-you-component");
const ratingNumber = document.querySelector(".rating-number");

inputList.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
        inputList.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = checkbox.checked;
            }
        })

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            firstCard.classList.add("interactive-card--hidden");
            secondCard.classList.remove("interactive-card--hidden");
            ratingNumber.innerHTML = inputList[index].value;
        })

        if(checkbox.checked) {
            containerOfInput[index].style.backgroundColor = "grey";
            
        } else {
            containerOfInput[index].style.backgroundColor = "";
        }
        
    });
})