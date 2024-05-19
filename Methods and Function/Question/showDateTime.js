const showDateTime = () => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString();
    let day = now.getDate().toString();
    let minute = now.getMinutes().toString();
    let hour = now.getHours().toString()

    month = month.length == 1 ? "0".concat(month): month;
    minute = minute.length == 1? "0".concat(minute) : minute;
    hour = hour.length == 1? "0".concat(hour) : hour;

    let today = day.concat("/").concat(month).concat("/").concat(year).concat(" ").concat(hour).concat(":").concat(minute);


    return today;
}

console.log(showDateTime());
