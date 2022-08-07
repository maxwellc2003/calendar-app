savedTasks = []
var currentHour = moment().hour()

var createTimeBlock = function (hour) {
    var rowEl = document.createElement("div")
    var hourEl = document.createElement("h2")
    var descriptionEl = document.createElement("textarea")
    var buttonEl = document.createElement("button")

    rowEl.classList.add("row", "time-block")
    hourEl.classList.add("col-2", "hour")
    descriptionEl.classList.add("col", "description")
    buttonEl.classList.add("col-2", "saveBtn")

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

    var text = descriptionEl.value;

    buttonEl.addEventListener("click", function () {
        var data = text
        localStorage.setItem("input", input);
        console.log("text saved")
    }, false);
}

for (var hour = 8; hour <= 24; hour++) {
    createTimeBlock(hour)
}
