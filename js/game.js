/*
Author: Levan Mebonia
Username: Levo96

Project: rock_papper_scissors game
*/

// get everything ready before loading the js script
window.onload = function () {

  //start_page
  const start_page = document.querySelector('#start_page');

  // Selecting the objects/boxes on the start_page
  // Variables

  const rules_button = document.querySelector('#rules_button');
  const rules_field = document.querySelector('#rules_container');
  const rules_exit_button = document.querySelector('#rc_exit_button');

  const new_game_button = document.querySelector("#new_game_button");
  const new_game_field = document.querySelector("#new_game_container");
  const new_game_exit_button = document.querySelector('#ngcc_exit_button');

  // Making the rounds buttons selectable

  const button_list = document.querySelector('#buttons_list');
  const rounds_buttons = button_list.getElementsByClassName('ngcc_rounds_buttons');

  for (let i = 0; i < rounds_buttons.length; i++) {
    rounds_buttons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("rounds_active");
    current[0].className = current[0].className.replace(" rounds_active", "");
    this.className += " rounds_active";
    });
}

  // adding function to the rules and new game buttons
  /* If you click the rules button a box should appear with the game rules
  by clicking the rules_exit_button is should disappear */

  rules_button.addEventListener("click", () => {
    rules_field.style.visibility = "visible";
  });

  rules_exit_button.addEventListener("click", () => {
    rules_field.style.visibility = "hidden";
  });

  /* If you click the new game button  a box should appear with the game rules
  by clicking the rules_exit_button is should disappear */
  new_game_button.addEventListener("click", () => {
    new_game_field.style.visibility = "visible";
  });

  new_game_exit_button.addEventListener("click", ()=> {
    new_game_field.style.visibility = "hidden";
    let input_field = document.querySelector('#ngcc_username');
    input_field.value = "";
  });

  // selecting the start_button
  const start_game_button = document.querySelector('#start_game_button');

  // game function
  const start_game = () => {

    // Setting the Playername from the input - box
    let input_field = document.querySelector('#ngcc_username');
    let player_name = document.querySelector('#player_name');

    // If input box not empty than playername = input box value/text
    if(input_field.value !== "") {
        player_name.textContent = input_field.value;
    }
    //selecting the clicked / active round_button
    let rounds_option_button = document.querySelector('.rounds_active');

    //taking the value of the user chosen round button
    let game_rounds;
    game_rounds = rounds_option_button.value;

    /* selecting the parent container, and then selecting all the buttons*/
    let pbtn_container = document.getElementById("mg_left_side");
    let pbtns = pbtn_container.getElementsByClassName("gm_buttons");
    /* selecting the parent container, and then selecting all the buttons*/
    let cbtn_container = document.getElementById('mg_right_side');
    let cbtns = cbtn_container.getElementsByClassName('gm_c_buttons');


    //creating the three game option variables
    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";

    // score variable to keep track of the scores
    let rounds_counter = 0;
    let player_score = 0;
    let computer_score = 0;
    let player_option;
    let player_choice;
    let computer_choice;

    // elements to represent the result in the html / on the screen / with DOM
    let round_text = document.querySelector('#round_number');
    let left_score_display = document.querySelector('#mg_c_ls_n');
    let right_score_display = document.querySelector('#mg_c_rs_n');
    let center_display = document.querySelector('#mg_c_c_r_text');
    let result_explainer = document.querySelector('#result_explainer');
    let result_container = document.querySelector('#mgcrf_container');

    //making the player and game variable
    function random_choice() {
      let random = Math.floor((Math.random()*3)+1);
      let computer_choice;
      if(random == 1 ) {
        computer_choice = ROCK;
      }
      else if(random == 2) {
        computer_choice = PAPER;
      }
      else if(random == 3) {
        computer_choice = SCISSORS;
      }
      else {
        console.log("ERROR | random_choice");
      }
      return computer_choice;
    }
    // making the game buttons selectable
    for (let i = 0; i < pbtns.length; i++) {
      pbtns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("select_btn_active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" select_btn_active", "");
        }
      this.className += " select_btn_active";
    });}

    // the actual game :)
    for(let i = 0; i < pbtns.length; i++) {
      pbtns[i].addEventListener("click", function(){
        player_option = this.getAttribute("id") ;
        //assigning player_choice to the clicked button
        if(player_option == "ROCK_BUTTON") {
          player_choice = "ROCK";
        }
        else if(player_option == "PAPER_BUTTON") {
          player_choice = "PAPER";
        }
        else if(player_option == "SCISSORS_BUTTON") {
          player_choice = "SCISSORS";
        }

        //initialising computer choice
        computer_choice = random_choice();
        if(player_choice == "ROCK"){
          //removing classes from the player buttons
          for(let i = 0; i < pbtns.length; i++) {
            pbtns[i] = pbtns[i].classList.remove('won_btn_active');
            pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
            pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
          }
          //removing classes from the comp buttons
          for(let i = 0; i < pbtns.length; i++) {
            cbtns[i] = cbtns[i].classList.remove('won_btn_active');
            cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
            cbtns[i] = cbtns[i].classList.remove('draw_btn_active');
          }
          //removing the current Text adding the new text to the round title
          round_text.textContent = "";
          round_text.textContent += rounds_counter + 1;

          //if else for the varies scenarios
          if( computer_choice == "ROCK" ) {
            //adding appropriate claasses to the selected buttos
            this.classList.add('draw_btn_active');
            cbtns[0].classList.add('draw_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = " DRAW ";
            result_explainer.textContent = "";
            result_explainer.textContent = "DRAW";
            rounds_counter += 1;
          }
          else if( computer_choice == PAPER ) {
            this.classList.add('lost_btn_active');
            cbtns[1].classList.add('won_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 1;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = "Comp + 1 Point";
            result_explainer.textContent = "";
            result_explainer.textContent = "PAPER BEATS ROCK";
            rounds_counter += 1;
          }
          else if(computer_choice == SCISSORS) {
            this.classList.add('won_btn_active');
            cbtns[2].classList.add('lost_btn_active');
            //adding the scores
            player_score += 1;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = player_name.textContent + " + 1 Point ";
            result_explainer.textContent = "";
            result_explainer.textContent = "ROCK BEATS SCISSORS";
            rounds_counter += 1;
          }
          else {
            console.log("ERROR | player choie = rock ");
          }
        }
        else if(player_choice == PAPER) {
          //removing classes from the player buttons
          for(let i = 0; i < pbtns.length; i++) {
            pbtns[i] = pbtns[i].classList.remove('won_btn_active');
            pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
            pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
          }
          //removing classes from the comp buttons
          for(let i = 0; i < pbtns.length; i++) {
            cbtns[i] = cbtns[i].classList.remove('won_btn_active');
            cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
            cbtns[i] = cbtns[i].classList.remove('draw_btn_active');
          }
          //removing the current Text adding the new text to the round title
          round_text.textContent = "";
          round_text.textContent += (rounds_counter + 1);

          //if else for the varies scenarios
          if( computer_choice == ROCK ) {
            //adding appropriate claasses to the selected buttos
            this.classList.add('won_btn_active');
            cbtns[0].classList.add('lost_btn_active');
            //adding the scores
            player_score += 1;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = player_name.textContent + " + 1 Point ";
            result_explainer.textContent = "";
            result_explainer.textContent = "PAPER BEATS ROCK";
            rounds_counter += 1;
          }
          else if( computer_choice == PAPER ) {
            this.classList.add('draw_btn_active');
            cbtns[1].classList.add('draw_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = "DRAW";
            result_explainer.textContent = "";
            result_explainer.textContent = "DRAW";
            rounds_counter += 1;
          }
          else if(computer_choice == SCISSORS) {
            this.classList.add('lost_btn_active');
            cbtns[2].classList.add('won_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 1;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = "Comp + 1 Point";
            result_explainer.textContent = "";
            result_explainer.textContent = "SCISSORS BEATS PAPER";
            rounds_counter += 1;
          }
          else {
            console.log("ERROR | player choie = rock ");
          }
        }
        else if( player_choice == SCISSORS ) {
          //removing classses from player buttons
          for(let i = 0; i < pbtns.length; i++) {
            pbtns[i] = pbtns[i].classList.remove('won_btn_active');
            pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
            pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
          }
          //removing classes from the comp buttons
          for(let i = 0; i < pbtns.length; i++) {
            cbtns[i] = cbtns[i].classList.remove('won_btn_active');
            cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
            cbtns[i] = cbtns[i].classList.remove('draw_btn_active');
          }
          //removing the current Text adding the new text to the round title
          round_text.textContent = "";
          round_text.textContent += (rounds_counter + 1);

          //if else for the varies scenarios
          if( computer_choice == ROCK ) {
            //adding appropriate claasses to the selected buttos
            this.classList.add('lost_btn_active');
            cbtns[0].classList.add('won_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 1;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = "Comp + 1 Point";
            result_explainer.textContent = "";
            result_explainer.textContent = "ROCK BEATS SCISSORS";
            rounds_counter += 1;
          }
          else if( computer_choice == PAPER ) {
            this.classList.add('won_btn_active');
            cbtns[1].classList.add('lost_btn_active');
            //adding the scores
            player_score += 1;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = player_name.textContent + " 1 Point";
            result_explainer.textContent = "";
            result_explainer.textContent = "SCISSORS BEATS PAPER";
            rounds_counter += 1;
          }
          else if(computer_choice == SCISSORS) {
            this.classList.add('draw_btn_active');
            cbtns[2].classList.add('draw_btn_active');
            //adding the scores
            player_score += 0;
            computer_score += 0;
            //clearing the display | adding the score
            left_score_display.textContent = "";
            left_score_display.textContent += player_score;
            right_score_display.textContent = "";
            right_score_display.textContent += computer_score;
            //adding the description of the game scene to the center to display
            center_display.textContent = "";
            center_display.textContent = "DRAW";
            result_explainer.textContent = "";
            result_explainer.textContent = "DRAW";
            rounds_counter += 1;
          }
          else {
            console.log("ERROR | player choie = rock ");
          }
        }
        else {
          console.log("ERROR | PLAYER CHOICES SECTION");
        }
      });
    }
    }// <- End Bracket of start_game Function

  //when clicking the start button it should redirect you and start the game
  start_game_button.addEventListener("click", () => {
    new_game_field.style.visibility = "hidden";
    start_page.style.display = "none";
    start_game();
    let input_field = document.querySelector('#ngcc_username');
    input_field.value = "";
  });
}
