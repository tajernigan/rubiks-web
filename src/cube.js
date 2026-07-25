import "cubing/twisty";

const SCRAMBLE_COUNT = 20;
let scrambled = false;
const moves = ["R", "U", "F", "L", "D", "B"];
const directions = ["'", "", "2"];
const cube = document.getElementById("middle-cube");

const sleep = milliseconds =>
    new Promise(resolve => setTimeout(resolve, milliseconds));

const random_move = () => {
    return moves[Math.floor(Math.random() * moves.length)] + directions[Math.floor(Math.random() * directions.length)]; // get random move type and direction
}

const scramble_button = document.getElementById("scramble")
scramble_button.onclick = async () => {
    if (scrambled === true) return;
    scrambled = true;
    let scramble = [];
    
    for (let i = 0; i < SCRAMBLE_COUNT; i++){
        const move = random_move();
        scramble.push(move);
        await sleep(500);
        cube.experimentalAddMove(move);
    }
    
    scrambled = false;

    const scramble_string = scramble.join(" ");
    console.log(scramble_string);
    const response = await fetch(
        "/api/message",
        {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: scramble_string
    });

    const message = await response.text();
    console.log(message);
}

window.addEventListener("keydown", (event) => {
    const key_pressed = event.key
    if (moves.includes(key_pressed.toUpperCase())) {
        const move = key_pressed === key_pressed.toUpperCase() ? key_pressed : key_pressed.toUpperCase() + "'";
        console.log(move);
        cube.experimentalAddMove(move);
    }
});
