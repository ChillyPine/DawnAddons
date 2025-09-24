import settings from '../../config'
import PartyMember from "../../utils/partymember"
import Data from "../../utils/data"
import { timeToString } from "../../utils/calc"

const autokick = register("chat", (username, dungeonClass, classLevel) => {
    if(!settings().autokick) {
        return
    }
    if(!Data.players[username]) {
        Data.players[username] = new PartyMember(username)
    }
    const player = Data.players[username]
    if(player.uuid == null) {
        player.init().then(() => {
            checkAndKick(player);
        })
    } else {
        checkAndKick(player);
    }
}).setCriteria(/&dParty Finder &r&f> &r&\w(\w+) &r&ejoined the dungeon group! \(&r&b(\w+) Level (\w+)&r&e\)&r/);

const checkAndKick = (player) => {
    const pb = getRawPB(settings().selectedfloor, player)
    const requiredPB = getRequiredPB()
    ChatLib.chat(player.toString(settings().selectedfloor, timeToString(pb)))
    if(pb && requiredPB && pb > requiredPB) {
        ChatLib.chat(` UH OH! ${player.name} (PB: §e${timeToString(pb)}§r | Req: §e${timeToString(requiredPB)}§r)`)
        if(settings().kickmessage) {
            Data.staggerChatMessage(() => {
                ChatLib.command(`pc [DA] UH OH! ${player.name} (PB: ${timeToString(pb)} | Req: ${timeToString(requiredPB)})`)
            })
        }
        Data.staggerChatMessage(() => {
            ChatLib.command(`party kick ${player.name}`)
        })
    }
}

const getRawPB = (selectedfloor, player) => {
    switch(selectedfloor) {
        case 0:
            return player.dungeons.pb["catacombs"]["7"]["rawS+"]
        case 1:
            return player.dungeons.pb["master_catacombs"]["4"]["rawS+"]
        case 2:
            return player.dungeons.pb["master_catacombs"]["5"]["rawS+"]
        case 3:
            return player.dungeons.pb["master_catacombs"]["6"]["rawS+"]
        case 4:
            return player.dungeons.pb["master_catacombs"]["7"]["rawS+"]
        default:
            return 0
    }
}

const getRequiredPB = () => {
    requiredPB = settings().requiredPB;
    if(requiredPB == parseInt(requiredPB)) {
        return parseInt(requiredPB) * 1000
    }
    if(/^\d+:\d\d$/.test(requiredPB)) {
        const split = requiredPB.split(":")
        const ms = (parseInt(split[0]) * 60 + parseInt(split[1])) * 1000
        return ms
    }
    return null
}

module.exports = { autokick }
