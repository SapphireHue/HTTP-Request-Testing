console.log("HI")

function request(method, url){
    const XHR = new XMLHttpRequest();
    XHR.open(method, url)
    XHR.send()
    XHR.onload = function(){console.log(XHR.responseText)}

}
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader if you need headers

request("GET", "https://httpbin.org/get")
request("POST", "https://httpbin.org/post")
