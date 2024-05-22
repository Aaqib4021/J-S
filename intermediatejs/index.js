"use strict"
// function echo(input) {
//     console.log(input);
// }
// echo(42)
// echo(52)

function handleLike(){
    let likeCount = 0;
    return function addLike(){
        likeCount+=1;
        console.log( likeCount);
    }
}
const likes=handleLike();
console.log(likes)
likes();
likes();
likes();
