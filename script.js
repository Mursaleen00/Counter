
let text = document.getElementById("text");

var i = 0;

function minus(e) {
    text.innerHTML = --i;
}

function plus(e) {
    text.innerHTML = ++i;
};


function reload(e) {
    i = 0
    text.innerHTML = "Counter";
};

