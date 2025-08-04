const boxesToShake = document.querySelectorAll('.shake-target');

// css animation 'shake''  runs
boxesToShake.forEach(boxToShake => {
    boxToShake.addEventListener('mouseenter', () => {
    boxToShake.classList.add('shake');
    setTimeout(() => {
        boxToShake.classList.remove('shake');
    }, 400);
})
    // it starts after 400 miliseconds
});

const containerToClick = document.querySelector(".input-container");
const buttonToShow = document.querySelector(".restart-btn");

containerToClick.addEventListener('click', () => {
    buttonToShow.style.display = "block";
    setTimeout(() => {
        buttonToShow.style.opacity = '1'
    },5)
 
    buttonToShow.classList.add('shake');
    setTimeout(() => {
        buttonToShow.classList.remove('shake');
    }, 400)
})



let isMuted = false;

const volumeButton = document.querySelector('.volume-btn');
const icon = volumeButton.querySelector('i');
volumeButton.addEventListener('click', () => {
    // toggle takes one class name I mean not fa-solid fa-volume-high 
    icon.classList.toggle('fa-volume-high');
    icon.classList.toggle('fa-volume-xmark');
    isMuted = !isMuted;
})


const header_element = document.querySelector('.header-text');
const text = header_element.textContent;
header_element.textContent = '';

text.split('').forEach(char => {
    const span = document.createElement('span');
    
    const link = document.createElement('a');
    link.href = 'https://youtu.be/0q3K6FPzY18?si=1arNatl3DPqFEJ38';
    link.textContent = char;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';
    link.target = '_blank'; //opens a new page

    link.addEventListener('click', () =>
    {
        if (isMuted) return;
        const audio = new Audio('mouse.mp3');
        audio.play()
    })


    span.appendChild(link);
    header_element.appendChild(span);
});


let TIME_LIMIT = 60;


let text_array; 
displayRandomText();




let timer_text = document.querySelector(".curr-time");
let curr_time_left = Number(timer_text.textContent);
if (curr_time_left <= 10) {
    timer_text.style.color ="#f5006a";
}
let error_text = document.querySelector(".curr-error");
let accuracy_text = document.querySelector(".curr-acc");
let cpm_text = document.querySelector(".curr-cpm");
let wpm_text = document.querySelector(".curr-wpm");
let text_text = document.querySelector(".text-container");
let input_text = document.querySelector(".input");
let input_container = document.querySelector("input-container");
const restart_btn = document.querySelector(".restart-btn");
let cpm_div = document.querySelector(".cpm-div");
let wpm_div = document.querySelector(".wpm-div");
let error_div = document.querySelector(".error-div");
let time_div = document.querySelector(".time-div");
let acc_div = document.querySelector(".acc-div");
let character_div = document.querySelector('.character-div');

let time_left = TIME_LIMIT;
let time_elapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let word_typed = 0;
let character_typed = 0;
let current_text = "";
let text_no = 0;
let timer = null;
let total_correct_char_count = 0;
let total_character_typed = 0;

let curr_word = '';



input_text.addEventListener('keydown', () => {
    if (isMuted) return;

    const audio = new Audio('click.mp3');
    audio.currentTime = 0;
    audio.play();
})
restart_btn.addEventListener('click', () => {
      
    
    setTimeout(() => {
    location.reload();
    }, 300);

    if (isMuted) return;

    const audio = new Audio('mouse.mp3');
    audio.currentTime = 0;
    audio.play();


});