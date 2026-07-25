import "cubing/twisty";

const cube = document.getElementById("middle-cube")

const scramble_button = document.getElementById("scramble")
scramble_button.onclick = async () => {
    cube.experimentalAddMove("R");
    const response = await fetch(
        "/api/message",
        {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: "someone just hit scramble"
    });

    const message = await response.text();
    console.log(message);
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
