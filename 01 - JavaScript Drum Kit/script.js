window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const keyDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
  keyDiv.classList.toggle("playing");
  setTimeout(function () {
    keyDiv.classList.toggle("playing");
  }, 200);
}
