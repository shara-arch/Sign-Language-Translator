//-----ASL TRANSLATOR----
function Translate() {
     const nameInput = document.getElementById("name").value.trim(); 
     const outputSection = document.getElementById("cards"); 
    //  DATA VALIDATION
     if (!nameInput) { 
        alert("Please enter a name." )
        return; 
    }

    //ASL Alphabet
    const aslAlphabet = {
        a: "images/Sign_language_A.svg", b: "images/Sign_language_B.svg", c: "images/Sign_language_C.svg", 
        d: "images/Sign_language_D.svg", e: "images/Sign_language_E.svg", f: "images/Sign_language_F.svg", 
        g: "images/Sign_language_G.svg", h: "images/Sign_language_H.svg", i: "images/Sign_language_I.svg", 
        j: "images/Sign_language_J.svg", k: "images/Sign_language_K.svg", l: "images/Sign_language_L.svg", 
        m: "images/Sign_language_M.svg", n: "images/Sign_language_N.svg", o: "images/Sign_language_O.svg", 
        p: "images/Sign_language_P.svg", q: "images/Sign_language_Q.svg", r: "images/Sign_language_R.svg", 
        s: "images/Sign_language_S.svg", t: "images/Sign_language_T.svg", u: "images/Sign_language_U.svg", 
        v: "images/Sign_language_V.svg", w: "images/Sign_language_W.svg", x: "images/Sign_language_X.svg", 
        y: "images/Sign_language_Y.svg", z: "images/Sign_language_Z.svg"
        
        };

    let myName = "<h3>INTRODUCTION</h3>";
    myName += `
    <div>
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVvdHpkNGNleGllMnhzYW44NnpnY3lpMmkwZXkxOXZ2b3QweWFpNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/StKsUzn4txjJlX2Zil/giphy.webp"
    alt="My name is" style="width:120px; height:auto";
    <p><strong>My name is</strong></p>

    </div>
    `;
     // Convert each letter of the name into ASL symbol
  for (let char of nameInput.toLowerCase()) {
    if (aslAlphabet[char]) {
      myName += `<img src="${aslAlphabet[char]}" alt="${char}" class="asl-symbol"> ${char}`
    } else {
      myName += `<span>${char}</span>`; // fallback for non-letters
    }
  }

  outputSection.innerHTML = myName;
  document.getElementById("userForm").reset();

  }

//--------ASL GAME-------
const questions = [
  { word: "Hello",
     image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenhkbDBycmY1cWRxZm44NWJ2dHc3a25wMHZpYXN4MnNuemJndjZraCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/DcPfy7StVKeB5dv0ND/giphy.webp", 
     options: ["Hello", "Yes", "No", "Thank you"] 
    },
  { word: "Thank you", 
    image: "https://i.pinimg.com/originals/ea/d0/1c/ead01c20912bdf3464a5a8aa76e60f6f.gif", 
    options: ["Sorry", "Thank you", "Hello", "Yes"] 
    },
  { word: "Yes", 
    image: "https://i.pinimg.com/originals/ee/7e/4b/ee7e4bf6dfa38a3e28e6708d023c481c.gif", 
    options: ["No", "Yes", "Maybe", "Hello"] 
    },
  { word: "No", 
    image: "https://i.pinimg.com/736x/83/e8/c2/83e8c2507e2b3b29aaad4381afe2e748.jpg", 
    options: ["Yes", "No", "Thank you", "Sorry"] 
    },
  { word: "Sorry", 
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBjazhyZmR6MG50Zzc4c3R6cXI3OHJxeWNyNzAwbDY0dGo5NHR3NiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/imIfawMEuUBGeHISs0/giphy.webp", 
    options: ["Hello", "Sorry", "Yes", "No"] 
    },
  { word: "Please", 
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzRxa2tuZHNzemNlY2tmd2d0OWcydzg5N250Z2R3dTA5amxtY2h1ayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/MRKcHkNMUReYTCoS1a/giphy.webp", 
    options: ["Thank you", "Please", "Sorry", "Hello"] 
    },
  { word: "Goodbye", 
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZpazFyNGJqNXJmY3lyeGR4YmZ0Nnc2eDI0ZThhYTRpYm5ocmNmdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/9lCFnUmtcAm2ASj19T/200.webp", 
    options: ["Hello", "Yes","Goodbye", "No"] 
    },
  { word: "Help", 
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ZqamplODluZDdtd3d4cmdkNTJqcWhyZzFldHZiY21wY3Y2eHZleiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/QvpdP2cLOB1dGcVVKt/giphy.webp", 
    options: ["Please", "Thank you","Help", "Sorry"] 
    },
  { word: "Love", 
    image: "https://i.pinimg.com/736x/9d/38/81/9d3881abd845a5ac80f98f2e9b4103dd.jpg", 
    options: ["Love", "Hello", "Goodbye", "Yes"] 
    },
  { word: "Friend", 
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW9uNG5xMWJyazBrNXkyZGdoNWdwaGppZDA4bDl3c2ZoY3g3ZzZvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/N2D6HGO8PdgivXg9qy/giphy.webp", 
    options: ["Help", "Love", "No", "Friend"] 
    }
];
 
let currentQuestion = 0; 
let score = 0; 

//Call DOM Elements
const signImage = document.getElementById("sign-image"); 
const optionsDiv = document.getElementById("options"); 
const feedback = document.getElementById("feedback"); 
const scoreDisplay = document.getElementById("score"); 
const progressDisplay = document.getElementById("progress"); 
const nextBtn = document.getElementById("next-btn");
const newGame = document.getElementById("new-game");
const progress = document.getElementById("progress");


function showQuestion() { 
    const question = questions[currentQuestion]; 
    signImage.src = question.image; 
    optionsDiv.innerHTML = ""; 

    question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn"); //Button Styles
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
});

    
    progress.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
}


// Add Local Storage.
let highScore = localStorage.getItem("highScore") || 0;
scoreDisplay.textContent = "Score: " + score + " | High Score: " + highScore;


function checkAnswer(answer) {
     const correct = questions[currentQuestion].word;
      if (answer === correct) {
         feedback.textContent = "✅ Correct!"; 
         score++;
         } 
         else {
             feedback.textContent = "❌ Wrong! Correct: " + correct; 
            }
             scoreDisplay.textContent = "Score: " + score; 
             nextBtn.disabled = false; 
     }


nextBtn.onclick = () => {
     currentQuestion++; 
     if (currentQuestion < questions.length) {
        feedback.textContent = "";
        nextBtn.disabled = true;
         showQuestion(); 
        }
         else {
             feedback.textContent = "🏁 Finished! Final score: " + score + "/" + questions.length; 
               // ✅ Update high score.
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            feedback.textContent += " 🎉 New High Score!";
        }

        scoreDisplay.textContent = "Score: " + score + " | High Score: " + highScore;
             nextBtn.disabled = true; 
             newGame.style.display = "inline-block";
            } 
    };

    showQuestion();

