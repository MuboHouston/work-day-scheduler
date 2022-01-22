var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");
var hourEl = document.getElementById("hour");

$(document).ready(function() {
        var options = { weekday: 'long', month: 'long', day: 'numeric' };
        var today = new Date();
        currentDayEl.textContent = today.toLocaleDateString("en-US", options);
        // currentDayEl.appendChild(today);
    
})

var timeTracker = function() {
    var currentHour = new Date().getHours();
    // console.log(currentHour);

    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        // console.log(currentHour, blockHour);

        if (currentHour > blockHour) {
            $(this).addClass("future bg-success");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } 
        else if (currentHour === blockHour) {
            $(this).addClass("present bg-danger");
            $(this).removeClass("past future")
        }
        else {
            $(this).addClass("past bg-secondary-50");
            $(this).removeClass("present future");
        }
    })

}
 timeTracker();