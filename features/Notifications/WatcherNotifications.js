import settings from '../../config'


const prefix = "&5[Dawn&6Addons&5]";

// Blood Cleared Notifier
register("chat", () => {
    if (settings().bloodroomcleared) {
        Client.showTitle("&cBlood Cleared!", "", 0, 70, 0)
        ChatLib.chat(prefix + " &fBlood Cleared!")
        if (settings().bloodDoneParty) {
            ChatLib.command(`pc Blood Cleared!`)
        }
    } 
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.");

//Dialogue Skip Notifier
register("chat", () => {
    setTimeout(() => {
        if (settings().diaskipnoti) {
            Client.showTitle("&cKill!", "", 0, 70, 0);  
            ChatLib.chat(prefix + " &fKill for Dialogue Skip!")
        }
    }, 1000);  //1 second delay before sending message. should work for 90% of skips
}).setCriteria("[BOSS] The Watcher: Let's see how you can handle this.");

//Blood Opened Notifier #1
register("chat", () => {
    if (settings().bloodroomopen) {
        Client.showTitle("&cBlood Opened!", "", 0, 70, 0)
        ChatLib.chat(prefix + ' &fBlood Opened!')
        if (settings().bloodDoneParty) {
            ChatLib.command(`pc Blood Opened!`)
        }
    }
}).setCriteria("The BLOOD DOOR has been opened!");

//Blood Opened Notifier #2
register("chat", () => {
    if (settings().bloodroomopen) {
        Client.showTitle("&cBlood Opened!", "", 0, 70, 0)
        ChatLib.chat(prefix + ' &fBlood Opened!')
    }
}).setCriteria("A shiver runs down your spine...");

//Blood Room Full Notifier
register("chat", () => {
    if (settings().bloodroomfull) {
        Client.showTitle("&cBlood Full!", "", 0, 70, 0)
        ChatLib.chat(prefix + ' &fBlood Full!')
        if (settings().bloodDoneParty) {
            ChatLib.command(`pc Blood Full!`)
        }
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.");


