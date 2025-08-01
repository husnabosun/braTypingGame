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

const volumeButton = document.querySelector('.volume-btn');
const icon = volumeButton.querySelector('i');
volumeButton.addEventListener('click', () => {
    // toggle takes one class name I mean not fa-solid fa-volume-high 
    icon.classList.toggle('fa-volume-high');
    icon.classList.toggle('fa-volume-xmark');
})

/* if (icon.classList.contains('fa-volume-xmark')) {
    audio.muted = true;
}
else {
    audio.muted = false;
}
*/
const header_element = document.querySelector('.header-text');
const text = header_element.textContent;
header_element.textContent = '';

text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    header_element.appendChild(span);
})


let TIME_LIMIT = 60;

let text_array = ["When Tom's grandmother passed away,","he inherited $50,000. Unsure of what",
    "to do with the money," ,"he sought advice from a financial advisor.", "Together, they devised a plan.",
    "Tom invested 60 % of the money", "in a diversified portfolio of", "stocks and bonds, put 20 % into a",
    "high - yield savings account for", "emergencies, and used the remaining 20 %", "to pay off his student loan debt.",
    "Over the next 10 years Tom's", " investments grew steadily, and he was", "able to buy his first home, start a", "family, and achieve financial security.",
    "The inheritance, coupled with", "wise financial decisions, paved", "the way for a brighter future."];

console.log(text_array[0])
console.log(text_array.length)



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
let error_div = document.querySelector("error-div");
let time_div = document.querySelector(".time-div");
let acc_div = document.querySelector(".acc-div");

let time_left = TIME_LIMIT;
let time_elapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let character_typed = 0;
let current_text = "";
let text_no = 0;
let timer = null;

input_text.addEventListener('keydown', () => {
    const audio = new Audio('click.mp3');
    audio.currentTime = 0;
    audio.play();
})


restart_btn.addEventListener('click', () => {
    resetCounters();
});