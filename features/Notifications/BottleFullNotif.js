import settings from '../../config'
import { ItemUtils } from "../../utils/Utils";

//Leaving this comment here cause it's funny:
//Not holding warnings but like im already here and lazy

const prefix = "&5[Dawn&6Addons&5]";
let StormBottleFull = false
let ThunderBottleFilled = false
let HurricaneBottleFilled = false
let AllowChatMessage = true
let AllowChatMessageEOR = true
register("tick", () => {
    if(!settings().BottleFullNoti) return
    if (ItemUtils.InvCheck("Storm in a Bottle") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYour Storm Bottle Has Filled! &aNICE!");
        StormBottleFull = true
        AllowChatMessage = false
    }
})

register("tick", () => {
    if(!settings().BottleFullNoti) return
    if (ItemUtils.InvCheck("Thunder in a Bottle") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYour Thunder Bottle Has Filled!");
        ThunderBottleFilled = true
        AllowChatMessage = false
    }
})

register("tick", () => {
    if(!settings().BottleFullNoti) return
    if (ItemUtils.InvCheck("Hurricane in a Bottle") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYour Hurricane Bottle Has Filled! &7WOW!");
        HurricaneBottleFilled = true
        AllowChatMessage = false
    }
})


register('chat', (player) => {
    setTimeout(() => {
       if(StormBottleFull && AllowChatMessageEOR) {
            ChatLib.chat(prefix + " &fYour Storm Bottle Has Filled! Lets replace that shall we?");
            Client.showTitle("", `&dStorm Bottle &aFull`, 0, 30, 0);
            AllowChatMessageEOR = false
        }
        if(ThunderBottleFilled && AllowChatMessageEOR) {
            ChatLib.chat(prefix + " &fYour Thunder Bottle Has Filled! Lets replace that shall we?");
            Client.showTitle("", `&dThunder Bottle &aFull`, 0, 30, 0);
            AllowChatMessageEOR = false
        }
        if(HurricaneBottleFilled && AllowChatMessageEOR) {
            ChatLib.chat(prefix + " &fYour Hurricane Bottle Has Filled! Lets replace that shall we?");
            Client.showTitle("", `&dHuuricane Bottle &aFull &5WOW!`, 0, 30, 0);
            AllowChatMessageEOR = false
        }  
    }, 300);
}).setCriteria(/^\s*> EXTRA STATS <$/)

register("worldUnload", () => {
   StormBottleFull = false
   ThunderBottleFilled = false
   HurricaneBottleFilled = false
   AllowChatMessage = true
   AllowChatMessageEOR = true
});