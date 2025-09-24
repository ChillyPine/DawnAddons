import settings from '../../config'
import { ItemUtils } from "../../utils/Utils";
const prefix = "&5[Dawn&6Addons&5]";

let AllowChatMessage = true

register("tick", () => {
    if(!settings().ArrowNotif) return
    if (ItemUtils.InvCheck("Flint Arrow") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYou have an arrow in your inventory.");
        AllowChatMessage = false
    }
    //When arrow gone set back to true
    if (!ItemUtils.InvCheck("Flint Arrow") ) {
        AllowChatMessage = true
    }
    if (ItemUtils.InvCheck("Flint Arrow")) {
        Client.showTitle("", "&4&lARROW", 0, 3, 0);
    } 
})

register("worldUnload", () => {
    AllowChatMessage = true;
});