'use strict';

// console.log(document.querySelector('.message').textContent);

// (document.querySelector('.message').textContent = 'Correct Number');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 24;
// document.querySelector('.guess').value = 15 ;

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessasge = function(message){
    document.querySelector('.message').textContent = message;

}
///using eventlistener to grab value in the .check Class input / game logic///
;document.querySelector('.check').addEventListener('click',
    function() {
const guess =  Number(document.querySelector('.guess').value);
if(!guess){ 
    displayMessasge('No number picked');
    // document.querySelector('.message').textContent = 'No number picked';
} else if (guess === number) {
    displayMessasge('You Guessed My number correctly');
    // document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    document.querySelector('.check').disabled = true;
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.')
    }
}
    //when guess is wrong
    else if(guess !== number){
        if(score > 1) {
            displayMessasge(guess > number ? 'Too high' : 'Too low');
            
            // document.querySelector('.message').textContent = (guess > number ? ' Too High!!' : 'Too Low!!' ;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessasge('You lose the game');
            // document.querySelector('.message').textContent = ' You lose the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
           
        }
    
    
    ///when number is too high//
// } else if (guess > number) {
//     if(score > 1){
//         document.querySelector('.message').textContent = ' Too High!!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = ' You lose the game';
//         document.querySelector('.score').textContent = 0;
//         document.querySelector('body').style.backgroundColor = 'red';
       
//     }
//   ///when number is too Low//
// } else if (guess < number){
//     if(score > 1){
//         document.querySelector('.message').textContent = 'Too Low!!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = ' You lose the game';
//         document.querySelector('.score').textContent = 0;
//         document.querySelector('body').style.backgroundColor = 'red';
       
//     }
}
});



document.querySelector('.again').addEventListener('click',
    function() {
        number = Math.trunc(Math.random() * 20 + 1);
        score = 20;
        displayMessasge('Start Guessing');
        // document.querySelector('.message').textContent = 'Start Guessing';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.check').disabled = false;
    }
);