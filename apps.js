// var iNumber = Math.trunc(Math.random()*3)+1;
// let y= parseInt(iNumber);
function computerchoice() {
    let item =['Null','ROCK','PAPER','SCISSORS' ];
    var iNumber = Math.trunc(Math.random()*3)+1;
    return (`${item[(iNumber)]}`);
}
// was going to try and add picture of chosen item
// let picArray=[
// {'Null':'Null'},
// {'ROCK':'https://https://thumbs.dreamstime.com/b/young-male-fist-gesture-left-hand-concept-rock-paper-scissors-game-isolated-white-background-118950763.jpg.com/wp-content/uploads/2018/08/bull-rock-landscaping-rocks-gravel-houston-tx-77099.jpeg'},
// {'PAPER':'https://as2.ftcdn.net/v2/jpg/02/43/06/89/1000_F_243068964_BqrpjOdMd2U7ZEGLjiO8l7h4Ut1j9hcA.jpg'},
// {'SCISSORS':'https://thumbs.dreamstime.com/b/young-male-scissors-gesture-left-hand-concept-rock-paper-game-isolated-white-background-118950800.jpg'}
// ]
let score = 1
let scoreC = 1
document.querySelector('.shoot').addEventListener('click', function(){
 let player1 = (document.querySelector('.playerChose').value);
 let player = player1.toUpperCase();
 document.querySelector('.youChose').textContent= player;
 let comp = document.querySelector('.compChose').textContent=computerchoice();

 if (!player){
 document.querySelector('.youChose').textContent= (`You didn't choose anything 👎`);
 } else if (player ==='PAPER' && comp==='ROCK'){ 
    document.querySelector('.winLoss').textContent=('You Won 🎉');
    document.querySelector('.playerWin').textContent= (`🏅You're Score is ${score++}🏅`);
 }else if (player ==='PAPER' && comp==='SCISSORS'){
     document.querySelector('.winLoss').textContent=('You Loss 👎');
     document.querySelector('.compWin').textContent= (`🏅Computer score is ${scoreC++}🏅`);
 }else if (player ==='PAPER' && comp==='PAPER'){
        document.querySelector('.winLoss').textContent=(`It's a tie 🤝`);
 }else if (player ==='ROCK' && comp==='SCISSORS'){ 
    document.querySelector('.winLoss').textContent=('You Won 🎉');
    document.querySelector('.playerWin').textContent= (`🏅You're Score is ${score++}🏅`);
 }else if (player ==='ROCK' && comp==='PAPER'){
     document.querySelector('.winLoss').textContent=('You Loss 👎');
     document.querySelector('.compWin').textContent= (`🏅Computer score is ${scoreC++}🏅`);
 }else if (player ==='ROCK' && comp==='ROCK'){
     document.querySelector('.winLoss').textContent=(`It's a tie 🤝`);
 }else if (player ==='SCISSORS' && comp==='PAPER'){ 
     document.querySelector('.winLoss').textContent=('You Won 🎉');
     document.querySelector('.playerWin').textContent= (`🏅You're Score is ${score++}🏅`);
 }else if (player ==='SCISSORS' && comp==='ROCK'){
     document.querySelector('.winLoss').textContent=('You Loss 👎');
     document.querySelector('.compWin').textContent= (`🏅Computer score is ${scoreC++}🏅`);
 }else if (player ==='SCISSORS' && comp=='SCISSORS') {
    document.querySelector('.winLoss').textContent=(`It's a tie 🤝`);
//  } else if (player ==='PAPER' || player==='ROCK' || player==="SCISSORS" ){
//     document.querySelector('.youChose').textContent= (`You didn't Rock, paper, or Scissors. Try Again👎`);
 }
});
 

document.querySelector('.reset').addEventListener('click', function () {
    score = 1;
    scoreC= 1;
    document.querySelector('.playerWin').textContent = "🏅You haven't won any yet🏅";
    document.querySelector('.compWin').textContent = "🏅Computer hasn't won any yet🏅";
    document.querySelector('.winLoss').textContent=('');
    document.querySelector('.playerChose').tectContent=("")
});
