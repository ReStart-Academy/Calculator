var calculator = document.querySelector(".calculator")
var btn = document.querySelectorAll(".btn")
var display = document.querySelector("#display")
var toggle_btn = document.querySelector("#toggle")
var title = document.querySelector("h1")


function insert(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearall() {
    document.getElementById("display").value = "";
}
function calsi() {
    var uservalue = document.getElementById("display").value;
    var result = eval(uservalue);
    document.getElementById("display").value = result;
}



toggle_btn.addEventListener("change", () => {
    if (toggle_btn.checked) {
        calculator.style.backgroundColor = "whitesmoke";
        calculator.style.transition = "0.8s";
        btn.forEach(function (b) {
            b.style.backgroundColor = "black";
            b.style.color = "white";
        })
        display.style.backgroundColor = "black"
        display.style.color = "white";
        title.style.color = "black";
        document.querySelector("body").style.background = "black";
    }
    else {
        calculator.style.backgroundColor = "";
        btn.forEach(function (b) {
            b.style.backgroundColor = "";
            b.style.color = "";
        })
        display.style.backgroundColor = ""
        display.style.color = "";
        title.style.color = ""
        document.querySelector("body").style.background = "";
    }
})



