// variáveis
const btntry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btntry.addEventListener('click' , handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// Função callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()


        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas`

    }
    
    inputNumber.value = ""
    xAttempts += 1
    

} 

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
