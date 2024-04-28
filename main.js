
// let str="123";
// console.log(typeof str);
// let num=Number(str);
// console.log(typeof num);
// console.log(num);
// let i=3;
// while(i) alert(i--);
// let j=0;
// for(;j<3;) alert(j++);
// let sum=0;
// for(;;){
//     let num=+prompt('Enter the number');
//     if(!num) break;
//     sum+=num;
// }
// alert('sum: '+sum);
// let bonuspoint=50;
// console.log(bonuspoint)
let count=0;
// let svarr=new Array();
let prevalue=document.getElementById("previous-score");
let value=document.getElementById("counter");
function increment(){
   count+=1;
   console.log(count);
   value.textContent=count;
}
function save(){
    let savedvalue=count+" - ";
    // svarr.push(savedvalue);
    // console.log('length '+svarr.length);
    console.log('savedvalue: '+savedvalue);
    prevalue.textContent+=savedvalue;
    count=0
    value.textContent=count;
     // prevalue.innerText="Previous entries-->"
    // for(let i=0;i<Math.min(3,svarr.length);i++){
    //     prevalue.innerText+=`${svarr[i]}`;            
    //     if(i<svarr.length-1){
    //         prevalue.innerText+=","
    //     }
    // }
}
console.log(x===undefined);
var x=3;
(function () {
    console.log(x);
    var x = "local value";
    console.log(x);
  })();
 
