
//event | function
 window.addEventListener('load',loadData);

// function LoadExp(){
//     var url="https://jsonplaceholder.typicode.com/posts";
//     var xhr =new XMLHttpRequest();
//     xhr.open('GET',url,true);
//     xhr.onload= function(){
//         if(this.status===200){
//             var post =JSON.parse(this.responseText);
//             var html="";
//             post.forEach(post => {
//                 html+=`
//                 <tr>
//                     <td>${post.title} </td>
//                 </tr>
//                 `;

//             });
//             document.querySelector("#Product").innerHTML=html;
//         }
//     }
//     xhr.send();
// }

function loadData(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:"GET",
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        success:function(result){
            var html ='';
            $.each(result,function(key,item){
                html += '<tr>';
                html += '<td>'+item.title+'</td>';
                html += '</tr>';

            });
            $("#Product").html(html);

        },
        error:function(errormessage){
            console.log("Error Message:" + errormessage);

        }
    })
}