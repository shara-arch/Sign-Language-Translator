function Translate() {
     const nameInput = document.getElementById("name").value.trim(); 
     const outputSection = document.getElementById("cards"); 
    //  DATA VALIDATION
     if (!nameInput) { 
        outputSection.innerHTML = "<p>Please enter a name.</p>"; 
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

 



