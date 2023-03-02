//Constants
const end_date = new Date("03/29/2024"); // after 1 year of the beginning date of the Program 
const _MS_PER_MONTHS = 1000 * 60 * 60 * 24 * 30;
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_HRS = 1000 * 60 * 60;
const _MS_PER_MIN = 1000 * 60 ;
const _MS_PER_SEC = 1000;
// Elements
monthBlock = document.getElementById('month');
dayBlock = document.getElementById('day');
hrsBlock = document.getElementById('hour');
minBlock = document.getElementById('minute');
secBlock = document.getElementById('seconds');


setInterval(() => {
  var curr_date = new Date(); 
  
    let total_time = Math.abs(end_date.getTime() - curr_date.getTime());

    monthBlock.innerHTML = Math.floor(total_time / _MS_PER_MONTHS);
    total_time %= _MS_PER_MONTHS;

    dayBlock.innerHTML = Math.floor(total_time / _MS_PER_DAY);
    total_time %=_MS_PER_DAY;

    hrsBlock.innerHTML = Math.floor(total_time / _MS_PER_HRS);
    total_time %= _MS_PER_HRS;

      minBlock.innerHTML = Math.floor(total_time / _MS_PER_MIN);
    total_time %= _MS_PER_MIN;
    
    secBlock.innerHTML = Math.floor(total_time / _MS_PER_SEC); 

}, 1000);
