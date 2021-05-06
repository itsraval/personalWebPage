const base = "main-favicon.png";
const christmas = "christmas-favicon.png";
// hallowen easter

var date = new Date();
var month = date.getMonth();

if(month == 12){
    setFavicon(christmas);
    setLogo(christmas);
}

function setFavicon(picName){
    var favicon = document.querySelector("link[rel~='icon']");
    var href = favicon.href;
    var url = href.substring(0, href.lastIndexOf('/') + 1) + picName;
    favicon.href = url;
}

function setLogo(picName){
    var logo = document.getElementById("logo");
    if (logo != null){
        var src = logo.src;
        var url = src.substring(0, src.lastIndexOf('/') + 1) + picName;
        logo.src = url;
    }
}
