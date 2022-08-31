const pianoKeys = document.querySelectorAll('.key')

function

pianoKeys.forEach(pianoKey => {
  pianoKey.addEventListener('click', playSound)
})
