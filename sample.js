function showInputs() {
    document.getElementById("luvu").style.display = 'block';

    var input1 = document.getElementById('input1').value;
    var output = document.getElementById('output');
    output.innerHTML = input1;
    startMusic();
    document.getElementById("floatimage").style.display = 'block';
    hearts();

}

function startMusic() {
    const audioPlayer = document.getElementById('audio-player');
    // Set the desired start time in seconds
    const startTimeInSeconds = 50;
    audioPlayer.currentTime = startTimeInSeconds;
    audioPlayer.play();
    //sample push one
}

function hearts(){
    container = document.querySelector('.container')
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `🍟` + `🍗` + `🍔`;
    creat.style.left = Math.random() * 100 + 'vw';
 
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';

    container.appendChild(creat);

    setTimeout(() =>
    {
        creat.remove();
    },3000);

}
setInterval(hearts,100);



