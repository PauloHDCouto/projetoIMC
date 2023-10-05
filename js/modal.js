export const Modal = { /*********************  observação ao final *********************/

  wrapper: document.querySelector('.main-modal'),// tela do modal
  message: document.querySelector('.main-modal .modal h2'),// add frase ao h2
  buttonClose: document.querySelector('#btnReset'),// fecha no X

  open() {// abrir o modal
    Modal.wrapper.classList.add('open')
  },
  close() {// fechar o modal
    Modal.wrapper.classList.remove('open')
  }
}

/* variaveis */
const inputWeight = document.querySelector('#weight') //variavel peso
const inputHeight = document.querySelector('#height') //variavel altura

//callback da função
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)
window.addEventListener('keydown', handleResetEsc) // função para fechar a tela no esc

// funções
function handleResetClick() {
  Modal.close()
  inputWeight.value = ''
  inputHeight.value = ''
}

function handleResetEnter(event) {
  if (event.key == 'Enter' && Modal.wrapper.classList.contains('open')) {
    handleResetClick()
  } 
}

function handleResetEsc(event) {
  if (event.key == 'Escape') {
    Modal.close()
    inputWeight.value = ''
    inputHeight.value = ''
  }
}

/* neste projeto foi utilizado um objeto literal, no qual ele é utilizado para 
organizar e cetrwalizar as funções e variaveis nas quais usamos, ou seja, ELE ORQUESTRA O PROJETO*/