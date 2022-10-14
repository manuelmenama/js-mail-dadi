//prendo il valore dell'email dall'utente
const writedEmail = document.getElementById('email');
const verfyButton = document.getElementById('button');
const output = document.querySelector('h2');

//creo un'array di email accettate
const nukeEmail = ["xi-jinping@nuke.com", "vladimir-putin@nuke.com", "joe-biden@nuce.com", "kim-jong-un@nuke.com", "emmanuel-macron@nuke.com" , "narendra-modi@nuke.com", "shehbaz-sharif@nuke.com"];
let isNukePresident = false;

console.log(writedEmail.value);
//quando clicca sul bottone
verfyButton.addEventListener('click', function(){
  console.log(writedEmail.value);
  //scorro nell'array per verificare che sia presente l'email inserita
  for (let i = 0; i < nukeEmail.length; i++) {
    if(writedEmail.value === nukeEmail[i]){
      isNukePresident = true;
      console.log('vero');
    }
  }
  //se presente messaggio positivo
  //se non presente messaggio negativo
  if(isNukePresident){
    output.innerHTML = `Hi Mr President, you are @nuke.com president!`;
  }else{
    output.innerHTML = `Sorry but you aren't @nuke.com president`;
  }
})
