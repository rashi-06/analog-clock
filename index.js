setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotate = 30*htime + mtime/2+ stime/120;
    mrotate = 6*mtime + stime/10;
    srotate = 6*stime;
    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;

    
}, 1000);