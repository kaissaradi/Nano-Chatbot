// HTML structure (add this to your HTML file)
`
<div id="chat-container">
  <div id="chat-messages"></div>
  <input type="text" id="user-input" placeholder="Type your message...">
  <button id="send-button">Send</button>
</div>
`

// JavaScript for fast, streaming responses
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

async function initializeAI() {
  if (window.ai && await window.ai.canCreateTextSession()) {
    return await window.ai.createTextSession();
  }
  throw new Error('AI not available');
}

let aiSession;

initializeAI().then(session => {
  aiSession = session;
}).catch(error => {
  console.error('Failed to initialize AI:', error);
});

async function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage && aiSession) {
    addMessageToChat('User', userMessage);
    userInput.value = '';
    
    try {
      const stream = aiSession.promptStreaming(userMessage);
      let aiResponse = '';
      const aiMessageElement = addMessageToChat('AI', '');
      
      for await (const chunk of stream) {
        aiMessageElement.textContent = chunk;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    } catch (error) {
      console.error('AI response error:', error);
      addMessageToChat('AI', 'Sorry, I encountered an error.');
    }
  }
}

function addMessageToChat(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.innerHTML = `<strong>${sender}:</strong> <span>${message}</span>`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return messageElement.querySelector('span');
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});