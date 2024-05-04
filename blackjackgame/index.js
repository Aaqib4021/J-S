let cardsarr=[];
let sum=0;
let hasPlayerBlackJack=false;
let isAlive=false
let message ="";

let playerobj={
    Name:"john",
    Chips:120
}

let cardval=document.getElementById("cards-msg");

let sumval=document.getElementById("sum-msg");

let res=document.getElementById("message-el");

let playerDetails=document.querySelector("#player-el");
playerDetails.textContent=playerobj.Name+": $"+playerobj.Chips;

function startGame(){
    isAlive=true;
     
    let firstCard = randomCard();
    let secondCard = randomCard();

    cardsarr=[firstCard,secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){
    cardval.textContent="Cards: "
    cardval.textContent+=cardsarr;//!we can use this instead of for loop
    // for(let i=0;i<cardsarr.length;i+=1){
    //     cardval.textContent+=cardsarr[i]+" ";
    // }
    sumval.textContent="Sum: "+sum;
    if(sum <= 20){
        message="Do You Want To Draw Another Card ?🙂";
    }
    else if(sum === 21){
       message="Wohooo! You Won The Game 🥳";
        hasPlayerBlackJack=true;
    }
    else{
        message="You Are Out Of The Game :😭";
        isAlive=false;
    }
    res.textContent=message
}

function newCard(){
    if(isAlive==true){
    let newCard=randomCard();
    sum+=newCard;
    cardsarr.push(newCard);
    renderGame();
    }
}

function randomCard(){
    let rndmnmbr= Math.floor(Math.random() *13)+1;
    if(rndmnmbr===1){
        return 11;
    }else if(rndmnmbr>10){
        return 10;
    }else{
        return rndmnmbr;
    }
}
