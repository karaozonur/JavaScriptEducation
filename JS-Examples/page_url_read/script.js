window.addEventListener('load',getURL);
function getURL() {

     var readhref = window.location.href; // http://127.0.0.1:5500/JS-Examples/page_url_read/index.html
     document.querySelector("#readhref").innerHTML=hostname;
     var hostname = window.location.hostname; // 127.0.0.1
     document.querySelector("#hostname").innerHTML=hostname;
     var pathname = window.location.pathname; // /JS-Examples/page_url_read/index.html
     document.querySelector("#pathname").innerHTML=pathname;
     var protocol = window.location.protocol; // http:
     document.querySelector("#protocol").innerHTML=protocol;
     var origin = window.location.origin;http:// 127.0.0.1:5500 // Bir URL'nin protokolünü, ana bilgisayar adını ve bağlantı noktası numarasını döndürür
     document.querySelector("#origin").innerHTML=origin;
     var port = window.location.port; // :5500 Bir URL'nin bağlantı noktası numarasını ayarlar veya döndürür
     document.querySelector("#port").innerHTML=port;
 }