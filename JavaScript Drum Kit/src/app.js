const dataKeys = {
    'A': 65,'S': 83,'D': 68,'F': 70, 'G': 71, 'H': 72, 'J': 74, 'K': 75, 'L': 76
}
document.addEventListener('keydown', event => {
    const key = dataKeys[event.code.slice(3)];

    if (key.length > 2) return;

    let audio = document.body.querySelector(`audio[data-key="${key}"]`);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
})