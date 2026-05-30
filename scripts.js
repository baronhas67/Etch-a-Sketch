const boxHolder = document.querySelector("#box-holder");
const button = document.querySelector("#newbtn");

let box = document.createElement("div");
box.classList.add("boxes");

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
    e.target.style.backgroundColor = "blue";
})