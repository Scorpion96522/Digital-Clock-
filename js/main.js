
// function updateClock() {
//     let now = new Date();
//     let dname = now.getDay(),
//         mo = now.getMonth(),
//         dnum = now.getDate(),
//         yr = now.getFullYear(),
//         hou = now.getHours(),
//         min = now.getMinutes(),
//         sec = now.getSeconds(),
//         pe = 'AM';

//         let monts = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
//         let week = ['Понедельник', 'Вторник',' Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрессение']
//         let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
//         let values = [dname, mo, dnum, yr, hou, min, sec, pe];
//         for(let i = 0; i < ids.length; i++)
//         document.getElementById(ids[i]).firstChild.nodeValue = values[i];
// };

// function initClock() {
//     updateClock();
//     window.setInterval("updateClock()", 1);
// };


window.onload = function() {
    window.setInterval(function() {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock;
    }
    );
}