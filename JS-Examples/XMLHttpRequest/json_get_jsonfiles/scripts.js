//ADD Event Listener  CLİCK
const reload = document.querySelector('#getProduct');


// WARNING: For POST requests, body is set to null by browsers.
var data = "{\r\n    \"Parameters\": {\r\n        \"HOTELID\": 22903\r\n    },\r\n    \"Action\": \"Function\",\r\n    \"Object\": \"FN_EASYPMS_HOTSPOT_GUESTS\",\r\n    \"OrderBy\": [\r\n        {\r\n            \"Column\": \"null\",\r\n            \"Direction\": null\r\n        }\r\n    ],\r\n    \"Paging\": {\r\n        \"ItemsPerPage\": 100,\r\n        \"Current\": 1\r\n    },\r\n    \"Where\": []\r\n}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://4001.hoteladvisor.net");

xhr.send(data);

reload.addEventListener('click',loadExp);
function loadExp(){

    var loadgif=document.querySelector('#loading');
    loadgif.style.display='block';

    const xhr=new XMLHttpRequest();
    xhr.open('GET','product.json',true);
    setTimeout(()=>{
        xhr.onload=function(){
            loadgif.style.display='none';

            if (this.status===200){
                let product=JSON.parse(this.responseText)
                let html="";

                product.forEach(product => {
                    html +=`<tr> 
                    <td> ${product.productName}</td>
                    <td> ${product.price}</td>
                    <td> ${product.amount}</td>
                    <td> ${product.vat}</td>
                    </tr>`;

                });
                    document.querySelector("#Product").innerHTML=html;
            }

        }
        xhr.send();
    },1500);

}
