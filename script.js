function greeting(){  //shows a different greeting depending on the hour of the day
    var today = new Date();
                var hourNow = today.getHours();
                var greeting;

                if(hourNow > 0 && hourNow < 12){
                    greeting = "Good Morning. Welcome to my Profile!";
                } else if(hourNow >= 12 && hourNow < 18){
                    greeting = "Good Afternoon. Welcome to my Profile!";
                } else{
                    greeting = "Good Evening. Welcome to my Profile!";
                }

                document.getElementById("hello").innerText= greeting;
}

function userImage(){
    var z = document.getElementById("rpsoption"); 
    var userOption = z.options[z.selectedIndex].text; //takes the option selected by the user
    var userimg = document.getElementById("userImg");


    if(userOption == "Rock"){ //assigns each number a choice, it changes the pic according to the choice
      userimg.src = "./images/Rock.png"
    } else if(userOption == "Paper"){
      document.getElementById("userImg")
      userimg.src = "./images/Paper.png"
    } else if(userOption == "Scissors"){
      document.getElementById("userImg")
      userimg.src = "./images/Scissors.png"
    }
}

function RspPlay(){  //starts the Rock Paper Scissors game
    var z = document.getElementById("rpsoption"); 
    var userOption = z.options[z.selectedIndex].text; //takes the option selected by the user
    console.log(userOption);
    var pcChoice = document.getElementById("pcChoice");
    var pcSpace = document.getElementById("pcChoice");
    var userimg = document.getElementById("userImg");
    var pcimg = document.getElementById("pcImg");

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
    button1.textContent = "X"; //marks the button with a X
    button1.disabled = true;  //disables the button so the next user cannot use it again
    board[0][0] = button1.textContent; //stores the X in the array
    console.log(board[0,0]);
    iswinner(); //it checks if there's a winner
    player = 2; //it changes turn to other player
  } else{
    turn.innerText = "User 2 Turn"
    button1.textContent = "O";
    button1.disabled = true;
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
    button2.disabled = true;
    board[0][1] = button2.textContent;
    console.log("Button2: "+ board[0][1] )
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button2.textContent = "O" ;
    button2.disabled = true;
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
    button3.disabled = true;
    board[0][2] = button3.textContent;
    console.log("Button3");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button3.textContent = "O";
    button3.disabled = true;
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
    button4.disabled = true;
    board[1][0] = button4.textContent;
    console.log("Button4");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button4.textContent = "O";
    button4.disabled = true;
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
    button5.disabled = true;
    board[1][1] = button5.textContent;
    console.log("Button5");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button5.textContent = "O";
    button5.disabled = true;
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
    button6.disabled = true;
    board[1][2] = button6.textContent;
    console.log("Button6");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button6.textContent = "O";
    button6.disabled = true;
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
    button7.disabled = true;
    board[2][0] = button7.textContent;
    console.log("Button7");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button7.textContent = "O";
    button7.disabled = true;
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
    button8.disabled = true;
    board[2][1] = button8.textContent;
    console.log("Button8");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button8.textContent = "O";
    button8.disabled = true;
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
    button9.disabled = true;
    board[2][2]= button9.textContent;
    console.log("Button9");
    iswinner();
    player = 2;
  } else{
    turn.innerText = "User 2 Turn"
    button9.textContent = "O";
    button9.disabled = true;
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

function countryInfo(){
  var selectedCountry = document.getElementsByName("selectedcountry"); //selects all the radio buttons 
  var nameCountry = document.getElementById("nameCountry"); //space left for name
  var information = document.getElementById("infoCountry"); //The space left for information

  for(let i = 0; i <= selectedCountry.length; i++){
    if(selectedCountry[0].checked){
      nameCountry.innerText = "Mexico"
      information.innerText = "It was the first country I visited, it was back in 2014, I went to Cancun for 4 days to present a paper in a conference. There I had the chance to visit Chichen Itza, an old Mayan city that has pyramids from ancient times"
    } else if(selectedCountry[1].checked){
      nameCountry.innerText = "Australia"
      information.innerText = "I lived in Melbourne, Australia for almost 4 years, I arrived there in late 2014 and I came back to Colombia in 2018, I had the chance to visit other cities like Adelaide, Hobart and Sidney when I was there"
    } else if(selectedCountry[2].checked){
      nameCountry.innerText = "Japan"
      information.innerText = "I went to Japan taking advantage of a sale from Australia, I arrived to Tokyo where I spent 5 days, then I user the JR Pass to travel to Kyoto, Osaka and finnaly a small city called Nara that was the capital in ancient times"
    } else if(selectedCountry[3].checked){
      nameCountry.innerText = "China"
      information.innerText = "I flew from Melbourne to Beijing, there I spent almost a week, I visited the incredible Great Wall, it was my second Wonder of the World"
    } else if(selectedCountry[4].checked){
      nameCountry.innerText = "Russia"
      information.innerText = "From China I went to Russia, I had previously bougth two tickets for the World Cup, so I went first to Moscow and then to Sochi and Rostov-on-Don where I watched two matches of the cup"
    } else if(selectedCountry[5].checked){
      nameCountry.innerText = "Germany"
      information.innerText = "I started an Euro trip in Russia and then I went to Berlin for a couple of days, from there I went by bus to Munich, as an anecdote my camera was stolen in a hostel while I was slepping"
    } else if(selectedCountry[6].checked){
      nameCountry.innerText = "Czech Republic"
      information.innerText = "I went to Prague the capital of the Czech Republic, I spent almost a week there, the most impressive thing was the Prague Castle and the narrow streets of this wonderfull city"
    } else if(selectedCountry[7].checked){
      nameCountry.innerText = "Hungary"
      information.innerText = "I went to Budapest, the capital of Hungary, it is a really nice city divided by the Danube River, one side is called Buda, there you can find an awesome castle, the other side is called Pest, there you can find clubs and baths to hang up"
    } else if(selectedCountry[8].checked){
      nameCountry.innerText = "Austria"
      information.innerText = "Vienna is located close to Budapest, so it is easy to travel from one to the another, Vienna is an incredibly beautifull city full of palaces but is really expensive too, that's why I just spent 3 nigths there"
    } else if(selectedCountry[9].checked){
      nameCountry.innerText = "Slovakia"
      information.innerText = "I didn't know but Bratislava, the capital of Slovakia, it's just one hour far from Vienna, so I took a bus and I went there, the downtown small but full of restaurants and pubs, and there is a castle too. In comparison, it's really cheap to stay in Bratislava"
    } else if(selectedCountry[10].checked){
      nameCountry.innerText = "Italy"
      information.innerText = "I finished my eurotrip in the north of Italy, first I went to Milan and stayed there a couple of days, then I went to Turin, I wanted to visit the Juventus Stadium because I am a fan of them. This city is amazing and full of museums and public squares"
    } else if(selectedCountry[11].checked){
      nameCountry.innerText = "Cuba"
      information.innerText = "I went to Cuba in 2018 and it was like travelling back in time, there was not WiFi, just in certain places and you had to buy a pre-paid card to use it. All the houses and buildings are in ruins but you don't feel in danger. It's one of the most special places I've been to"
    } else if(selectedCountry[12].checked){
      nameCountry.innerText = "France"
      information.innerText = "I travelled to France in 2020 in the middle of the pandemy, I went under Work and Travel visa and I stayed there for 5 months, I visited Paris, I lived in Toulouse for a month and I worked in farms in the south of the country and close to the Germany border"
    } else if(selectedCountry[13].checked){
      nameCountry.innerText = "Luxemburg"
      information.innerText = "I crossed the border from France to Luxemburg just one day, the downtown is amazing and the public transport is completely free, the city is full of palaces and everything is nice and neat"
    } else if(selectedCountry[14].checked){
      nameCountry.innerText = "Portugal"
      information.innerText = "After France I went to Portugal because the measures anti-Covid were more relaxed there, I spent almost a month in the awesome Lisbon, maybe my favourite city so far, then I visited Aveiro and Porto in the north of the country"
    } else if(selectedCountry[15].checked){
      nameCountry.innerText = "Canada"
      information.innerText = "I arrived in Canada in September 2022 as a student, so far I am happy to be here, I have known a litle bit of Vancouver and I think is one of the most beautiful cities, I had the chance to visit Victoria too and it is incredible too"
    }
  }

  //
}