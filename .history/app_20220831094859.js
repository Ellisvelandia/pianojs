const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach((pianoKey, i) => {
  const nerUrl = '24-piano-keys/key02.mp3' + number + '.mp3'
  console
  pianoKey.addEventListener('click', playSound)
})
