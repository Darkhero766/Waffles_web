const facts = [
      "Stars are born in massive clouds of dust and gas.",
      "Neutron stars can spin 600 times per second!",
      "The Sun accounts for 99.86% of the Solar System’s mass.",
      "Space is completely silent.",
      "One million Earths could fit inside the Sun."
              ];


function showFacts() {
    const spreadFacts = [... facts];
    const randomFacts = spreadFacts[Math.floor(Math.random() * spreadFacts.length)];
    const factbox = document.getElementById("fact-box");
    if (factBox) {
        factbox.innerText = randomFacts;

    }
}

function updatePreview() {
    const name = getElementById("starName").value;
    const preview = getElementById("livePreview");
    if (preview) {
        preview.innerHTML = `⭐ Live Preview: <em>${name || '...'}</em>`;
    }
}

function validateForm(){
    const name = document.getElementById("starName").value.trim();
    const message = document.getElementById("submitMessage");

    if (!message) return false;
    

    if (name.length > 3) {
        message.innerText = "🚫 Star name must be 3 characters";
        message.style.color = 'red';
        return false;
    }

    message.innerText = `🌟 Your star "${name}" has been registered in the galaxy!`;
    message.style.color = 'lightgreen'
    return false;

}

