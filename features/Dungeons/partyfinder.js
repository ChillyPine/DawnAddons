import { decodeNumeral } from "../../../BloomCore/utils/Utils"

import settings from '../../config'
import Data from "../../utils/data"
import PartyMember from "../../utils/partymember"

const registerPartyFinderTriggers = () => {
    register("itemTooltip", (lore, item) => {
        if(!settings().partyfinder && !settings().missingclasses) {
            return
        }
        const itemName = lore[0]
        lore = lore.slice(1)
        lore = lore.filter(x => !/minecraft:/.test(x) && !/NBT:/.test(x))

        const floor = getFloor(lore)
        const dungeonType = getDungeonType(lore)
        let hasChanged = false

        if(settings().missingclasses && dungeonType == "master_catacombs" && [4, 6, 7].includes(floor) && !hasMissingClasses(lore)) {
            const missingClasses = getMissingClasses(lore)
            lore.push(`§e§lMissing:§r§f ${missingClasses.join(", ")}`)
            item.setLore(lore)
        }

        if(!settings().partyfinder) {
            return
        }
        lore = lore.map(x => {
            if(!/§5§o §\w\w+§f: §\w\w+§b/.test(x)) {
                return x.replace(/§5§o/, "")
            }

            const username = getUsername(x)
            if(!Data.players[username]) {
                Data.players[username] = new PartyMember(username)
            }
            const player = Data.players[username]

            if(hasCustomSuffix(x) && !player.hasChanged()) {
                return x
            }

            if(player.uuid == null) {
                player.init()
            }

            hasChanged = true
            return createSuffix(x, player, floor, dungeonType)
        })
        if(hasChanged) {
            item.setLore(lore)
        }
    });
}

const hasMissingClasses = (lore) => {
    return lore.some(x => /Missing:§r/.test(x))
}

const hasCustomSuffix = (msg) => {
    return /§0§r§r/.test(msg)
}

const removeSuffix = (msg) => {
    return msg.replace(/ \(§e\d+§b\)|§0§r§r.*/, "")
}
const colorCodes = [
    "§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7",
    "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f"
];

const getColorCode = (index) => {
    if (typeof index !== "number" || index < 0 || index >= colorCodes.length) {
        console.error(`Invalid color index: ${index}`);
        return "§f"; // Default to white.
    }
    return colorCodes[index];
};


const createSuffix = (msg, player, floor, dungeonType) => {
    if (!player) {
        return msg;
    }

    let suffix = "§0§r§r";

    if (settings().partyfinderClassLevel) {
        suffix += ` §b(§e${getClassLevel(msg) ?? "?"}§b)§r`;
    }

    if (settings().partyfinderCata) {
        const cataLevelColor = getColorCode(settings().catalvlcolor);
        if (!settings().partyfinderClassLevel && !player.dungeons.catalevel) {
            suffix += ` §b(§c${getClassLevel(msg) ?? "?"}§b)§r`;
        } else {
            suffix += ` §8[${cataLevelColor}${player.dungeons.catalevel ?? "Fetching API"}§8]§r`;
        }
    }

    if (settings().partyfinderSecrets) {
        const secretsColor = getColorCode(settings().secretscolor);
        suffix += ` §8[${secretsColor}${player.dungeons.secrets ?? "?"}§8]§r`;
    }

    if (settings().partyfinderSecretAverage) {
        const secretAvgColor = getColorCode(settings().secretavgcolor);
        suffix += ` §8[${secretAvgColor}${player.dungeons.secretAverage ?? "?"}§8]§r`;
    }

    if (settings().partyfinderF7PB) {
        const pbColor = getColorCode(settings().pbcolor);
        suffix += ` §8[${pbColor}${player.dungeons.pb[dungeonType][floor]?.["S+"] ?? "?"}§8]§r`;
    }

    return `${removeSuffix(msg)}${suffix}`;
};




const getFloor = (lore) => {
    const floorLine = lore.find(x => /§7Floor: §bFloor /.test(x))
    if(floorLine) {
        let floor = floorLine.split(" ").pop()
        if(floor != parseInt(floor)) {
            floor = decodeNumeral(floor)
        }
        return floor
    }
    return 0
}

const getDungeonType = (lore) => {
    if(lore.some(x => /§5§o§7Dungeon: §bMaster Mode( The)* Catacombs/.test(x))) {
        return "master_catacombs"
    }
    return "catacombs"
}

const getClassLevel = (msg) => {
    return msg.match(/\(§e(\d+)§b\)/)[1]
}

const getUsername = (msg) => {
    return msg.match(/§5§o §\w(\w+)§f:/)[1]
}

const getMissingClasses = (lore) => {
    let classes = ["Archer", "Berserk", "Mage", "Tank", "Healer"]
    lore.forEach(x => {
        const match = x.match(/§5§o §\w\w+§f: §\w(\w+)§\w \(§e\d+§b\)/)
        if(match) {
            classes = classes.filter(x => x != match[1])
        }
    })
    return classes
}

module.exports = { registerPartyFinderTriggers }
