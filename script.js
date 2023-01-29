
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
    // userName = prompt("May I please know your name");
  }

  // while (userName = prompt){
  //   userName = prompt("What is your name?");
  // }


  //  console. log("The user's name is:" + usersName);
  //  document.write("Hello " + usersName);
  

  // while (userName = prompt){
  //   // if (usersName){
  //   // document.write("   ,wow " + usersName + " is a great name!");
      
  //   // } else {
  //   userName = prompt("What is your name?");
  //   }   

    
    // if (usersName){
    // document.write("   ,wow " + usersName + " is a great name!");
  
      
    
  

  return usersName
  
} 


function dadJoke(){
  let userInput = prompt("How do you make a hamburger smile?");
  console.log(userInput);
  userInput = prompt("Come on give it a try");

  let myAnswer = "pickle it gently";
  console.log(myAnswer);

  if (userInput == myAnswer){
    document.write("HAHAHA Gotta Love Dad Jokes");
  } else if (userInput > myAnswer){
    document.write("Alright you beat it out of me...YOU PICKLE IT GENTLY!");
  } else if (userInput < myAnswer){
    document.write("Alright you beat it out of me...YOU PICKLE IT GENTLY!");
  } else{
    document.write("Your a comedian also");
    // userInput = prompt("Come on give it a try"); 
  }
  return userInput

}


function burQuiz(){
  let myAnswer = 3;
  let userGuess = prompt("Three friends bought Burgers, how many Burgers are there?");
  console.log(userGuess);
  console.log(myAnswer);
  

  while (userGuess != 3){
    userGuess = prompt("How many Burgers?");
  }    

  

  
  // if (userGuess == myAnswer){
  //  document.write("Great job math wiz.");
  // } else if (userGuess > myAnswer){
  //   document.write("Too High");
  // } else if (userGuess < myAnswer){
  //   document.write("Too Low");
  // } else {
  //   document.write("I Can't see where we went wrong");
  // }  


  // let number = Prompt("Three friends bought Burgers, how many Burgers are there?");



  for (let i = 0; i < userGuess; i = i + 1){
    document.write("<img src=https://images.unsplash.com/photo-1514904298838-b62571b3257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnMlMjBhbmQlMjBmcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60</img>")
  }  
    


}










    










    




