$(document).ready(function () {
    $('input').change(function() {
    var u = URL.createObjectURL(this.files[0]);
    var img = new Image;     
    img.onload = function() {
        alert(img.width);
        
    };      
    img.src = u;
    });
    });