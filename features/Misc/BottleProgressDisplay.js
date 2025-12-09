import settings from '../../config'
import PogObject from "PogData";
import { DraggableGui } from "../../../Atomx/draggable/DraggableGui";
import { ItemUtils } from "../../utils/Utils";

function getBottleCharge(itemName) {
    const item = ItemUtils.InvCheck(itemName);
    if (!item) return null;
    
    const lore = item.getLore();
    const chargeLine = lore.find((line) => line.includes("Charge:"));
    
    if (!chargeLine) return null;
    
    // Extract XXXX/XXXX pattern from the line
    const chargeMatch = chargeLine.match(/(\d+\/\d+)/);
    return chargeMatch ? chargeMatch[1] : null;
}

register("tick", () => {
    if(!settings().BottleDisplay) return
    if (ItemUtils.InvCheck("Empty Storm Bottle")) {
        Chatlib.Chat("FOUND BOTTLE")

        const charge = getBottleCharge("Empty Storm Bottle");
        if (charge) {
            Chatlib.Chat("FOUND CHARGE")
            Client.showTitle(`${charge}`, "", 0, 10, 0);
        }
    }
})

register("tick", () => {
    if(!settings().BottleDisplay) return
    if (ItemUtils.InvCheck("Thunder in a Bottle") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYour Thunder Bottle Has Filled!");
    }
})

register("tick", () => {
    if(!settings().BottleDisplay) return
    if (ItemUtils.InvCheck("Hurricane in a Bottle") && AllowChatMessage) {
        ChatLib.chat(prefix + " &fYour Hurricane Bottle Has Filled! &7WOW!");
    }
})