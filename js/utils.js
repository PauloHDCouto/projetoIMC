import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"

const inputWeight = document.querySelector('#weight') //variavel peso
const inputHeight = document.querySelector('#height') //variavel altura

inputWeight.oninput = () => AlertError.closeError()
inputHeight.oninput = () => AlertError.closeError()

export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notANumber(value) {
  return isNaN(value) || value == ""
}

export function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}