// 1. Checkbox listens to mouse event change (e), causes other checkbox to set to same state. 
$("#check-top").on("change", function(e){
    $("#check-bottom").prop("checked", this.checked).checkboxradio("refresh");
});

$("#check-bottom").on("change", function(e){
   $("#check-top").prop("checked", this.checked).checkboxradio("refresh");
});

// 2. Define time variables   
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

// Begin countdown from this point in time, lasting 5 days, increments are measured by the second. 
let countDown = new Date().getTime() + ((5)*24*60*60*1000),
    x = setInterval(function() {

      let now = new Date().getTime(),
            distance = countDown - now;

        //Math.floor calculates value, and it is inserted/shown in HTML document 
        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second)

// 3. Calls a message only if check boxes are unchecked
function message() {
    let checkState = document.getElementById('check-top');
    if (checkState).prop('checked', false);
    alert("Please confirm that you would like to recieve a free news letter before proceeding.");
}
