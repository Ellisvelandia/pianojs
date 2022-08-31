const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach(pianoKey => {
  
  pianoKey.addEventListener('click', playSound)
})
