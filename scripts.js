const boxHolder = document.querySelector("#box-holder");
const button = document.querySelector("#newbtn");
const rgbBtn = document.querySelector("#rgbMode");
const newColorBtn = document.querySelector("#newColor");
const Mode2btn = document.querySelector("#Mode2");

let color = "blue";
let rgbMode = false;
let mode2 = false;
let box = document.createElement("div");
box.classList.add("boxes");


rgbBtn.addEventListener("mousedown", (e) => {
    

    if (e.button == 0) {
        rgbMode = true;
    } else if (e.button == 2) {
        rgbMode = false;
        color = "blue";
    }
    console.log(`rgbMode is now set to ${rgbMode}`);
})

Mode2btn.addEventListener("mousedown", (e) => {

    if (e.button == 0) {
        rgbMode = false;
        mode2 = true;
    } else if (e.button == 2) {
        mode2 = false;
    }
    console.log(`more colors mode is now set to ${mode2}`);
})

newColorBtn.addEventListener("click", () => {
    rgbMode = false;
    color = prompt("Enter a new color", "blue");
})

function randomColor() {
    let ranNum = Math.floor(Math.random() * 3) + 1;

    if (ranNum == 3) {
        color = "red";
    } else if (ranNum == 2) {
        color = "green";
    } else {
        color = "blue";
    }
}

function randomColor2() {
    let ranNum = Math.floor(Math.random() * 8) + 1;

    const palette = ["#FF2A6D", "#FF5E00", "#FFAA00", "#05D9E8", "#0056FF", "#A100FF", "#00FF66", "#FF6B6B"];
    color = palette[ranNum];
}

function setNewSize() {
    let newSize = +prompt("Enter new size: ", "12");

    if (newSize > 100) {
        alert("Enter a value less than 100");
    } else {
    
    boxHolder.textContent = "";

    makeBox(newSize);
    }
}

button.addEventListener("click", setNewSize);

function makeBox(max) {
    let basis = 100 / max; //calculate the new flexBasis

    for (let i = 0; i < (max * max); i++) {

    const clone = box.cloneNode(true);

    clone.style.flexBasis = basis + "%";
    clone.id = `clone-${i}`;

    boxHolder.appendChild(clone);
}
}



boxHolder.addEventListener("mouseover", (e) => {
    if (rgbMode == true) {
        randomColor();
    } else if (mode2 == true) {
        rgbMode = false;
        randomColor2();
    }
    e.target.style.backgroundColor = color;
})