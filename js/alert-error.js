export const AlertError = {
  error: document.querySelector('.alert-error'),//tela alerta

  openError() {// abre tela de erro
    AlertError.error.classList.add('open')
  },
  closeError() {// fecha tela de erro
    AlertError.error.classList.remove('open')
  }

}

/* variaveis */
const inputWeight = document.querySelector('#weight') //variavel peso
const inputHeight = document.querySelector('#height') //variavel altura

//callback da função
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)
window.addEventListener('keydown', handleResetEsc) 

// funções
function handleResetClick() {
  AlertError.closeError()
  inputWeight.value = ''
  inputHeight.value = ''
}

function handleResetEnter(event) {
  if (event.key == 'Enter' && AlertError.error.classList.contains('open')) {
    handleResetClick()
  }
}

function handleResetEsc(event) {
  if (event.key == 'Escape') {
    AlertError.closeError()
    inputWeight.value = ''
    inputHeight.value = ''
  }
}

/* neste projeto foi utilizado um objeto literal, no qual ele é utilizado para 
organizar e cetrwalizar as funções e variaveis nas quais usamos, ou seja, ELE ORQUESTRA O PROJETO*/