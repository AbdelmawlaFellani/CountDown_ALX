const end_date = new Date("12/15/2023");
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_MONTHS = 1000 * 60 * 60 * 24 * 30;
setInterval(() => {
  var curr_date = new Date();
  document.getElementById("count").innerHTML =
    Math.ceil(
      Math.abs(end_date.getTime() - curr_date.getTime()) / _MS_PER_DAY
    ) + " Days";
}, 1000);
