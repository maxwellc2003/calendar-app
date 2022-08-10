var currentHour = moment().hour();
var currentDay = moment().format('YYYY-MM-DD')

var currentDayEl = document.getElementById("currentDay")
currentDayEl.textContent = currentDay

var createTimeBlock = function (hour) {
    var rowEl = document.createElement("div")
    var hourEl = document.createElement("h2")
    var descriptionEl = document.createElement("textarea")
    var buttonEl = document.createElement("button")

    rowEl.classList.add("row", "time-block")
    hourEl.classList.add("col-2", "hour")
    descriptionEl.classList.add("col", "description", "time" + hour)
    buttonEl.classList.add("col-2", "saveBtn")
    buttonEl.setAttribute("id", hour);

    if (hour > currentHour) {
        descriptionEl.classList.add("future")
    }
    else if (hour < currentHour) {
        descriptionEl.classList.add("past")
    }
    else if (hour == currentHour) {
        descriptionEl.classList.add("present")
    }

    hourEl.textContent = hour + ":00"
    descriptionEl.value = ""
    descriptionEl.placeholder = "To do"
    buttonEl.textContent = "🔓︎"

    rowEl.append(hourEl, descriptionEl, buttonEl)
    document.querySelector(".container").append(rowEl)
}

for (var hour = 8; hour <= 22; hour++) {
    createTimeBlock(hour)
}

// AreaInput Variables
var textArea8Input
var textArea9Input
var textArea10Input
var textArea11Input
var textArea12Input
var textArea13Input
var textArea14Input
var textArea15Input
var textArea16Input
var textArea17Input
var textArea18Input
var textArea19Input
var textArea20Input
var textArea21Input
var textArea22Input

if (hour = 22) {
    textArea8Input = document.querySelector(".time8")
    textArea9Input = document.querySelector(".time9")
    textArea10Input = document.querySelector(".time10")
    textArea11Input = document.querySelector(".time11")
    textArea12Input = document.querySelector(".time12")
    textArea13Input = document.querySelector(".time13")
    textArea14Input = document.querySelector(".time14")
    textArea15Input = document.querySelector(".time15")
    textArea16Input = document.querySelector(".time16")
    textArea17Input = document.querySelector(".time17")
    textArea18Input = document.querySelector(".time18")
    textArea19Input = document.querySelector(".time19")
    textArea20Input = document.querySelector(".time20")
    textArea21Input = document.querySelector(".time21")
    textArea22Input = document.querySelector(".time22")

    var button8El = document.getElementById("8")
    button8El.addEventListener("click", function () {
        localStorage.setItem("8", textArea8Input.value)
    });

    var button9El = document.getElementById("9")
    button9El.addEventListener("click", function () {
        localStorage.setItem("9", textArea9Input.value)
    });

    var button10El = document.getElementById("10")
    button10El.addEventListener("click", function () {
        localStorage.setItem("10", textArea10Input.value)
    });

    var button11El = document.getElementById("11")
    button11El.addEventListener("click", function () {
        localStorage.setItem("11", textArea11Input.value)
    });

    var button12El = document.getElementById("12")
    button12El.addEventListener("click", function () {
        localStorage.setItem("12", textArea12Input.value)
    });

    var button13El = document.getElementById("13")
    button13El.addEventListener("click", function () {
        localStorage.setItem("13", textArea13Input.value)
    });

    var button14El = document.getElementById("14")
    button14El.addEventListener("click", function () {
        localStorage.setItem("14", textArea14Input.value)
    });

    var button15El = document.getElementById("15")
    button15El.addEventListener("click", function () {
        localStorage.setItem("15", textArea15Input.value)
    });

    var button16El = document.getElementById("16")
    button16El.addEventListener("click", function () {
        localStorage.setItem("16", textArea16Input.value)
    });

    var button17El = document.getElementById("17")
    button17El.addEventListener("click", function () {
        localStorage.setItem("17", textArea17Input.value)
    });

    var button18El = document.getElementById("18")
    button18El.addEventListener("click", function () {
        localStorage.setItem("18", textArea18Input.value)
    });

    var button19El = document.getElementById("19")
    button19El.addEventListener("click", function () {
        localStorage.setItem("19", textArea19Input.value)
    });

    var button20El = document.getElementById("20")
    button20El.addEventListener("click", function () {
        localStorage.setItem("20", textArea20Input.value)
    });

    var button21El = document.getElementById("21")
    button21El.addEventListener("click", function () {
        localStorage.setItem("21", textArea21Input.value)
    });

    var button22El = document.getElementById("22")
    button22El.addEventListener("click", function () {
        localStorage.setItem("22", textArea22Input.value)
    });
}

for (var i = 0; i <= localStorage.length; i++) {
    if ("time" + localStorage.key(i) == "time8") {
        textArea8Input.value = localStorage.getItem("8")
    }
    if ("time" + localStorage.key(i) == "time9") {
        textArea9Input.value = localStorage.getItem("9")
    }
    if ("time" + localStorage.key(i) == "time10") {
        textArea10Input.value = localStorage.getItem("10")
    }
    if ("time" + localStorage.key(i) == "time11") {
        textArea11Input.value = localStorage.getItem("11")
    }
    if ("time" + localStorage.key(i) == "time12") {
        textArea12Input.value = localStorage.getItem("12")
    }
    if ("time" + localStorage.key(i) == "time13") {
        textArea13Input.value = localStorage.getItem("13")
    }
    if ("time" + localStorage.key(i) == "time14") {
        textArea14Input.value = localStorage.getItem("14")
    }
    if ("time" + localStorage.key(i) == "time15") {
        textArea15Input.value = localStorage.getItem("15")
    }
    if ("time" + localStorage.key(i) == "time16") {
        textArea16Input.value = localStorage.getItem("16")
    }
    if ("time" + localStorage.key(i) == "time17") {
        textArea17Input.value = localStorage.getItem("17")
    }
    if ("time" + localStorage.key(i) == "time18") {
        textArea18Input.value = localStorage.getItem("18")
    }
    if ("time" + localStorage.key(i) == "time19") {
        textArea19Input.value = localStorage.getItem("19")
    }
    if ("time" + localStorage.key(i) == "time20") {
        textArea20Input.value = localStorage.getItem("20")
    }
    if ("time" + localStorage.key(i) == "time21") {
        textArea21Input.value = localStorage.getItem("21")
    }
    if ("time" + localStorage.key(i) == "time22") {
        textArea22Input.value = localStorage.getItem("22")
    }
}