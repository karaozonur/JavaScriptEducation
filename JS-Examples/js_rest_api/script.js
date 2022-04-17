document.querySelector("#getOne").addEventListener('click',getOne);

document.querySelector("#getALL").addEventListener('click',getAll);
function getOne(){

}

function getAll(){
    var url="https://jsonplaceholder.typicode.com/posts";
    var xhr =new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function(){
        if(this.status===200){
          
            var posts = JSON.parse
            (this.responseText);

            var html="";
            posts.array.array.forEach(posts => {
                html+='<div class="card">${posts.title}<div>';
            });
           
            document.querySelector('#results').innerHTML =html;
        }
    }
    xhr.send();
}

function Ajax(url, cBak) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'JSON';
    xhr.onload = function () {
    if (this.status == 200) {
            var lst = JSON.parse(xhr.responseText);
            console.log("veri alındı... ");
        }
        cBak(lst);
    };
    xhr.send({});
}