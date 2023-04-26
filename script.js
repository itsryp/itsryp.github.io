function makels(){
    let url = document.getElementById('url')
    url.value = "loadstring(game:HttpGet('" + url.value + "'))()"
}

function copyls(){
    let url = document.getElementById('url')
    navigator.clipboard.writeText(url.value)
}

function clearls(){
    let url = document.getElementById('url')
    url.value = ''
}