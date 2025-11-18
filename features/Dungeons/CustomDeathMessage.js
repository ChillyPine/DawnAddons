import settings from '../../config'
import { getIGN } from "../../utils/Function";
import { isInDungeon } from "../../utils/Utils";

register('chat', (player) => {
    if (!isInDungeon()) return;
    ChatLib.chat("check 0")
    player = getIGN(player);
    ChatLib.chat("Check 1")
    deathMessage = settings().customDeathMessage.replace("{player}", player);
    ChatLib.chat("Check 2")
    setTimeout(() => {  
        ChatLib.command(`pc ${deathMessage}`);
    }, 300);
}).setCriteria(/^ ☠ (\S+).+/)