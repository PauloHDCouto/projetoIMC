/* variaveis */
const form = document.querySelector('form') //variavel botão
const inputWeight = document.querySelector('#weight') //variavel peso
const inputHeight = document.querySelector('#height') //variavel altura

const Modal = { /*********************  observação ao final *********************/

  wrapper: document.querySelector('.main-modal'),// tela do modal

  message: document.querySelector('.main-modal .modal h2'),// add frase ao h2

  buttonClose: document.querySelector('#btnReset'),// fecha no X
  
  error: document.querySelector('.alert-error'),//tela alerta

  open() {// abrir o modal
    Modal.wrapper.classList.add('open')
  },
  close() {// fechar o modal
    Modal.wrapper.classList.remove('open')
  },
  openError() {// abre tela de erro
    Modal.error.classList.add('open')
  },
  closeError() {// fecha tela de erro
    Modal.error.classList.remove('open')
  }
}

//callback da função
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

// funções
form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  if (weight && height !== String) {
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
  } else {
    Modal.openError()
  }
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function handleResetClick() {     
  Modal.close()
  Modal.closeError()
  
  inputWeight.value = ''
  inputHeight.value = ''
}

function handleResetEnter(event) {
  if (event.key == 'Enter' && Modal.wrapper.classList.contains('open')) {
    handleResetClick()
  } else if (event.key == 'Enter' && Modal.error.classList.contains('open')) {
    handleResetClick()
  }
}


/* neste projeto foi utilizado um objeto literal, no qual ele é utilizado para 
organizar e cetrwalizar as funções e variaveis nas quais usamos, ou seja, ELE ORQUESTRA O PROJETO*/