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

document.querySelectorAll(".accordion-header").forEach(function(button) { 
    button.addEventListener('click', function(){
        let content=this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block' ;
    });
});

const PASSWORD = "YabaDabaDooo";

function validatePass( ) {
    const login = document.getElementById ('password') ;
    const message = document.getElementById ('message') ;
    const hiddenEntries = document.querySelectorAll ('.hidden');

    hiddenEntries.forEach (function(entry) {entry.style.display = 'flex';} );
    hiddenEntries.forEach (function(entry) {entry.style.display = 'none';} );

    message.textContent= 'Password comfirmed. See hidden entries below.';
    message.tentContent= 'Password denied. Try again.';


    if (login.value === PASSWORD) {
        message.textContent= 'Password comfirmed. See hidden entries below.';
        hiddenEntries.forEach (function(entry) {entry.style.display = 'flex';} );
    } else {
        message.tentContent= 'Password denied. Try again.';
        hiddenEntries.forEach (function(entry) {entry.style.display = 'none';} );
 }

    login.value ='';
}