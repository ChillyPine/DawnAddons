import settings from '../../config'
import { getIGN } from "../../utils/Function";
import { isInDungeon } from "../../utils/Utils";

register('chat', (player) => {
    if (!isInDungeon()) return;
    player = getIGN(player);
    deathMessage = settings().customDeathMessage.replace("{player}", player);
    setTimeout(() => {  
        ChatLib.command(`pc ${deathMessage}`);
    }, 300);
}).setCriteria(/^ ☠ (\S+).+/)