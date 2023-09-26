document.addEventListener("DOMContentLoaded", function () {
    // Get current date and time
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
     // Display the current date in the header
     const currentDayElement = document.getElementById("currentDay");
     currentDayElement.textContent = currentDate.toLocaleDateString();
 
     // Generate time blocks
     const timeBlocksElement = document.getElementById("timeBlocks");
     for (let hour = 9; hour <= 17; hour++) {
        const timeBlock = document.createElement("div");
        timeBlock.classList.add("time-block");

        // Color code time blocks based on past, present, or future
        if (hour < currentHour) {
            timeBlock.classList.add("past");
        } else if (hour === currentHour) {
            timeBlock.classList.add("present");
        } else {
            timeBlock.classList.add("future");
        }
 