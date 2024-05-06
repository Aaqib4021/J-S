const addCart=document.getElementById("add-btn")
const inputGiven=document.getElementById("input-fld");

addCart.addEventListener("click",function(){
    let inputValue=inputGiven.value
    console.log(inputValue)
    inputGiven.value=""
})