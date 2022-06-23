var date = new Date();

const base = "favicon.png"
const carnival = "favicon-carnival.png"
const christmas = "favicon-christmas.png"
const cincodemayo = "favicon-cincodemayo.png"
const easter = "favicon-easter.png"
const halloween = "favicon-halloween.png"
const stpatric = "favicon-stpatric.png"

if(compareDate(12)){
    setFavicon(christmas)
}else if(compareDateDay(3, 17)){
    setFavicon(stpatric)
}else if(compareDateDay(5, 5)){
    setFavicon(cincodemayo)
}else if(compareDateDay(10, 31)){
    setFavicon(halloween)
}else if(isEaster()){
    setFavicon(easter)
}else if(isCarnival()){
    setFavicon(carnival)
}else{
    setFavicon(base)
}

function setFavicon(picName){
    var favicon = document.querySelector("link[rel~='icon']");
    var href = favicon.href;
    var url = href.substring(0, href.lastIndexOf('/') + 1) + picName;
    favicon.href = url;
}

function compareDateDay(mm, gg){
    if(date.getMonth() == mm){
        if(date.getDay() >= gg-7 && date.getDay <= gg+7){
            return true
        }
    }
    return false
}

function compareDate(mm){
    if(date.getMonth() == mm){
        return true
    }
    return false
}

function isCarnival(){
    var easter_date = Easter(date.getFullYear()).split(".")
    var gg = parseInt(easter_date[1])
    var mm = parseInt(easter_date[0])+1
    var eastarDate = new Date(date.getFullYear(), mm, gg)

    eastarDate.setDate(eastarDate.getDate() - 47);

    return compareDateDay(eastarDate.getMonth(), eastarDate.getDay())
}

function isEaster(){
    var easter_date = Easter(date.getFullYear()).split(".")
    var gg = parseInt(easter_date[1])
    var mm = parseInt(easter_date[0])

    return compareDate(mm, gg)
}

function Easter(Y) {
    var C = Math.floor(Y/100);
    var N = Y - 19*Math.floor(Y/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40)/44);
    var D = L + 28 - 31*Math.floor(M/4);

    return padout(M) + '.' + padout(D);
}

function padout(number) { return (number < 10) ? '0' + number : number; }