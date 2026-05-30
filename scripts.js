const boxHolder = document.querySelector("#box-holder");
const button = document.querySelector("#newbtn");

let color = "";
let box = document.createElement("div");
box.classList.add("boxes");

function randomColor() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    console.log(ranNum);

    if (ranNum == 3) {
        color = "red";
    } else if (ranNum == 2) {
        color = "green";
    } else {
        color = "blue";
    }
}

function setNewSize() {
    let newSize = +prompt("Enter new size: ", "");

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
    randomColor();
    e.target.style.backgroundColor = color;
})