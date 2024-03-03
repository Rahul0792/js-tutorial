let scorestr = localStorage.getItem('score');
  let score;
  resetScore(scorestr);

  function resetScore(scorestr){
     score = scorestr ? JSON.parse(scorestr) :  {
      win : 0,
      tie : 0,
      lost : 0, 
     
    };
    
    score.displayscore =function() {
      return ` Total Matches won :  ${score.win} 
      Total Matches lost ${score.lost} 
      Total Matches tie: ${score.tie}`;
    }
  }


let resultMsg;
function choiceofcomputer()
{
//For Generating Random Number Between 0-3 ; 
 let randomNumber = Math.random() * 3;
if (randomNumber > 0 && randomNumber <= 1) {
  return 'Bat';
} else if (randomNumber > 1 && randomNumber <= 2) {
  return 'Ball';
} else {
  return 'Stump';
}
}



function getReasult( usermove , computerChoice)
{
    if(usermove === 'Bat')
    {
      if (computerChoice === 'Ball') {
        score.win++;
        return `User Won`;
       }
       else if (computerChoice === 'Bat') {
        score.tie++;
        return `It's a Tie`;
      }
      else (computerChoice === 'Stump') 
      {
        score.lost++;
        return 'Computer Won';
      }

    }
     else if(usermove === 'Ball')
    {
      if (computerChoice === 'Ball') {
        score.tie++;
        return `It's a Tie`;
      }
      else if (computerChoice === 'Bat') {
        score.win++;
        return `User Won`;
      }
      else (computerChoice === 'Stump')
      {
        score.lost++;
        return 'Computer Won';
      }
    }
     else
    {
      if (computerChoice === 'Ball') {
        score.win++;
        return `User Won`;
      }
      else if (computerChoice === 'Bat') {
        score.lost++;
        return `Computer  Won`;
      }
      else (computerChoice === 'Stump')
      {
        score.tie++;
        return `It's a Tie`;
      }
    }
}



function showReasult( usermove , computerChoice ,resultMsg)
{
  localStorage.setItem('score',JSON.stringify(score));
  alert(`You Have Chosen ${usermove} Computer choice is ${computerChoice}
   ${resultMsg}
    ${score.displayscore()}`);
}