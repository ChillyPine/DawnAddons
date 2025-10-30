import settings from '../../config'


const prefix = "&5[Dawn&6Addons&5]";

//Blood Opened Notifier
register("chat", () => {
    if (!settings().bloodroomopen) return
    Client.showTitle("&cBlood Opened!", "", 0, 70, 0)
    ChatLib.chat(prefix + ' &fBlood Opened!')
    if (settings().bloodDoneParty) {
        ChatLib.command('pc Blood Opened!')
    }
}).setCriteria("The BLOOD DOOR has been opened!");

//Dialogue Skip Notifier
register("chat", () => {
    if (!settings().diaskipnoti) return
    setTimeout(() => {
        Client.showTitle("&cKill!", "", 0, 70, 0);  
        ChatLib.chat(prefix + " &fKill for Dialogue Skip!")
    }, 1000);  //1 second delay before sending message. should work for 90% of skips
}).setCriteria("[BOSS] The Watcher: Let's see how you can handle this.");

//Blood Room Full Notifier
register("chat", () => {
    if (!settings().bloodroomfull) return
    Client.showTitle("&cBlood Full!", "", 0, 70, 0)
    ChatLib.chat(prefix + ' &fBlood Full!')
    if (settings().bloodDoneParty) {
        ChatLib.command('pc Blood Full!')
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.");

// Blood Cleared Notifier
register("chat", () => {
    if (!settings().bloodroomcleared) return
    setTimeout(() => {
        Client.showTitle("&cBlood Cleared!", "", 0, 70, 0)
        ChatLib.chat(prefix + " &fBlood Cleared!")
        if (settings().bloodDoneParty) {
            ChatLib.command('pc Blood Cleared!')
        }
    }, 200);
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.");