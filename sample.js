function showInputs() {
    document.getElementById("luvu").style.display = 'block';
    var input1 = document.getElementById('input1').value;
    var output = document.getElementById('output');
    output.innerHTML = input1;
    startMusic();
}

function startMusic() {
    const audioPlayer = document.getElementById('audio-player');
    // Set the desired start time in seconds
    const startTimeInSeconds = 50;
    audioPlayer.currentTime = startTimeInSeconds;
    audioPlayer.play();
    //sample push one
  }
