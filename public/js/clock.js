 import $ from "jquery";
 import 'bootstrap/dist/css/bootstrap.css';
 import '../css/style.css';
let playing = false;
let currentPlayer = 1;
let gameMode = 3;
const timerPanel = document.querySelector('.player');
const buttons = document.querySelectorAll('.bttn');
//const buttons = $(":button");
// Sound effects for project.
//const timesUp = new Audio('audio/460133__eschwabe3__robot-affirmative.wav');
//const click = new Audio('audio/561660__mattruthsound.wav');

// Add a leading zero to numbers less than 10.
const padZero = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

// Create a class for the timer.
class Timer {
    constructor(player, minutes) {
        this.player = player;
        this.minutes = minutes;
    }
    getMinutes(timeId) {
        return $(timeId).text();
    }
}

let p1time = new Timer('min1', $("#min1"));
let p2time = new Timer('min2', $("#min2"));
let p3time = new Timer('min3', $("#min3"));
let p4time = new Timer('min4', $("#min4"));

// Player class for saving turns and the times of the turns.
class Player {
    constructor() {
        this.turns = []
    }

    // input: Turn time XX:XX (min:sec) puts it at End of Array Turns.
    // output: void
    // example: "p1.pushTurn(getTimestamp(1));", "p1.pushTurn('05:22')"
    pushTurn (newTurn) {
        this.turns.push(newTurn);
    }
    // input: turn number int 1 digit.
    // output: Content of the requested Turn XX:XX (min:sec)
    getTurn = (currentTurn) => {
        return turns[currentTurn - 1];
    }
}

let p1 = new Player();
let p2 = new Player();
let p3 = new Player();
let p4 = new Player();
//let p5 = new Player();

// Swap player's timer after a move (player1 = 1, player2 = 2).
const swapPlayer = () => {
    if (!playing) return;
    // Toggle the current player. returns to first Player after full circle, indipendent of Gamemode.
    // input: void.
    // output: void.
        if (currentPlayer === 1) {
            // pushes current Time to Array.
            p1.pushTurn(getTimestamp(1));
            console.log(p1.turns[p1.turns.length - 1]);
            // resetting minute Timer of next Player
            $("#min2").text(padZero(0));
            // switches to next Player.
            currentPlayer = 2;
        } else if (gameMode != 1 && currentPlayer === 2) {
            p2.pushTurn(getTimestamp(2));
            console.log(p2.turns[p2.turns.length - 1]);
            $("#min3").text(padZero(0));
            currentPlayer = 3;
        } else if (gameMode != 2 && currentPlayer === 3) {
            p3.pushTurn(getTimestamp(3));
            console.log(p3.turns[p3.turns.length - 1]);
            $("#min4").text(padZero(0));
            currentPlayer = 4;
        } else if (gameMode != 3 && currentPlayer === 4) {
            p4.pushTurn(getTimestamp(4));
            console.log(p4.turns[p4.turns.length - 1]);
            $("#min5").text(padZero(0));
            currentPlayer = 5;
        } else {
            if (gameMode === 1) {
                p2.pushTurn(getTimestamp(2));
                console.log(p2.turns[p2.turns.length - 1]);
            } else if (gameMode === 2) {
                p3.pushTurn(getTimestamp(3));
                console.log(p3.turns[p3.turns.length - 1]);
            } else if (gameMode === 3) {
                p4.pushTurn(getTimestamp(4));
                console.log(p4.turns[p4.turns.length - 1]);
            } else {
                p5.pushTurn(getTimestamp(5));
                console.log(p5.turns[p5.turns.length - 1]);
            }
            $("#min1").text(padZero(0));
            currentPlayer = 1;
        }
    // Play the click sound.
    //click.play();
}

// function for getting current Time of a Player.
// input: player, int one digit.
// output: returns minutes and seconds XX:XX
function getTimestamp (player) {
    let sec = $("#sec" + player).text();
    let min = $("#min" + player).text();
    return min + ":" + sec;
}

// Start timer tracking Turn length.
const startTimer = () => {
    playing = true;
    let p1sec = 58;
    let p2sec = 55;
    let p3sec = 55;
    let p4sec = 55;
    let timerId = setInterval(function() {
        // Player 1
        if (currentPlayer === 1) {
            if (playing) {
                buttons[0].disabled = true;
                p1time.minutes = parseInt(p1time.getMinutes('#min1'), 10);
                if(p1sec === 59) {
                    p1time.minutes = p1time.minutes + 1;
                    $("#sec1").text(padZero('0'));
                    $("#min1").text(padZero(p1time.minutes));
                    p1sec = 0;
                } else {
                    p1sec = p1sec + 1;
                    $('#sec1').text(padZero(p1sec));
                    $('#min1').text(padZero(p1time.minutes));
                }
            }
        // Player 2
        } else if (currentPlayer === 2){
            p1sec = 0;
            if (playing) {
                p2time.minutes = parseInt(p2time.getMinutes('#min2'), 10);
                if(p2sec === 59) {
                    p2time.minutes = p2time.minutes + 1;
                    $("#sec2").text(padZero('0'));
                    $("#min2").text(padZero(p2time.minutes));
                    p2sec = 0;
                } else {
                    p2sec = p2sec + 1;
                    $('#sec2').text(padZero(p2sec));
                    $('#min2').text(padZero(p2time.minutes));
                }
            }
        // Player 3
        } else if (currentPlayer === 3){
            if (playing) {
                p3time.minutes = parseInt(p3time.getMinutes('#min3'), 10);
                if(p3sec === 59) {
                    p3time.minutes = p3time.minutes + 1;
                    $("#sec3").text(padZero('0'));
                    $("#min3").text(padZero(p3time.minutes));
                    p3sec = 0;
                } else {
                    p3sec = p3sec + 1;
                    $('#sec3').text(padZero(p3sec));
                    $('#min3').text(padZero(p3time.minutes));
                }
            }
        // Player 4
        } else if (currentPlayer === 4){
            if (playing) {
                p4time.minutes = parseInt(p4time.getMinutes('#min4'), 10);
                if(p4sec === 59) {
                    p4time.minutes = p4time.minutes + 1;
                    $("#sec4").text(padZero('0'));
                    $("#min4").text(padZero(p4time.minutes));
                    p4sec = 0;
                } else {
                    p4sec = p4sec + 1;
                    $('#sec4').text(padZero(p4sec));
                    $('#min4').text(padZero(p4time.minutes));
                }
            }
        }
    }, 1000);
}

// Listen for a mouse click or tap on the screen to toggle between timers.

timerPanel.addEventListener('click', swapPlayer);

// Loop through the start and reset buttons.

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === 'START') {
            // Turn the button a gray color to signify a disabled button.
            buttons[i].style.color = '#EEEEEE';
            buttons[i].style.backgroundColor = '#606060';
            startTimer();
        } else {
            // Reset everything by reloading the page.
            location.reload(true);
        }
    });
}

// Listen for the press of the spacebar on Windows, Linux, and Mac.
// needs rework with jquery.

document.addEventListener('keypress', event => {
    if (event.keyCode === 32 || event.which === 32) {
        swapPlayer();
    }
});

