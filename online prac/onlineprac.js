import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings={
    databaseURL: "https://addtocart-5e028-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const moviesInDb=ref(database,"movies")

const input=document.getElementById("input-field")
const addbtn=document.getElementById("add-button")

addbtn.addEventListener("click",function(){
    let inputValue=input.value;
    push(moviesInDb, inputValue)
    console.log(inputValue)
    input.value=""
})