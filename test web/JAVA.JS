let N = document.getElementById("N");
let M = document.getElementById("M");
let submit = document.getElementById("submit");
let iris = document.getElementById("iris");
let yes; // Define variable yes
let down = document.getElementById("down")

// Event handler for submit button click
submit.onclick = () => {
    if (N.value === "") {
        yes = false;
        N.style.border = "solid 2.5px red"; // Set border style directly
        M.style.border = "solid 2.5px red"; // Set border style directly (lowercase 'red')
        N.classList.add("test");
        M.classList.add("test");
    } else {
        yes = true;
        console.log("good");
    }
};

// Event handler for N input keyup
N.onkeyup = () => {
    iris.classList.add("down"); // Add 'down' class to iris element
};

// Check the value of yes
if (yes === true) {
    console.log("Statement is true"); // Example log message for clarity
}


function handleblur() {
    down.classList.remove("down")
}
function handlekeydown() {
    down.classList.add("down")
}