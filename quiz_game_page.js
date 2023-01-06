var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function Send() {
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1) * parseInt(number2);
   question_numbers = "<h4>" + number1 + " x " + number2 + "</h4>";
   input_box = "<br> Answer: <input type='text' id='input_check_box'>";
   check_button = "<br> <br> <button class='btn btn-info' onclick='Check()'>Check</button>";
   row = question_numbers + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
}

Question_turn = "player1";
Answer_turn = "player2";

function Check() {
   get_answer = document.getElementById("input_check_box").value;

   if (get_answer == actual_answer) {
      
      if (Answer_turn == "player1") {
         update_player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML = update_player1_score;
      } else {
         update_player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = update_player2_score;
      }
      document.getElementById("correct?").style.color = "green";
      document.getElementById("correct?").innerHTML = "Correct! +1 pt.";
    } else {
      document.getElementById("correct?").style.color = "red";
      document.getElementById("correct?").style.color = "Incorrect!";
    }

    if (Question_turn == "player1") {
      Question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;    
    } else {
      Question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (Answer_turn == "player1") {
      Answer_turn = "player2";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;    
    } else {
      Answer_turn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
}