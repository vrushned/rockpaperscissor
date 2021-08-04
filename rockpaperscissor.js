let player_score=0;
let computer_score=0;
function computerPlay(){
    const choices=['rock','paper','scissor']
    let random=Math.floor(Math.random()*3)
    return choices[random]
}


function playRound(playerSelection, computerSelection) {
   


    if (playerSelection==='rock'&& computerSelection==='scissor'){
        player_score++;
    }
    else if (playerSelection==='paper'&& computerSelection==='rock'){
        player_score++;
    }
    else if (playerSelection==='scissor'&& computerSelection==='paper'){
        player_score++;
    }
    else if (playerSelection==='rock'&& computerSelection==='paper'){
        computer_score++;
    }
    else if (playerSelection==='scissor'&& computerSelection=='rock'){
        computer_score++;
    }
    else if (playerSelection==='rock'&& computerSelection==='paper'){
        computer_score++
    }

    return ("Player Selection:"+playerSelection+" Player Score:"+ player_score + " Computer Selection:"+computerSelection +" Computer score:"+computer_score)
    
  }

  while(player_score!=5 || computer_score!=5){
    const playerSelection = prompt();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    if(player_score===5||computer_score===5){
        player_score=0;
        computer_score=0;
        break;

    }

  }
  
