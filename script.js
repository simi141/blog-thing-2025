let name = "Simran";
let age = 14;
let likesSushi = false;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Simran");
function saveName() {
    let newName = document.getElementById("greeter").value;
    document.getElementById("username").textContent = newName;  // text feld value from the user
    document.getElementById("greeter").value = "";
}

