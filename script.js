function Translate() {
     const nameInput = document.getElementById("name").value.trim(); 
     const outputSection = document.getElementById("cards"); 
    //  DATA VALIDATION
     if (!nameInput) { 
        outputSection.innerHTML = "<p>Please enter a name.</p>"; 
        return; 
    }

    const aslAlphabet = {
         a: "images/asl/a.png", b: "images/asl/b.png", c: "images/asl/c.png", d: "images/asl/d.png", 
         e: "images/asl/e.png", f: "images/asl/f.png", g: "images/asl/g.png", h: "images/asl/h.png", 
         i: "images/asl/i.png", j: "images/asl/j.png", k: "images/asl/k.png", l: "images/asl/l.png", 
         m: "images/asl/m.png", n: "images/asl/n.png", o: "images/asl/o.png", p: "images/asl/p.png", 
         q: "images/asl/q.png", r: "images/asl/r.png", s: "images/asl/s.png", t: "images/asl/t.png", 
         u: "images/asl/u.png", v: "images/asl/v.png", w: "images/asl/w.png", x: "images/asl/x.png", 
         y: "images/asl/y.png", z: "images/asl/z.png" };
}
