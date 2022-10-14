const playYourGameButton = document.getElementById('button');

let dadoHuman;
let dadoBrowser;


playYourGameButton.addEventListener('click', function(){
  dadoHuman = Math.ceil(Math.random() * 6);
  dadoBrowser = Math.ceil(Math.random() * 6);
  
  
  if(dadoHuman < dadoBrowser){
    console.log(dadoHuman, dadoBrowser, 'browser');
  }else if(dadoHuman > dadoBrowser){
    console.log(dadoHuman, dadoBrowser, 'human');
  }else{
    console.log(dadoHuman, dadoBrowser, 'even');
  }

  //solo logica
     
  
});
