var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");

var getCurrentDay = function() {
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today = new Date();
    currentDayEl.textContent = today.toLocaleDateString("en-US", options);
    currentDayEl.appendChild(today);
}

getCurrentDay();