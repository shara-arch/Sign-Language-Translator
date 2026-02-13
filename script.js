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
         a: "images/asl/a.png", b: "images/asl/b.png", c: "images/asl/c.png", d: "images/asl/d.png", 
         e: "images/asl/e.png", f: "images/asl/f.png", g: "images/asl/g.png", h: "images/asl/h.png", 
         i: "images/asl/i.png", j: "images/asl/j.png", k: "images/asl/k.png", l: "images/asl/l.png", 
         m: "images/asl/m.png", n: "images/asl/n.png", o: "images/asl/o.png", p: "images/asl/p.png", 
         q: "images/asl/q.png", r: "images/asl/r.png", s: "images/asl/s.png", t: "images/asl/t.png", 
         u: "images/asl/u.png", v: "images/asl/v.png", w: "images/asl/w.png", x: "images/asl/x.png", 
         y: "images/asl/y.png", z: "images/asl/z.png",
        
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
      myName += `<img src="${aslAlphabet[char]}" alt="${char}">`;
    } else {
      myName += `<span>${char}</span>`; // fallback for non-letters
    }
  }

  outputSection.innerHTML = myName;


    
}

