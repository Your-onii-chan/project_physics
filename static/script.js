// Function to generate a tone at the specified frequency
function playTone(frequency) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
  
    // Stop the oscillator after 5 seconds (or any duration you want)
    setTimeout(() => {
      oscillator.stop();
    }, 1000); // 5000ms = 5 seconds
  }
  
  // Attach event listeners to buttons
  document.getElementById('hz599').addEventListener('click', () => {
    playTone(599);
  });
  
  document.getElementById('hz428').addEventListener('click', () => {
    playTone(428);
  });
  