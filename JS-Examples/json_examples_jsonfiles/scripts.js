document.querySelector("#getProduct").addEventListener('click',loadExp);
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
