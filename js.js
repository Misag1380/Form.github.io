let I_1elem = document.getElementById("i_1")
let I_2elem = document.getElementById("i_2")
let leftElem = document.getElementById("leftBox")
let logintElem = document.getElementById("login")

I_1elem.addEventListener("click",function(){
       leftElem.style.display = "none"
       logintElem.style.display = "flex"

})
I_2elem.addEventListener("click", function(){
    leftElem.style.display = "block"
    logintElem.style.display = "none"
})