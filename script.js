document.addEventListener("DOMContentLoaded", function () {
 
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const isAM = currentHour < 12;
    const amPM = isAM ? "AM" : "PM";

    
    const currentDayElement = document.getElementById("currentDay");
    currentDayElement.textContent = currentDate.toLocaleDateString() + " " + currentHour + ":00 " + amPM;

   
    const timeBlocksElement = document.getElementById("timeBlocks");

    for (let hour = 9; hour <= 17; hour++) {
        const timeBlock = document.createElement("div");
        timeBlock.classList.add("time-block");

      
        if (hour < currentHour) {
            timeBlock.classList.add("past");
        } else if (hour === currentHour) {
            timeBlock.classList.add("present");
        } else {
            timeBlock.classList.add("future");
        }

       
        const displayHour = hour > 12 ? hour - 12 : hour;
        const amPM = hour >= 12 ? "PM" : "AM";

        const hourLabel = document.createElement("div");
        hourLabel.textContent = `${displayHour}:00 ${amPM}`;

        const eventInput = document.createElement("textarea");
        eventInput.setAttribute("data-hour", hour);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

     
        const savedEvent = localStorage.getItem(`event_${hour}`);
        if (savedEvent) {
            eventInput.value = savedEvent;
        }

      
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