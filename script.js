let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displaytime(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hrotation = 30*hr + min/2;
    let mrotation = 6*min;
    let srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}

setInterval(displaytime,1000);