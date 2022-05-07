var timelineSelector;
timelineSelector = document.querySelectorAll('.t-selector');

timelineSelector.forEach((timeline) => timeline
                .addEventListener('click', timelineSelection));


function timelineSelection(e){
    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");

    var selectedTimeline = e.target.textContent.toLowerCase();

    //hide all timelines then show selected one
    document.querySelectorAll(".daily, .weekly, .monthly")
            .forEach((element) => element.style.display = 'none');
    document.querySelectorAll("."+selectedTimeline)
            .forEach((element) => element.style.display = 'block');
}

//read JSON
fetch("data.json").then(response => {
    return response.json();})
    .then(data => loadData(data));

//load json and update data on DOM
function loadData(data) {
    var timeData = data;

    for(const key in cardIndex){
        for(const timeFrame of ['daily', 'weekly', 'monthly']){
            //getting tags containing hours
            var timeHrsClass = document.querySelectorAll(`.${cardIndex[key]} .time-hours.${timeFrame} span`);
            var lastTimeHrsClass = document.querySelectorAll(`.${cardIndex[key]} .last-time-hours.${timeFrame}  span`);
            
            // converting NodeList to arrays for easy manipulation
            var timeHrsArray = Array.from(timeHrsClass);
            var lastTimeHrsArray = Array.from(lastTimeHrsClass);
            //getting required data from JSON file
            var jsonCurrTime = timeData[key]['timeframes'][timeFrame]['current'];
            var jsonPrevTime = timeData[key]['timeframes'][timeFrame]['previous'];

            //updating data
            timeHrsArray[0].textContent = jsonCurrTime;
            lastTimeHrsArray[0].textContent = jsonPrevTime;
        }
    }
}

//names of categories as per html classes for access and updating
const cardIndex = {
    0: "work-card",
    1: "play-card",
    2: "study-card",
    3: "exercise-card",
    4: "social-card",
    5: "self-care-card"
}