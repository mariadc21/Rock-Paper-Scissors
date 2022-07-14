function computerchoice() {
    let item =['Null','Rock','Paper','Scissors'];
    let iNumber = Math.trunc(Math.random()*3)+1;
    return (`Computer chose ${item[(iNumber)]}`)
}

document.querySelector('.compChose').textContent=computerchoice();

// document.querySelector('.compChose').addEventListener('click', function(){
 
// })