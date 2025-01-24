let score = 0; // To keep track of the game players score
let howToPlay = "You are to select 1-2 classes (rocks, plants, food, animals), then the game would generate 10-20 items. You are then to select which sub-class each of the items belong to. ";
let instruction1 = "Please select 1 or 2 categories you want to be quized on";
let feedback0 = "You need to brush up on your"
let feedback1 = "You can do better, wanna try again?";
let feedback2 = "not bad, wanna try again?";
let feedback3 = "you kn ow stuff!, play more and get better.";
let feedback4 = "Bravo!!! You seem to be a nerd";
let feedback5 = "not bad, wanna try again?";
let randQuest = 0;
let selectedClasses = []; // Used to store the classes that were selected by the user on the second page.

const button1 = document.querySelector("#button1"); //Linking button from HTML file to JS file
let gameElement = document.getElementById("game"); //game element object
let screentext = document.querySelector("#text");  //text element object
 // Get the form and inputs
 const classSelectionForm = document.querySelector("#class_Selection form"); // To access the inputs from the form.
 const classInputs = document.querySelectorAll("#class_Selection input[type='checkbox']"); // To access the form within the class_selector container.
 
 

const gameData = {
    Plants: [
      // Non-Vascular
      { name: "Moss", subclass: "Non-Vascular" },
      { name: "Liverwort", subclass: "Non-Vascular" },
      { name: "Hornwort", subclass: "Non-Vascular" },
      { name: "Riccia", subclass: "Non-Vascular" },
      { name: "Marchantia", subclass: "Non-Vascular" },
      { name: "Sphagnum", subclass: "Non-Vascular" },
      { name: "Polytrichum", subclass: "Non-Vascular" },
      { name: "Anthoceros", subclass: "Non-Vascular" },
      { name: "Funaria", subclass: "Non-Vascular" },
      { name: "Plagiochila", subclass: "Non-Vascular" },
  
      // Gymnosperm
      { name: "Pine Tree", subclass: "Gymnosperm" },
      { name: "Cedar", subclass: "Gymnosperm" },
      { name: "Cypress", subclass: "Gymnosperm" },
      { name: "Spruce", subclass: "Gymnosperm" },
      { name: "Fir", subclass: "Gymnosperm" },
      { name: "Ginkgo", subclass: "Gymnosperm" },
      { name: "Juniper", subclass: "Gymnosperm" },
      { name: "Sequoia", subclass: "Gymnosperm" },
      { name: "Yew", subclass: "Gymnosperm" },
      { name: "Podocarpus", subclass: "Gymnosperm" },
  
      // Angiosperm
      { name: "Rose", subclass: "Angiosperm (Dicot)" },
      { name: "Sunflower", subclass: "Angiosperm (Dicot)" },
      { name: "Oak", subclass: "Angiosperm (Dicot)" },
      { name: "Maple", subclass: "Angiosperm (Dicot)" },
      { name: "Cabbage", subclass: "Angiosperm (Dicot)" },
      { name: "Grass", subclass: "Angiosperm (Monocot)" },
      { name: "Wheat", subclass: "Angiosperm (Monocot)" },
      { name: "Banana", subclass: "Angiosperm (Monocot)" },
      { name: "Lily", subclass: "Angiosperm (Monocot)" }
    ],
  
    Rocks: [
      // Igneous
      { name: "Granite", subclass: "Igneous" },
      { name: "Basalt", subclass: "Igneous" },
      { name: "Andesite", subclass: "Igneous" },
      { name: "Obsidian", subclass: "Igneous" },
      { name: "Pumice", subclass: "Igneous" },
      { name: "Diorite", subclass: "Igneous" },
      { name: "Rhyolite", subclass: "Igneous" },
      { name: "Scoria", subclass: "Igneous" },
      { name: "Tuff", subclass: "Igneous" },
      { name: "Gabbro", subclass: "Igneous" },
  
      // Sedimentary
      { name: "Limestone", subclass: "Sedimentary" },
      { name: "Shale", subclass: "Sedimentary" },
      { name: "Sandstone", subclass: "Sedimentary" },
      { name: "Conglomerate", subclass: "Sedimentary" },
      { name: "Siltstone", subclass: "Sedimentary" },
      { name: "Dolomite", subclass: "Sedimentary" },
      { name: "Breccia", subclass: "Sedimentary" },
      { name: "Coal", subclass: "Sedimentary" },
      { name: "Chert", subclass: "Sedimentary" },
      { name: "Gypsum", subclass: "Sedimentary" },
  
      // Metamorphic
      { name: "Marble", subclass: "Metamorphic" },
      { name: "Slate", subclass: "Metamorphic" },
      { name: "Quartzite", subclass: "Metamorphic" },
      { name: "Gneiss", subclass: "Metamorphic" },
      { name: "Schist", subclass: "Metamorphic" },
      { name: "Phyllite", subclass: "Metamorphic" },
      { name: "Amphibolite", subclass: "Metamorphic" },
      { name: "Hornfels", subclass: "Metamorphic" },
      { name: "Eclogite", subclass: "Metamorphic" },
      { name: "Migmatite", subclass: "Metamorphic" }
    ],
  
    Animals: [
      // Mammals
      { name: "Lion", subclass: "Mammal" },
      { name: "Elephant", subclass: "Mammal" },
      { name: "Dolphin", subclass: "Mammal" },
      { name: "Tiger", subclass: "Mammal" },
      { name: "Kangaroo", subclass: "Mammal" },
      { name: "Bear", subclass: "Mammal" },
      { name: "Bat", subclass: "Mammal" },
      { name: "Wolf", subclass: "Mammal" },
      { name: "Monkey", subclass: "Mammal" },
      { name: "Giraffe", subclass: "Mammal" },
  
      // Birds
      { name: "Eagle", subclass: "Bird" },
      { name: "Parrot", subclass: "Bird" },
      { name: "Penguin", subclass: "Bird" },
      { name: "Ostrich", subclass: "Bird" },
      { name: "Peacock", subclass: "Bird" },
      { name: "Sparrow", subclass: "Bird" },
      { name: "Owl", subclass: "Bird" },
      { name: "Duck", subclass: "Bird" },
      { name: "Swan", subclass: "Bird" },
      { name: "Falcon", subclass: "Bird" },
  
      // Reptiles
      { name: "Snake", subclass: "Reptile" },
      { name: "Lizard", subclass: "Reptile" },
      { name: "Crocodile", subclass: "Reptile" },
      { name: "Turtle", subclass: "Reptile" },
      { name: "Chameleon", subclass: "Reptile" },
      { name: "Gecko", subclass: "Reptile" },
      { name: "Iguana", subclass: "Reptile" },
      { name: "Komodo Dragon", subclass: "Reptile" },
      { name: "Skink", subclass: "Reptile" },
      { name: "Alligator", subclass: "Reptile" }
    ],
  
    Food: [
      // Carbohydrates
      { name: "Bread", subclass: "Carbohydrate" },
      { name: "Rice", subclass: "Carbohydrate" },
      { name: "Pasta", subclass: "Carbohydrate" },
      { name: "Potato", subclass: "Carbohydrate" },
      { name: "Corn", subclass: "Carbohydrate" },
      { name: "Oats", subclass: "Carbohydrate" },
      { name: "Barley", subclass: "Carbohydrate" },
      { name: "Quinoa", subclass: "Carbohydrate" },
      { name: "Couscous", subclass: "Carbohydrate" },
      { name: "Tortilla", subclass: "Carbohydrate" },
  
      // Proteins
      { name: "Fish", subclass: "Protein" },
      { name: "Chicken", subclass: "Protein" },
      { name: "Beef", subclass: "Protein" },
      { name: "Eggs", subclass: "Protein" },
      { name: "Tofu", subclass: "Protein" },
      { name: "Lentils", subclass: "Protein" },
      { name: "Beans", subclass: "Protein" },
      { name: "Nuts", subclass: "Protein" },
      { name: "Turkey", subclass: "Protein" },
      { name: "Cheese", subclass: "Protein" },
  
      // Fats
      { name: "Butter", subclass: "Fat" },
      { name: "Olive Oil", subclass: "Fat" },
      { name: "Avocado", subclass: "Fat" },
      { name: "Cream", subclass: "Fat" },
      { name: "Nuts", subclass: "Fat" },
      { name: "Seeds", subclass: "Fat" },
      { name: "Coconut Oil", subclass: "Fat" },
      { name: "Mayonnaise", subclass: "Fat" },
      { name: "Peanut Butter", subclass: "Fat" },
      { name: "Ghee", subclass: "Fat" }
    ]
  };
  
  //----------------------------------------------------------------------------------------------------------------------------

  function generateQuestions(categories, numberOfQuestions) { //This function takes in main classes that were selected by the user. Step(6)
    const questions = [];                  //The categories that were previously stored in the 'selectedClasses' array 
    

    const questionsPerCategory = Math.floor(numberOfQuestions / categories.length);
    let remainingQuestions = numberOfQuestions % categories.length;
    
    categories.forEach((category) => {
        const items = gameData[category];
        const shuffled = items.sort(() => Math.random() - 0.5);
        
        const extraQuestion = remainingQuestions > 0 ? 1 : 0;
        remainingQuestions--;
        
        const numberToTake = questionsPerCategory + extraQuestion;
        questions.push(...shuffled.slice(0, numberToTake));
    });
    
  
    displayQuestions(questions);
  }


//---------------------------------------------------------------------------------------------------------------
function displayQuestions(questions) { //  Step(7)
    // This function shows the randomly selected items and creates dropdown menus for the user to pick the subclasses.
    const gameDiv = document.getElementById("game");
    gameDiv.innerHTML = ""; // Clear previous content
  
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `
        <p class="black-text">${index + 1}. What subclass does "${question.name}" belong to?</p>
        <select id="answer_${index}">
          <option value="">Select an option</option>
          ${getOptionsForCategory(question)}
        </select>
      `;
      gameDiv.appendChild(questionDiv);
    });
  

    //------------------------------------------------------------------------------------(You can consider this to be part of step7)
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Answers";
    submitButton.className = "submit-btn";

    // Modify button styles
    submitButton.style.backgroundColor = "magenta"; // Change background color to green
    submitButton.style.color = "black"; // Change text color to white
    resizeGame();


    submitButton.addEventListener("click", () => checkAnswers(questions));
    gameDiv.appendChild(submitButton);
    resizeGame();
    function getOptionsForCategory(question) {
      // This generates the dropdown options dynamically from the data.
      const options = new Set();
      for (const category in gameData) {
        if (gameData[category].some((item) => item.name === question.name)) {
          gameData[category].forEach((item) => options.add(item.subclass));
        }
      }
      return Array.from(options)
        .map((opt) => `<option value="${opt}">${opt}</option>`) // Dropdown menu options.
        .join("");
    }
  }
  
//----------------------------------------------------------------------------------------------------------------  


function checkAnswers(questions) { //step (8)
  //To check if the user's answers match the correct subclasses. Takes in an array of questions from generateQuestions function
                                                  
  
    questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`#answer_${index}`).value; // Temporarily stores the feedback for each answer the user gives.
      if (selectedAnswer === question.subclass) {
        score++; //Cumilative scores are calculated here too.
      }
    });
  
    displayFeedback(score, questions.length);
  }

//--------------------------------------------------------------------------------------------------------------------


function displayFeedback(score, total) { //To provide personalized feedback based on what the user scored. Step (9)
    const gameDiv = document.getElementById("game");
    const percentage = (score / total) * 100;
  
    let feedback;
    if (percentage < 40 && (selectedClasses.length < 2)) feedback = feedback0 + " " +selectedClasses[0];
    else if (percentage < 40 && (selectedClasses.length > 1)) feedback = feedback0 + " " + selectedClasses[0] + " and " + selectedClasses[1];
    else if ((percentage >40) && (percentage < 60)) feedback = feedback1;
    else if ((percentage < 80) && (percentage > 60)) feedback = feedback2;
    else if ((percentage < 90) && (percentage > 80)) feedback = feedback3;
    else feedback = feedback4;
  
    gameDiv.innerHTML = `
      <h2 class = "black-text">Your Score: ${score}/${total}</h2>
      <p class= "black-text">${feedback}</p>
      <button onclick="location.reload()">Play Again</button> 
    `;
  }


//----------------------------------------------------------------------------------------------------------------------  


button1.onclick = nextpage; // to initiate transition from page 2


classSelectionForm.addEventListener("submit", (e) => { //Step (5)
  e.preventDefault(); // Prevent default form submission
  
  selectedClasses = Array.from(classInputs) 
  /*classInputs is a NodeList, which is a collection of nodes (in this case, checkboxes). 
  While NodeList is array-like, it does not have all the methods of an actual JavaScript*/

    .filter((input) => input.checked) // iterates through the array of checkboxes and keeps only the ones that are checked. 
    .map((input) => input.value); // extracts the value property of each checked input, resulting in an array of selected values.

  if (selectedClasses.length < 1 || selectedClasses.length > 2) { //To ensure that users/players select 1 or 2 classes before being able to proceed.
    alert("Please select 1 or 2 categories."); // to catch wrong/inadequate option selections.
  } 
  
  else {
    screentext.textContent = `Selected categories: ${selectedClasses.join(", ")}`;
    numberOfQuestionsGen()
    generateQuestions(selectedClasses, randQuest);
  }
});



//-------------------------------------------------------------------------------------------------------------------------



function resizeGame() { // Makes the game panel elongate so that all the options are visible without congestion, step(4)
    
    gameElement.style.maxHeight = window.innerHeight + "px"; // Change max-height dynamically based on length of the page.
}

function resizeGame() {
    const gameDiv = document.getElementById("game");
    gameDiv.style.height = "auto"; // Adjust the height automatically to fit content (Dynamic resizing)
    gameDiv.style.overflowY = "auto"; // Add vertical scrolling if needed
  }


function toggleClassForm() { // Makes the class selection form appear on the second page, step(3)
    const form = document.getElementById('class_Selection');
    form.style.display = 'block'; // Ensure form is visible
  }
  


    function nextpage() { // helps update from intro page to second page, step(1)
        button1.innerText = "Click to proceed";
        text.innerText = howToPlay;
        button1.onclick = () => {
          secondPage();
          toggleClassForm();
          
        };

      }




  function secondPage(){ // Helps to take user to second page after initialization, step (2)

    text.innerText = "Select below the 1 or 2 classes in which you want to be tested on:";
  
    button1.style.display = "none"; // getting rid of the button at this stage since it is not needed for this stage.

  }


  function numberOfQuestionsGen(){ // Generate a random number between 10 and 20, step

    randQuest = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    
    console.log(randQuest);
    
  } 