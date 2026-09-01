// Welcome message
console.log("Welcome to Cosmic Explorer! 🚀");

// Create a space fact button
function showFact() {

    const facts = [
        "🌍 Earth is the third planet from the Sun.",
        "☀️ The Sun is a star.",
        "🔴 Mars is known as the Red Planet.",
        "🪐 Saturn has beautiful rings.",
        "🌌 The Milky Way is our galaxy.",
        "🌕 The Moon orbits Earth."
    ];

    const randomFact =
        facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("spaceFact").textContent = randomFact;
}
