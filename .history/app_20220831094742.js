const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio()
}

pianoKeys.forEach(pianoKey => {
  pianoKey.addEventListener('click', playSound)
})
