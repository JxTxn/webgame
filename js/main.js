// game window reference
const gamewindow = document.getElementById("gameWindow");

// main character
const character = document.getElementById("maincharacter");
const offsetCharacter = 16;
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");

gamewindow.onclick = function (e) {
    var rect = gamewindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    character.style.left = x - offsetCharacter + "px";
    character.style.top = y - offsetCharacter + "px";

    switch (e.target.id) {
        case "door1":
            character.style.backgroundcolor = "#ffff00";
            door1.style.opacity = 0.2;
            break;

        case "sign":
            character.style.backgroundcolor = "#ffff00";
            sign.style.opacity = 0.2;
            break;

        default:
            //explode
            character.style.backgroundcolor = "#fb00ff";
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;
    }
}