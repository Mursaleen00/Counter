
let text = document.getElementById("text");

var i = 1;

function minus() {
    // i = -1;
    text.innerHTML = --i;
}

function plus() {
    // i = 1;
    text.innerHTML = ++i;
};


function reload() {
    i = 0
    text.innerHTML = "Counter";
};

