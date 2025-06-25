
const facts = [
    "Stars are born in massive clouds of dust and gas.",
    "Neutron stars can spin 600 times per second!",
    "The Sun accounts for 99.86% of the Solar System's mass.",
    "Space is completely silent.",
    "One million Earths could fit inside the Sun."
];

function showFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factBox = document.getElementById("fact-box");
    if (factBox) {
        factBox.innerText = randomFact;
    }
}

function updatePreview() {
    const name = document.getElementById("starName").value;
    const preview = document.getElementById("livePreview");
    if (preview) {
        preview.innerHTML = `⭐ Live Preview: <em>${name || '...'}</em>`;
    }
}

function validateForm() {
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
