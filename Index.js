const choices = ['paper','scissors', 'rock']; // -1>-2, -2>-3, 0>-1

function getHumanChoice(){
    choiceIndex = Math.floor(Math.random() * choices.length);
    // let hChoice = choices[choiceIndex];

    let hChoice = prompt('Give your choice').toLowerCase();
    // console.log(hChoice)
    return hChoice;
}

function getComputerChoice(){
    choiceIndex = Math.floor(Math.random() * choices.length);
    let cChoice = choices[choiceIndex];
    return cChoice;
}

let hScore = 0;
let cScore = 0;

function playRound(humanChoice, computerChoice){

    console.log('humanChoice', humanChoice);
    console.log('computerChoice', computerChoice);

    if((humanChoice=='rock' && computerChoice=='scissors')){
         
        hScore+=1;
        console.log('Winnner is  human');

    }else if (humanChoice=='scissors' && computerChoice=='rock'){
        cScore+=1;
        console.log('Winnner is  computer');

    }else if (humanChoice=='scissors' && computerChoice=='paper'){
        hScore+=1;
        console.log('Winnner is  human');

    }else if (humanChoice=='paper' && computerChoice=='scissors'){
        cScore+=1;
        console.log('Winnner is  computer');

    }else if (humanChoice=='paper' && computerChoice=='rock'){
        hScore+=1;
        console.log('Winnner is  human');

    }else if (humanChoice=='rock' && computerChoice=='paper'){
         
        cScore+=1;
        console.log('Winnner is  computer');

    }else{
        cScore+=0;
        hScore+=0;
        gameCount-=1;
        console.log('Round is tied');
    }
  }

  function gamePlay(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  gamePlay();
  gamePlay();
  gamePlay();
  gamePlay();
  gamePlay();

  console.log('Total Games =', gameCount);
    if (hScore>cScore){
        console.log('Winnner is  human with score of ', hScore);
    }
    else{
        console.log('Winnner is  computer with score of ', cScore);
    }

  /* const humanSelection = getHumanChoice();
  console.log('humanSelection', humanSelection)
  const computerSelection = getComputerChoice();
  console.log('computerSelection', computerSelection)
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
   */