const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach(pianoKey => {
  const nerUrl = '24-piano-keys/key'
  pianoKey.addEventListener('click', playSound)
})
