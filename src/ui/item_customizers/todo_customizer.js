/* Code accidentally added to list customizer meant for here */

const createScheduleDateInput = function() {
    let scheduleDate = document.createElement('input');
    scheduleDate.setAttribute('type', 'date');
    let scheduleDateID = 'schedule-date';
    scheduleDate.setAttribute('id', scheduleDateID);

    return scheduleDate;
};

let scheduleDateInput = createScheduleDateInput();
let scheduleDateLabel = document.createElement('label');
scheduleDateLabel.textContent = 'Set schedule date: '; 

giveLabelToInput(scheduleDateLabel, scheduleDateInput);

/* Code accidentally added to list customizer meant for here */