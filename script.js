function Translate() {
     const nameInput = document.getElementById("name").value.trim(); 
     const outputSection = document.getElementById("cards"); 
    //  DATA VALIDATION
     if (!nameInput) { 
        outputSection.innerHTML = "<p>Please enter a name.</p>"; 
        return; 
    }
}
