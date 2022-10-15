const playYourGameButton = document.getElementById('button');
const humanResult = document.getElementById('human');
const browserResult = document.getElementById('browser');
let whoWin = document.getElementById('who-win');

let dadoHuman;
let dadoBrowser;

humanResult.innerHTML = "";
browserResult.innerHTML = "";
whoWin.innerHTML = "";



playYourGameButton.addEventListener('click', function(){
  dadoHuman = Math.ceil(Math.random() * 6);
  dadoBrowser = Math.ceil(Math.random() * 6);
  
  humanResult.innerHTML = `Human plays ${dadoHuman}`;
  browserResult.innerHTML = `Browser plays ${dadoBrowser}`;
  
  if(dadoHuman < dadoBrowser){
    whoWin.className = "";
    whoWin.innerHTML = `You loose...`;
    whoWin.classList.add('red');
    console.log(dadoHuman, dadoBrowser, 'browser');
  }else if(dadoHuman > dadoBrowser){
    whoWin.className = "";
    whoWin.innerHTML = `You win!`;
    whoWin.classList.add('green');
    console.log(dadoHuman, dadoBrowser, 'human');
  }else{
    whoWin.className = "";
    whoWin.innerHTML = `Even.`;
    whoWin.classList.add('blue');
    console.log(dadoHuman, dadoBrowser, 'even');
  }

  //solo logica, successivamente scriverò in html
     
  
});
