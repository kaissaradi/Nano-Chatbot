---

## Nano Chatbot

This project leverages new functionality in Chrome to create a lightweight, offline chatbot using the embedded Gemini LLM. The chatbot provides fast, streaming responses, enhancing real-time interaction.

### Features

- **Real-time Streaming**: Get instant, streaming responses from the chatbot for a more dynamic conversation.
- **Clean Interface**: Simple and intuitive chat layout with user input and message display areas.
- **Offline Capability**: Operates entirely offline, making it secure and fast.
---
### Requirements

- **Browser**: Chrome Dev or Canary (version >= 127)
- **Settings**:
  - Enable the following Chrome flags:
    - `chrome://flags/#optimization-guide-on-device-model` (set to **Enabled BypassPerfRequirement**)
    - `chrome://flags/#prompt-api-for-gemini-nano` (set to **Enabled**)
  - Ensure the `Optimization Guide On Device Model` component is updated from `chrome://components`.
---
### Usage

1. Open the chatbot in a compatible version of Chrome.
2. Type your message in the input field and press "Send" or Enter.
3. Enjoy interactive and fast responses from the AI.
---
### How It Works

- **Initialization**: The chatbot checks for the availability of the LLM and initializes a session.
- **Messaging**: User inputs are sent to the LLM, which returns streaming responses displayed in real-time.

Feel free to explore and modify the code to suit your needs!

---
