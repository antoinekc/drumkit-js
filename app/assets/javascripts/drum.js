window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //défini l'audio correspondant à la data-key de l'evenement "keydown"
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selectionne la <div> correspondant a la data-key

  if(!audio) return; // stop la fonction pour les touches qui n'ont pas d'audio
  audio.currentTime = 0; // remet le son à 0 pour être rejoué si la même touche est pressée plusieurs fois de suite.
  audio.play(); //joue l'audio

  key.classList.add('playing');

  audio.addEventListener('ended', function() {
    key.classList.remove('playing');

  });
});