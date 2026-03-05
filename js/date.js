var startDate = new Date("October 5, 2025 00:00:00")

function updateTimer(){

var now = new Date()

var diff = now - startDate

var days = Math.floor(diff / (1000 * 60 * 60 * 24))
var hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
var minutes = Math.floor((diff / (1000 * 60)) % 60)
var seconds = Math.floor((diff / 1000) % 60)

document.getElementById("d").innerHTML = days
document.getElementById("h").innerHTML = hours
document.getElementById("m").innerHTML = minutes
document.getElementById("s").innerHTML = seconds

}

updateTimer()

setInterval(updateTimer,1000)
