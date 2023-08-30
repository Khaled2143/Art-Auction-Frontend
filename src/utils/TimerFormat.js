
function formatRemainingTime(remainingTimeInSeconds) {
    const days = Math.floor(remainingTimeInSeconds / (60 * 60 * 24));
    const hours = Math.floor((remainingTimeInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTimeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(remainingTimeInSeconds % 60);

    // Display '0'+value if value is less than 10
    const daysDisplay = days > 0 ? (days < 10 ? "0" + days : days) + (days === 1 ? " day, " : " days, ") : "";
    const hoursDisplay = hours > 0 ? (hours < 10 ? "0" + hours : hours) : "";
    const minutesDisplay = minutes > 0 ? (minutes < 10 ? "0" + minutes + ':' : minutes + ':') : "00:";
    const secondsDisplay = seconds > 0 ? (seconds < 10 ? "0" + seconds : seconds) : "00";

    return daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
}

export default formatRemainingTime;