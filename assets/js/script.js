$(document).ready(function() {
        var options = {weekday: "long", month: "long", day: "numeric"};
        var today = new Date();
        var currentDay= today.toLocaleDateString("en-US", options);
        //display the current time
        $("#currentDay").append(currentDay);

    var timeTracker = function() {
        //get current hour
        var currentHour = new Date().getHours();
        // console.log(currentHour);

        //loops through time block
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            // console.log(currentHour, blockHour);

            //checks if current hour is more than block hour
            if (currentHour > blockHour) {
                $(this).addClass("past");
                $(this).removeClass("present future");
            } 
            //checks if current hour equals block hour
            else if (currentHour === blockHour) {
                $(this).addClass("present");
                $(this).removeClass("past future")
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past present");
            }
        })

    }
    timeTracker();

    //adds click listener function to saveBtn 
     $(".saveBtn").on("click", function(){
            // console.log("You clicked me");
            // console.log(this);
            var text = $(this).siblings(".description").val(); //assigns text to the value entered in the textarea element
            var time = $(this).parent().attr("id"); //assigns time to the id name in saveBtn's parent div
            // console.log(text, time);

            //informs users that input is needed in the textarea before saving
            // if(text === ""){
            //     alert("Please enter a task before submitting.");
            // } 
            // else {
            localStorage.setItem(time, text); //sets time and text items in localStorage
            // }
        })
    
    //returns value of the localStorage item
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour 17 .description").val(localStorage.getItem("hour17"));
})