// Toggle Chat Window
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

// Handle User Message
function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    const chatBody = document.getElementById('chat-body');

    if (message === "") return;

    // 1. Show User Message
    chatBody.innerHTML += `<div class="user-msg">${message}</div>`;
    input.value = ""; // Clear input
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom

    // 2. Bot Thinking Delay
    setTimeout(() => {
        const botReply = getBotResponse(message.toLowerCase());
        chatBody.innerHTML += `<div class="bot-msg">${botReply}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// --- THE AI BRAIN (Logic) ---
function getBotResponse(text) {
    // GREETINGS
    if (text.includes("hello") || text.includes("hi") || text.includes("salam")) {
        return "Wa Alaikum Salam! Welcome to SALA. How can I help you with your preparation?";
    }
    
    // QUIZ LINKS
    if (text.includes("english") || text.includes("test") || text.includes("quiz")) {
        return "You can practice English here: <br> <a href='https://junejosafdar2026.github.io/IBA-English-Preparation-By-SALA/'>Open English Portal</a>";
    }
    if (text.includes("synonym")) {
        return "For Synonyms, try Quiz-02 in the main menu!";
    }
    if (text.includes("preposition")) {
        return "Prepositions are tricky! Check Quiz-04 for practice.";
    }

    // ACADEMY INFO
    if (text.includes("safdar") || text.includes("teacher") || text.includes("who")) {
        return "Sir Safdar Junejo is the founder of Shah Abdul Latif Academy (SALA), dedicated to free education.";
    }
    if (text.includes("contact") || text.includes("whatsapp")) {
        return "You can contact us via WhatsApp: <a href='https://whatsapp.com/channel/0029Vb5tZoH0lwgxaM1Jmr2h'>Click to Join</a>";
    }

    // DEFAULT ANSWER
    return "I am SALA Bot. I didn't understand that completely, but you can choose a quiz from the menu above!";
}

// Allow "Enter" key to send
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

