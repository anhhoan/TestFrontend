function shortUrl(){
    var urlInput = document.getElementById("url-input");
    var listLink = document.querySelector("div#links");
    var errorMs = document.getElementById("errorMessage");
    listLink.style.display = "block"
    if(urlInput.value.trim().length === 0){
       errorMs.textContent ="Please add a link"
       errorMs.style.display= "block"
       errorMs.style.fontSize="small"
       errorMs.style.color = "hsl(0, 87%, 67%)"
       urlInput.style.border ="1px solid red"

    }
    else{
        errorMs.style.display= "none"
    }
}
function copyClick(event){
    var button = event.currentTarget;
    // var btnCopy = document.querySelector("button")
    button.style.backgroundColor = "black"
    button.innerText = 'Copied!';
}
