
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









    










    




