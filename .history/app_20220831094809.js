const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach(pianoKey => {
  const nerUrl = ''
  pianoKey.addEventListener('click', playSound)
})
