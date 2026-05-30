const boxHolder = document.querySelector("#box-holder");
const button = document.querySelector("#newbtn");
const rgbBtn = document.querySelector("#toggleColor");

let color = "blue";
let rgbMode = false;
let box = document.createElement("div");
box.classList.add("boxes");


rgbBtn.addEventListener("mousedown", (e) => {
    

    if (e.button == 0) {
        rgbMode = true;
    } else if (e.button == 2) {
        rgbMode = false;
    }
    console.log(`rgbMode is now set to ${rgbMode}`);
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
    }
    e.target.style.backgroundColor = color;
})