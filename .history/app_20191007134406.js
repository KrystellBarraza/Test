// 1. Checkbox listens to mouse event change (e), causes other checkbox to set to same state. 
$("#check-top").on("change", function(e){
    $("#check-bottom").prop("checked", this.checked).checkboxradio("refresh");
});

$("#check-bottom").on("change", function(e){
   $("#check-top").prop("checked", this.checked).checkboxradio("refresh");
});

// 2.  
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

}, second)