// 1. Checkbox listens to mouse event change (e), causes other checkbox to set to same state. 
$("#check-top").on("change", function(e){
    $("#check-bottom").prop("checked", this.checked).checkboxradio("refresh");
});

$("#check-bottom").on("change", function(e){
   $("#check-top").prop("checked", this.checked).checkboxradio("refresh");
});

// 2. 