import settings from '../../config'
import { getIGN } from "../../utils/Function";
import { isInDungeon } from "../../utils/Utils";

register('chat', (player) => {
    if (!settings().customDeathMessageToggle) return;
    if (!isInDungeon()) return;
    player = getIGN(player);
    deathMessage = settings().customDeathMessage.replace("{player}", player);
    setTimeout(() => {  
        ChatLib.command(`pc ${deathMessage}`);
    }, 200);
}).setCriteria(/^ ☠ (\S+).+/)