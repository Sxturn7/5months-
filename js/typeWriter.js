let i = 0

let text1 = "Hey Prozac ❤️"
let text2 = "A small universe from Saturn to you."

function typeWriter(text,id){

if(i < text.length){

document.getElementById(id).innerHTML += text.charAt(i)
i++

}else{

i=0

}

}

setInterval(function(){

if(i < text1.length){
typeWriter(text1,"txt1")
}else{
typeWriter(text2,"txt2")
}

},100)