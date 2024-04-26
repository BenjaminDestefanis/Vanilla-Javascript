//Maenojo del evento

let btnTest = document.getElementById("btn_test")
let container = document.getElementById("container_p")
let inputText = document.getElementById("info_input")


function createtask(){
    let newTask = document.createElement("p")
    newTask.innerText = inputText.value
    container.appendChild(newTask)
}

btnTest.addEventListener("click", () => { createtask() })



