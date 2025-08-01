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



function processCurrentText() {
    curr_input = input_text.value;
    // splits the input letter by letter
    curr_input_array = curr_input.split("");
 
    character_typed = curr_input.length;
    errors = 0;

    text_span_array = text_text.querySelectorAll('span');
    // it assignes an index starting from 0 for every character
    // span
    text_span_array.forEach((char, index) => {
        let typed_char = curr_input_array[index];

        if (typed_char === undefined) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        }

        else if (typed_char === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
        }
        else if (typed_char === ' '){
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        }
        else if (typed_char !== char.innerText){
            char.classList.remove('correct_char');
            char.classList.add('incorrect_char');

            errors++;
        }
    });
    error_text.textContent = total_errors + errors;

    let total_correct_char_count = (character_typed - (Number(error_text.textContent)));

    let accuracy_percentage = ((total_correct_char_count / character_typed) * 100);
    accuracy_text.textContent = Math.round(accuracy_percentage);

    if (curr_input.length === current_text.length) {
        updateText();
        total_errors += errors;
        input_text.value = "";
    }
    };




function resetCounters() {
    time_left = TIME_LIMIT;
    time_elapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    character_typed = 0;
    text_no = 0;
    input_text.disabled = false;

    input_text.value = '';
    text_text.textContent = '';
    text_text.textContent = "Click on the area below to start the game";
    accuracy_text.textContent = 100;
    timer_text.textContent = time_left;
    error_text.textContent = 0;
    restart_btn.style.display = 'none';
    cpm_div.style.display = 'none';
    wpm_div.style.display = 'none';

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

    cpm_text.textContent = Math.round((character_typed / time_elapsed) * 60);
    wpm_text.textContent = Math.round((character_typed / time_elapsed) * 60);

    cpm_div.style.display = 'block';
    wpm_div.style.display = 'block';
}




function playSound() {
    const audio = new Audio('click.mp3');
    audio.play();

}



