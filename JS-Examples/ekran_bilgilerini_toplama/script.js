window.addEventListener('load',getfunc);
function getfunc() {

    // Ekran Genişliğiniz:
    document.getElementById("kutu1").innerHTML = "Ekran Genişliğiniz: " + screen.width;
    //Ekranın Yüksekliğiniz:
    document.getElementById("kutu2").innerHTML = "Ekran Yüksekliğiniz: " + screen.height;
    //Renk derinliğiniz 
    document.getElementById("kutu3").innerHTML ="Renk derinliğiniz: " + screen.colorDepth; // Screen.pixelDepth Ayn
 }