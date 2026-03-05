let i = 0
let ok = 0

let text1 = "Hey Prozac ❤️"
let text2 = "A small universe from Saturn to you."

function typeWriter(text,id){

if(i < text.length){

document.getElementById(id).innerHTML += text.charAt(i)
i++

}else{

i = 0
ok++

}

}

setInterval(function(){

if(ok == 0){
typeWriter(text1,"txt1")
}
else if(ok == 1){
typeWriter(text2,"txt2")
}

},100)
