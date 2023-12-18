"use strict"

// scrolling
let frames = document.querySelectorAll('.frame');
let zSpacing = -1000;
let lastPos = zSpacing / 5;
let zValues = [];

window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach((elem, index) => {
        zValues.push(index * zSpacing + zSpacing);
        zValues[index] += delta * -5.5;

        let frame = frames[index];
        let transform = `translateZ(${zValues[index]}px)`;
        let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
})

window.scrollTo(0, 1)

// audio
let soundBtn = document.querySelector('.soundButton');
let audio = document.querySelector('.audio');

soundBtn.addEventListener('click', () => {
    soundBtn.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
});

window.addEventListener('blur', () => {
    soundBtn.classList.add('paused');
    audio.pause();
})