function func() {
    alert("Page is loaded.");
}

function fokus(x) {
    x.style.background = "yellow";
}

function blurx(y) {
    y.style.background = "magenta";
}

function funct() {
    alert("I'm an alert box!");
}

function fun() {
    confirm("I'm a confirm box!");
}

function func() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML = "Hello " + person;
    }
}