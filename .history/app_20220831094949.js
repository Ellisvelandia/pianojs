const pianoKeys = document.querySelectorAll('.key')

function playSound() {
  new Audio().play()
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i
  const newUrl = '24-piano-keys/key02.mp3' + number + '.mp3'
  console.log(newUrl)
  pianoKey.addEventListener('click', () => playSound (newUrl))
})
