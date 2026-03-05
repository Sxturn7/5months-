var start = new Date(2025, 9, 5)

function timer(){

var t = new Date() - start

var d = Math.floor(t/1000/60/60/24)
var h = Math.floor(t/1000/60/60%24)
var m = Math.floor(t/1000/60%60)
var s = Math.floor(t/1000%60)

document.getElementById("d").innerHTML=d
document.getElementById("h").innerHTML=h
document.getElementById("m").innerHTML=m
document.getElementById("s").innerHTML=s

}

setInterval(timer,1000)