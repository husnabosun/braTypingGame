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

const header_element = document.querySelector('.header-text');
const text = header_element.textContent;
header_element.textContent = '';

text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    header_element.appendChild(span);
})


let TIME_LIMIT = 60;

let text_array = ["When Tom's grandmother passed away, he inherited $50,000. Unsure of what ",
    "to do with the money, he sought advice from a financial advisor.Together, they devised a plan.",
    "Tom invested 60 % of the money in a diversified portfolio of stocks and bonds, put 20 % into a high - yield ",
    "savings account for emergencies, and used the remaining 20 % to pay off his student loan debt.Over the next 10 ",
    "years Tom's investments grew steadily, and he was able to buy his first home, start a family, and achieve financial security. ",
    "The inheritance, coupled with wise financial decisions, paved the way for a brighter future."];

console.log(text_array[0])
console.log(text_array.length)

let timer_text = document.querySelector(".curr-time");
let error_text = document.querySelector(".curr-err");
let accuracy_text = document.querySelector(".curr-acc");
let cpm_text = document.querySelector(".curr-cpm");
let wpm_text = document.querySelector(".curr-wpm");
let text_text = document.querySelector(".text-container");
let input_text = document.querySelector(".input");
let input_container = document.querySelector("input-container");
let restart_btn = document.querySelector(".restart_btn");
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

function updateText() {
    text_text.textContent = null;
    current_text = text_array[text_no];

    // seperate each character and make an element
    // out of each of them to individually style them
    current_text.split('').forEach(char => {
        const char_span = document.createElement('span');
        char_span.innerText = char;
        text_text.appendChild(char_span);
    })
    
    if (text_no < text_array.length - 1)
        text_no++
    else
        text_no = 0;
}

function processCurrentText() {
    curr_input = input_container.value;
    curr_input_array = curr_input.split("");
}

function resetCounters() {
    time_left = TIME_LIMIT;
    time_elapsed = 0;
    errors = 0;
    accuracy = 0;
    character_typed = 0;
    text_no = 0;
}