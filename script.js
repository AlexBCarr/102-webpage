
alert("Welcome To Good Burger, Home Of The Good Burger!");

function sayHello(){
  let usersName = prompt("What is your name?");
  console. log("The user's name is:" + usersName);
  document.write("Hello " + usersName);
  if (usersName){
    document.write("   ,wow " + usersName + " is a great name!");
    return
  } else {
    document.write(" Names are fundamental when meeting new people!");
    userName = prompt("May I please know your name");
  }
  return usersName
}


function dadJoke(){
  let userInput = prompt("How do you make a hamburger smile?");
  console.log(userInput);

  let myAnswer = "Pickle it gently";
  console.log(myAnswer);

  if (userInput == myAnswer){
    document.write("HAHAHA Gotta Love Dad Jokes");
  } else if (userInput > myAnswer){
    document.write("Alright you beat it out of me...YOU PICKLE IT GENTLY!");
  } else if (userInput < myAnswer){
    document.write("Alright you beat it out of me...YOU PICKLE IT GENTLY!");
  } else{
    document.write("Your a comedian also");
  }
  return userInput; 

}


function bQuiz(){
  let myAnswer = 3;
  let userGuess = prompt("Three friends bought Burgers, how many Burgers are there?");
  console.log(userGuess);

  
  console.log(myAnswer);

  
  if (userGuess == myAnswer){
    document.write("Great job math wiz.")
  } else if (userGuess > myAnswer){
    document.write("Too High");
  } else if (userGuess < myAnswer){
    document.write("Too Low");
  } else {
    document.write("I Can't see where we went wrong");
  }  
}









    










    




