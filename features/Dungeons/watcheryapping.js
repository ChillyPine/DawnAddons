import settings from '../../config'

// List of Watcher messages to cancel
const watcherMessagesToCancel = [
    "That one was weak anyway.",
    "Things feel a little more roomy now, eh?",
    "I've knocked down those pillars to go for a more...open concept.",
    "Plus I needed to give my new friends some space to roam...",
    "This guy looks like a fighter.",
    "I'm impressed.",
    "Hmmm... this one!",
    "Ouch.. just kidding.",
    "Go, fight!",
    "Very nice.",
    "Aw, I liked that one.",
    "Go and live again!",
    "You'll do.",
    "Not bad."
];

// Single event handler that checks against the list
register('chat', (message, event) => {
    if (!settings().watcheryaphider) return;
    
    // Check if message matches any in our cancel list
    if (watcherMessagesToCancel.includes(message)) {
        cancel(event);
    }
}).setCriteria("[BOSS] The Watcher: ${message}");