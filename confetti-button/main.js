const btn = document.querySelector('#btn');
  const canvas = document.querySelector('#confetti-canvas');
  function onButtonClick(){
    var myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 100,
      spread: 160
    });
  }
  btn.addEventListener('click', onButtonClick);
