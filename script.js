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
            timeBlock.classList.add( "present");
        } else {
            timeBlock.classList.add("future");
        }
        const hourLabel = document.createElement("div");
        hourLabel.textContent = `${hour}:00`;

        const eventInput = document.createElement("textarea");
        eventInput.setAttribute("data-hour", hour);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        const savedEvent = localStorage.getItem(`event_${hour}`);
        if (savedEvent) {
            eventInput.value = savedEvent;
        }

        // Save event to local storage when the "Save" button is clicked
        saveButton.addEventListener("click", function () {
            const eventText = eventInput.value;
            localStorage.setItem(`event_${hour}`, eventText);
        });

        timeBlock.appendChild(hourLabel);
        timeBlock.appendChild(eventInput);
        timeBlock.appendChild(saveButton);

        timeBlocksElement.appendChild(timeBlock);
    }
});