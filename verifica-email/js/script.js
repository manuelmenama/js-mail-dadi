//prendo il valore dell'email dall'utente
const writedEmail = document.getElementById('email');
const verfyButton = document.getElementById('button');

//creo un'array di email accettate
const nukeEmail = ["xi-jinping@nuke.com", "vladimir-putin@nuke.com", "joe-biden@nuce.com", "kim-jong-un@nuke.com", "emmanuel-macron@nuke.com" , "narendra-modi@nuke.com", "shehbaz-sharif@nuke.com"];

console.log(writedEmail.value);
//quando clicca sul bottone
verfyButton.addEventListener('click', function(){
  console.log(writedEmail.value);
  for (let i = 0; i < nukeEmail.length; i++) {
    if(writedEmail.value === nukeEmail[i]){
      console.log('You are a nuke president!');
    }
    
  }
})
  //scorro nell'array per verificare che sia presente l'email inserita
    //se presente messaggio positivo
    //se non presente messaggio negativo

