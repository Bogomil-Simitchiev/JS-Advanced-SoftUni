function attachEventsListeners() {

    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    let inputDaysElement = document.getElementById('days');
    let inputHoursElement = document.getElementById('hours');
    let inputMinutesElement = document.getElementById('minutes');
    let inputSecondsElement = document.getElementById('seconds');

    function daysToHours(days) {
        return days * 24;
    }
    function daysToMinutes(days) {
        return days * 1440;
    }
    function daysToSeconds(days) {
        return days * 86400;
    }
    // ---
    function hoursToDays(hours) {
        return hours / 24;
    }
    function hoursToMinutes(hours) {
        return hours * 60;
    }

    function hoursToSeconds(hours) {
        return hours * 3600;
    }
    //---
    function minutesToDays(minutes) {
        return minutes / 1440;
    }
    function minutesToHours(minutes) {
        return minutes / 60;
    }
    function minutesToSeconds(minutes) {
        return minutes * 60;
    }
    //---
    function secondsToDays(seconds) {
        return seconds / 86400;
    }
    function secondsToHours(seconds) {
        return seconds / 3600;
    }
    function secondsToMinutes(seconds) {
        return seconds / 60;
    }


    daysBtnElement.addEventListener('click', () => {

        let hoursResult = daysToHours(inputDaysElement.value);
        inputHoursElement.value = hoursResult;

        let minutesResult = daysToMinutes(inputDaysElement.value);
        inputMinutesElement.value = minutesResult;

        let secondsResult = daysToSeconds(inputDaysElement.value);
        inputSecondsElement.value = secondsResult;
    })
    hoursBtnElement.addEventListener('click', () => {

        let daysResult = hoursToDays(inputHoursElement.value);
        inputDaysElement.value = daysResult;

        let minutesResult = hoursToMinutes(inputHoursElement.value);
        inputMinutesElement.value = minutesResult;

        let secondsResult = hoursToSeconds(inputHoursElement.value);
        inputSecondsElement.value = secondsResult;
    })
    minutesBtnElement.addEventListener('click', () => {

        let daysResult = minutesToDays(inputMinutesElement.value);
        inputDaysElement.value = daysResult;

        let hoursResult = minutesToHours(inputMinutesElement.value);
        inputHoursElement.value = hoursResult;

        let secondsResult = minutesToSeconds(inputMinutesElement.value);
        inputSecondsElement.value = secondsResult;
    })
    secondsBtnElement.addEventListener('click', () => {

        let daysResult = secondsToDays(inputSecondsElement.value);
        inputDaysElement.value = daysResult;

        let hoursResult = secondsToHours(inputSecondsElement.value);
        inputHoursElement.value = hoursResult;

        let minutesResult = secondsToMinutes(inputSecondsElement.value);
        inputMinutesElement.value = minutesResult;
    })

}