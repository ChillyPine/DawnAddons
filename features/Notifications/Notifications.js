import settings from '../../config'

const prefix = "&5[Dawn&6Addons&5]";

register('chat', () => {
    if (settings().lockedchestnoti) {
        Client.showTitle("&cLOCKED", "", 0, 20, 0);
        ChatLib.chat(prefix + " &cLOCKED CHEST")
    }
}).setCriteria("That chest is locked!");

//Kicked Noti
register('chat', () => {
    if (!settings().autonotikick) return
    setTimeout(() => {
        ChatLib.command('pc KICKED!')
    }, 300);
}).setCriteria("You were kicked while joining that server!")

register('chat', () => {
    if (!settings().autonotikick) return
    setTimeout(() => {
        ChatLib.command('pc BANNNNNNEEEDDDDD')
    }, 300);
}).setCriteria("A player has been removed from your game.")


