
const reload =document.querySelector("#btnreload");
reload.addEventListener('click',LoadExp2);
function LoadExp2(){
    const xhr = new XMLHttpRequest()

    // listen for `load` event
    xhr.onload = () => {
      // print JSON response
      if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.responseText)
        console.log(response)
      }
    }
    
    // create a JSON object
    const json = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
    
    // open request
    xhr.open('POST', 'https://reqres.in/api/login')
    
    // set `Content-Type` header
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    // send rquest with JSON payload
    xhr.send(JSON.stringify(json))
}

