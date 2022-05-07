var timelineSelector;
timelineSelector = document.querySelectorAll('.t-selector');

timelineSelector.forEach((timeline) => timeline
                .addEventListener('click', timelineSelection));


function timelineSelection(e){
    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");

    var selectedTimeline = e.target.textContent.toLowerCase();
    console.log(selectedTimeline);

    //hide all timelines then show selected one
    document.querySelectorAll(".daily, .weekly, .monthly")
            .forEach((element) => element.style.display = 'none');
    document.querySelectorAll("."+selectedTimeline)
            .forEach((element) => element.style.display = 'block');
}