
function updateClock() {
    let now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        let week = ['Понедельник', 'Вторник',' Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрессение']
        let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
        let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
        for(let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
};

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
};


// window.onload = function() {
//     window.setInterval(function() {
//         let date = new Date();

//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let Year = date.getFullYear();
//         let month = (date.getMonth() + 1);
//         let day = date.getDay();
//         let dnum = date.getDate();


//         if (hours < 10) hours = "0" + hours;
//         if (minutes < 10) minutes = "0" + minutes;
//         if (seconds < 10) seconds = "0" + seconds;
//         if (day < 10) day = "0" + day;
//         if (month < 10) month = "0" + month;


//         let clock = hours + ":" + minutes + ":" + seconds;
//         let fullDate = dnum + ", " + month + ", " + Year + ", " + day;
//         document.getElementById("clock").innerHTML = clock;
//         document.getElementById("fullDate").innerHTML = fullDate;

        // const today = new Date();
        // const dayNumber = today.getDate();
        // const year = today.getFullYear();
        // const dayName = today.toLocaleString("default", {weekday: "long"});
        // const monthName = today.toLocaleString("default", {month: "short"});

        // document.querySelector(".month__name").innerHTML = monthName;
        // document.querySelector(".day__name").innerHTML = dayName;
        // document.querySelector(".day__number").innerHTML = dayNumber;
        // document.querySelector(".year").innerHTML = year;


//     }, 1000);
// };

