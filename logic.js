function updateText() {
    text_text.textContent = '';
    current_text = text_array[text_no];

    // seperate each character and make an element
    // out of each of them to individually style them
    current_text.split('').forEach(char => {
        const char_span = document.createElement('span');
        if (char === ' ') {
            char_span.innerHTML = '&nbsp';
        }
        else {
            char_span.innerText = char;
        }
        text_text.appendChild(char_span);
    })
    
    if (text_no < text_array.length - 1)
        text_no++
    else
        text_no = 0;
}

let correct_chars = 0;

function processCurrentText() {
    curr_input = input_text.value;
    // splits the input letter by letter
    curr_input_array = curr_input.split("");

    errors = 0;
    correct_chars = 0;

    text_span_array = text_text.querySelectorAll('span');

    // it assignes an index starting from 0 for every character
    // span
    text_span_array.forEach((char, index) => {
        let typed_char = curr_input_array[index];

        let expectedChar = (char.innerHTML.includes('&nbsp')) ? ' ' : char.innerText;
        if (typed_char === undefined) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        }

        else if (typed_char === expectedChar) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
            correct_chars++;
        }
            
        else if (typed_char === expectedChar) {
            correct_chars++;
        }
        else if (typed_char !== expectedChar){
            char.classList.remove('correct_char');
            char.classList.add('incorrect_char');

            errors++;
        }
    });
    error_text.textContent = total_errors + errors;
    cpm_text.textContent = total_correct_char_count + correct_chars;

    character_typed++;

    // I used a hidden div for counter , sorry I cheated :( But I really don't understand
    // why character_typed can' t be used in function finishGame properly.
    character_div.textContent = character_typed;

    if (curr_input.length === current_text.length) {
        updateText();
        input_text.value = "";
        total_errors += errors;
        total_correct_char_count += correct_chars;
        
    }
};

function displayRandomText() {
    return fetch('texts.json')
        .then(response => response.json())
        .then(data => {
            const index = Math.floor(Math.random() * data.texts.length);
            text_array = data.texts[index]
        })
        .catch(error => console.error('JSON cannot be uploaded properly.', error));
}

function resetCounters() {
    time_left = TIME_LIMIT;
    time_elapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    character_typed = 0;

    displayRandomText();
    text_no = 0;
    input_text.disabled = false;

    input_text.value = '';
    text_text.textContent = '';
    text_text.textContent = "Click on the area below to start the game";
    accuracy_text.textContent = 100;
    timer_text.textContent = time_left;
    error_text.textContent = 0;
    cpm_text.textContent = 0;
    wpm_text.textContent = 0;
    restart_btn.style.display = 'none';

    clearInterval(timer);
    timer = null; // timer is inactive
}




function updateTimer() {
    if (time_left > 0) {
        time_left--;
        time_elapsed++;
        if (time_left <= 10 && time_left > 0) 
            timer_text.style.color = "#f5006a";
        else if(time_left == 0)
            timer_text.style.color = ""
        timer_text.textContent = time_left;
    }
    else
        finishGame();
}




function startGame() {
    resetCounters();
    updateText();

    clearInterval(timer);
    // 1000 miliseconds = 1s
    timer = setInterval(updateTimer, 1000)
}




function finishGame() {
    clearInterval(timer);
    input_text.disabled = true;
    
    text_text.textContent = "Click on restart to start a new game.";
    input_text.value = '';

    console.log(character_typed);

    wpm_div.style.display = 'block';
    acc_div.style.display = 'block';
    wpm_text.textContent = Math.round((cpm_text.textContent) / 5)
    let accuracy_percentage = (((cpm_text.textContent) / character_div.textContent) * 100);
    accuracy_text.textContent = Math.round(accuracy_percentage);

}




function playSound() {
    const audio = new Audio('click.mp3');
    audio.play();

}

function playClick() {
    const audio = new Audio('mouse.mp3')
    audio.play();
}

