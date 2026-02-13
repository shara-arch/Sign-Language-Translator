function Translate() {
     const nameInput = document.getElementById("name").value.trim(); 
     const outputSection = document.getElementById("cards"); 
    //  Data Validation
     if (!nameInput) { 
        outputSection.innerHTML = "<p>Please enter a name.</p>"; 
        return; 
    }
}
