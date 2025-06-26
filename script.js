const facts = [
      "Stars are born in massive clouds of dust and gas.",
      "Neutron stars can spin 600 times per second!",
      "The Sun accounts for 99.86% of the Solar System’s mass.",
      "Space is completely silent.",
      "One million Earths could fit inside the Sun."
              ];


function showFact() {
    const spreadFacts = [... facts];
    const randomFacts = spreadFacts[Math.floor(Math.random() * spreadFacts.length)];
    const factBox = document.getElementById("fact-box");
    if (factBox) {
        factBox.innerText = randomFacts;
    }
}

function updatePreview() {
    const name = document.getElementById("starName").value;
    const preview = document.getElementById("livePreview");
    if (preview) {
        preview.innerHTML = `⭐ Live Preview: <em>${name || '...'}</em>`;
    }
}

function validateForm(){
    const name = document.getElementById("starName").value.trim();
    const message = document.getElementById("submitMessage");

    if (!message) return false;
    

    if (name.length < 3) {
        message.innerText = "🚫 Star name must be at least 3 characters";
        message.style.color = 'red';
        return false;
    }

    message.innerText = `🌟 Your star "${name}" has been registered in the galaxy!`;
    message.style.color = 'lightgreen';
    return false;
}

function highlightCards(){
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.boxShadow = "0 0 25px #ff0";
        card.style.border = '2px solid yellow';
    });
}

function checkPlanetCount(){
    const value = parseInt(document.getElementById('planetInput').value);
    const response = document.getElementById("planetResponse");

    if (isNaN(value)) {
        response.innerText = "🔭 Waiting for input... ";
        response.style.color = "#ccc";
    }else if (value < 1){
        response.innerText = "🚫 Not a real system";
        response.style.color = "red";
    }else if (value <= 8){
        response.innerText = "🪐 Looks like a small star system.";
        response.style.color = "lightblue";
    }else {
        response.innerText = "💫 That's a massive planetary system";
        response.style.color = "lime";
    }
}

function generateRandomGalaxy(){
    const prefixes = ["Zeta", "Omega", "Xerion", "Nova", "Altair", "Quasar"];
    const suffixes = ["-X42", "-Prime", "-9A", "-Sector", "-Nebula", "-Core"];
    const name = `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;

    document.getElementById("randomGalaxy").innerText = `🚀 You discovered: ${name}`;
}
