import settings from '../../config'
import { getIGN } from "../../utils/Function";
import { checkInWorld } from "../../utils/Location";
import { registerEventListener } from "../../utils/EventListener";

registerEventListener(() => settings().customDeathMessage !== "" && checkInWorld("Dungeon"),
    register("chat", (message) => {
        const words = message.split(" ");

        const player = getIGN(words[0]);
        if (player === "You" || player === Player.getName()) return;

        let randomDeathMessage = "";
        if (settings().customDeathMessage.includes("|")) {
            const messageArr = settings().customDeathMessage.split("|");
            randomDeathMessage = messageArr[Math.floor(Math.random() * messageArr.length)].replace("{player}", player);
        }
        else {
            randomDeathMessage = settings().customDeathMessage.replace("{player}", player);
        }

        setTimeout(() => {
            ChatLib.command(`pc ${randomDeathMessage}`);
        }, 300);
    }).setCriteria(" ☠ ${message} became a ghost.")
);