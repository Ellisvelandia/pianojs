const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach(pianoKey => {
  const nerUrl = '24'
  pianoKey.addEventListener('click', playSound)
})
