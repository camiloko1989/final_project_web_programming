function greeting(){
    var today = new Date();
                var hourNow = today.getHours();
                var greeting;

                if(hourNow > 0 && hourNow < 12){
                    greeting = "Good Morning! Welcome to my Profile!";
                } else if(hourNow >= 12 && hourNow < 18){
                    greeting = "Good Afternoon! Welcome to my Profile!";
                } else{
                    greeting = "Good Evening! Welcome to my Profile!";
                }

                document.getElementById("hello").innerText= greeting;
}

function RspPlay(){
    var z = document.getElementById("rpsoption"); 
    var userOption = z.options[z.selectedIndex].text; //takes the option selected by the user
    console.log(userOption);
    var pcChoice = document.getElementById("pcChoice");
    var pcSpace = document.getElementById("pcChoice");
    var userimg = document.getElementById("userImg");
    var pcimg = document.getElementById("pcImg");

    if(userOption == "Rock"){ //assigns each number a choice, it changes the pic according to choice
      userimg.src = "./images/Rock.png"
    } else if(userOption == "Paper"){
      document.getElementById("userImg")
      userimg.src = "./images/Paper.png"
    } else if(userOption == "Scissors"){
      document.getElementById("userImg")
      userimg.src = "./images/Scissors.png"
    }



    let pc = Math.floor((Math.random() * 3) + 1); //generates a random number between 1 and 3 for the computer option
    if(pc == 1){ //assigns each number a choice
      pcOption = "Rock";
      pcimg.src = "./images/Rock.png"; //changes pc image according to the choice
    } else if(pc == 2){
      pcOption = "Paper";
      pcimg.src = "./images/Paper.png";
    } else if(pc == 3){
      pcOption = "Scissors";
      pcimg.src = "./images/Scissors.png";
    }
    
    console.log(pcOption)
    document.getElementById("rpsAnswer").style.textAlign = "center"; //it is the actual game

            if(userOption == "Rock" && pcOption == "Paper")
            {
              document.getElementById("rpsAnswer").innerText = "You Lose!";
            } else if(userOption == "Rock" && pcOption == "Rock")
            {
              document.getElementById("rpsAnswer").innerText = "Draw!";
            } else if(userOption == "Rock" && pcOption == "Scissors")
            {
              document.getElementById("rpsAnswer").innerText = "You Win!";
            } else if (userOption == "Paper" && pcOption == "Paper")
            {
              document.getElementById("rpsAnswer").innerText = "Draw!";
            } else if (userOption == "Paper" && pcOption == "Rock")
            {
              document.getElementById("rpsAnswer").innerText = "You Win!";
            } else if (userOption == "Paper" && pcOption == "Scissors")
            {
              document.getElementById("rpsAnswer").innerText = "You Lose!";
            } else if (userOption == "Scissors" && pcOption == "Paper")
            {
              document.getElementById("rpsAnswer").innerText = "You Win!";
            }
            else if (userOption == "Scissors" && pcOption == "Rock")
            {
              document.getElementById("rpsAnswer").innerText = "You Lose!";
            }
            else if (userOption == "Scissors" && pcOption == "Scissors")
            {
              document.getElementById("rpsAnswer").innerText = "Draw!";
            }
}


function ticStart(){
  var button1 = document.getElementById("button1")
  var button2 = document.getElementById("button2")
  var turn = document.getElementById("turn")

  turn.innerText = "User's Turn"

  if(button1.clicked == true){
    console.log("Button1")
    button1.textContent = "X";
    
  }



}

var board = [  //initialize array with different numbers to avoid confusion when comparing data
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

for(i=0; i<3; i++){
  for(j=0; j<3; j++){
    console.log(board[i,j])
  }
}

var player = 1; //stars player always in 1 when page loads

function ticMark1(){

  var button1 = document.getElementById("button1")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button1.textContent = "X";
    board[0][0] = button1.textContent;
    console.log(board[0,0]);
    iswinner();
    player = 2; //it changes turn to other player
  } else{
    turn.innerText = "User 2 Turn"
    button1.textContent = "O";
    board[0][0] = button1.textContent;
    console.log("Button1")
    iswinner();
    player = 1;
  }
}


function ticMark2(){
  var button2 = document.getElementById("button2")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button2.textContent = "X";
    board[0][1] = button2.textContent;
    console.log("Button2: "+ board[0][1] )
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button2.textContent = "O" ;
    board[0][1] = button2.textContent;
    console.log("Button2")
    iswinner();
    player = 1;
  }
}

function ticMark3(){
  var button3 = document.getElementById("button3")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button3.textContent = "X";
    board[0][2] = button3.textContent;
    console.log("Button3");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button3.textContent = "O";
    board[0][2]= button3.textContent;
    console.log("Button3")
    iswinner();
    player = 1;
  }
}

function ticMark4(){
  var button4 = document.getElementById("button4")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button4.textContent = "X";
    board[1][0] = button4.textContent;
    console.log("Button4");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button4.textContent = "O";
    board[1][0] = button4.textContent;
    console.log("Button4")
    iswinner();
    player = 1;
  }
}

function ticMark5(){
  var button5 = document.getElementById("button5")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button5.textContent = "X";
    board[1][1] = button5.textContent;
    console.log("Button5");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button5.textContent = "O";
    board[1][1] = button5.textContent;
    console.log("Button5")
    iswinner();
    player = 1;
  }
}

function ticMark6(){
  var button6 = document.getElementById("button6")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button6.textContent = "X";
    board[1][2] = button6.textContent;
    console.log("Button6");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button6.textContent = "O";
    board[1][2] = button6.textContent;
    console.log("Button6")
    iswinner();
    player = 1;
  }
}

function ticMark7(){
  var button7 = document.getElementById("button7")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button7.textContent = "X";
    board[2][0] = button7.textContent;
    console.log("Button7");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button7.textContent = "O";
    board[2][0] = button7.textContent;
    console.log("Button7")
    iswinner();
    player = 1;
  }
}

function ticMark8(){
  var button8 = document.getElementById("button8")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button8.textContent = "X";
    board[2][1] = button8.textContent;
    console.log("Button8");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button8.textContent = "O";
    board[2][1] = button8.textContent;
    console.log("Button8")
    iswinner();
    player = 1;
  }
}

function ticMark9(){
  var button9 = document.getElementById("button9")
  if(player == 1){
    turn.innerText = "User 1 Turn"
    button9.textContent = "X";
    board[2][2]= button9.textContent;
    console.log("Button9");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button9.textContent = "O";
    board[2][2] = button9.textContent;
    console.log("Button9")
    iswinner();
    player = 1;
  }
}


var bts = document.getElementsByClassName("cells");


function iswinner(){
  if(board[0][0] == board[0][1] && board[0][1] == board[0][2]){  //search first row
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
      turn.innerText = "User 1 wins!"
    else
      turn.innerText = "User 2 wins!"
  }
  else if(board[0][0] == board[1][0] && board[1][0] == board[2][0]){ //search first column
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  else if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){ //search diagonal
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  else if(board[1][0] == board[1][1] && board[1][1] == board[1][2]){ //search second row
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!";
    else
    turn.innerText = "User 2 wins!";
  }
  else if(board[0][1] == board[1][1] && board[1][1] == board[2][1]){ //search second column
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  else if(board[0][2] == board[1][1] && board[1][1] == board[2][0]){ //search diagonal
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  else if(board[2][0] == board[2][1] && board[2][1] == board[2][2]){ //search third row
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  else if(board[0][2] == board[1][2] && board[1][2] == board[2][2]){ //search third column
    for(var i = 0; i < bts.length; i++) {
      bts[i].disabled = true;
    }
    if(player == 1)
    turn.innerText = "User 1 wins!"
    else
    turn.innerText = "User 2 wins!"
  }
  
}

function newGame(){
  console.log("New GAme")

  for(var i = 0; i < bts.length; i++) {
    bts[i].disabled = false;
  }

  board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ];

  for(i=0; i<3; i++){
    for(j=0; j<3; j++){
      console.log(board[i,j])
    }
  }
  
  

  for(var i = 0; i < bts.length; i++) {
    bts[i].innerHTML = " ";
  }
}

function QAmore(){
  document.getElementById("QAmore").style.display = "block"
  document.getElementById("QAless").disabled = false;
  document.getElementById("QAMorebutton").disabled = true;
}

function QAless(){
  document.getElementById("QAmore").style.display = "none"
  document.getElementById("QAless").disabled = true;
  document.getElementById("QAMorebutton").disabled = false;
}

function Softmore(){
  document.getElementById("Softmore").style.display = "block"
  document.getElementById("Softless").disabled = false;
  document.getElementById("Softmorebutton").disabled = true;
  
}

function Softless(){
  document.getElementById("Softmore").style.display = "none"
  document.getElementById("Softless").disabled = true;
  document.getElementById("Softmorebutton").disabled = false;
}

function Devmore(){
  document.getElementById("Devmore").style.display = "block"
  document.getElementById("Devless").disabled = false;
  document.getElementById("Devmorebutton").disabled = true;
}

function Devless(){
  document.getElementById("Devmore").style.display = "none";
  document.getElementById("Devless").disabled = true;
  document.getElementById("Devmorebutton").disabled = false;
}