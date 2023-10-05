import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber, displayResultMessage } from "./utils.js"

/* variaveis */
const form = document.querySelector('form') //variavel botão
const inputWeight = document.querySelector('#weight') //variavel peso
const inputHeight = document.querySelector('#height') //variavel altura


// funções
form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.openError()
    return;
  } else {
    AlertError.closeError()

    const result = IMC(weight, height)
    displayResultMessage(result)
  }
}

