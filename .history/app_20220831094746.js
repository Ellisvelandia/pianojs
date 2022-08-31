const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().´lay()
}

pianoKeys.forEach(pianoKey => {
  pianoKey.addEventListener('click', playSound)
})
