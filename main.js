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
let svarr=new Array();
function increment(){
   count+=1;
   console.log(count);
   let value=document.getElementById("counter");
   value.innerHTML=count;
}
function save(){
    let savedvalue=count+" -";
    svarr.push(savedvalue);
    console.log('length '+svarr.length);
    console.log('savedvalue: '+savedvalue);
    let prevalue=document.getElementById("previous-score");
    // prevalue.innerText="Previous entries-->"
    prevalue.innerText+=savedvalue;
    // for(let i=0;i<Math.min(3,svarr.length);i++){
    //     prevalue.innerText+=`${svarr[i]}`;
    //     if(i<svarr.length-1){
    //         prevalue.innerText+=","
    //     }
    // }
}
