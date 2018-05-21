//1.  Start and stop the timer by pressing the "Start/Stop" button. 
//2. Start and stop the timer by pressing the 's' key.
//3. Record the current timer count into the Past Times section by pressing the "Record Time" button
//4. Record the current timer count into the Past Times section by pressing the 't' key.
//5. Reset the timer count to 0 and wipe all previously recorded times in the Past Times section by pressing the "Reset" button.
//6. Reset the timer count to 0 and wipe all previously recorded times in the Past Times section by pressing the 'r' key.

// global vars
let start = 0.00;
let interval;
let isItRunning = false;

// event listeners
document.getElementById('start_stop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('record').addEventListener('click', record);

// functions:
// Start/Stop
function startStop(){
    if(isItRunning){
        clearInterval(interval);
        isItRunning = false;
    } else {   
        interval = setInterval(()=>{
            start+=0.1;
            document.getElementById('output_start').innerHTML = start.toFixed(2); 
        }, 100)
        isItRunning = true;
    }
}

// Reset
function reset(){
    clearInterval(interval);
    document.getElementById('output_start').innerHTML = 0;
    document.getElementById('output_record').innerHTML = '';
    
}

// Record
function record(){
    document.getElementById('output_record').innerHTML += document.getElementById('output_start').innerHTML + "<br>";
}

// Letters
document.addEventListener('keydown', (event) => {
    if(event.key === 's'){
        startStop();
    } else if(event.key === 't'){
        record();
    } else if(event.key === 'r'){
        reset();
    }
})


