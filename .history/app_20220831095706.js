const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrL) {
  console.log(newUrL);
  new Audio(newUrL).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrL = "24-piano-keys/key01.mp3 " + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newUrL));
});
