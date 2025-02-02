// 1. Checkbox listens to mouse event change (e), causes other checkbox to set to same state. 
$("#check-top").on("change", function(e){
    $("#check-bottom").prop("checked", this.checked).checkboxradio("refresh");
});

$("#check-bottom").on("change", function(e){
   $("#check-top").prop("checked", this.checked).checkboxradio("refresh");
});

// 2. 
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

// Get today's date and time
let now = new Date().getTime();

// Find the distance between now and the count down date
let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);