//Manipulando el DOM
const inputList = document.querySelectorAll(".input__fields");
const containerOfInput = document.querySelectorAll(".card__input-container");
const submitButtom = document.getElementById("button-submit");

console.log(inputList, submitButtom);

//Primero recorrer los inputs
inputList.forEach((checkbox, index) => {
    //El programa detecta que el usuario le dio click a uno o varios de los inputs (por cierto hay que hacer una logica si escogen uno de los inputs, los demas se bloqueen)
    checkbox.addEventListener("click", () => {
        inputList.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = checkbox.checked;
            }
            //cambiar color del container
            if(checkbox.checked) {
                containerOfInput[index].style.backgroundColor = "grey";
            } else {
                containerOfInput[index].style.backgroundColor = "";
            }
    
            console.log("presiono el input");

        })
    });
})