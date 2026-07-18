import "cubing/twisty";

const cube = document.getElementById("middle-cube")

const scramble_button = document.getElementById("scramble")
scramble_button.onclick = () => {
    cube.experimentalAddMove("R");
}

window.addEventListener("keydown", (event) => {
    const moves = ["R", "U", "F", "L", "D", "B"];
    const key_pressed = event.key
    if (moves.includes(key_pressed.toUpperCase())) {
        const move = key_pressed === key_pressed.toUpperCase() ? key_pressed : key_pressed.toUpperCase() + "'";
        console.log(move);
        cube.experimentalAddMove(move);
    }
});