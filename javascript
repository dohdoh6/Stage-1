// Function to update the current day of the week and UTC time
function updateDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();

    document.getElementById('currentDayOfTheWeek').textContent = `Current Day: ${currentDayOfWeek}`;
    document.getElementById('currentUTCTime').textContent = `Current UTC Time: ${currentUTCTime} ms`;
}

// Update date and time initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
