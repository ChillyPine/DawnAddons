import settings from '../../config'
import RenderLib from '../../../RenderLib/index'
import { playerESPData } from '../../data/data.js'

const prefix = "&5[Dawn&6Addons&5]";

const espwhitelist = {
    "add": function(...players) {
        // Check if any valid usernames were provided
        if (!players || players.length === 0 || players.every(p => !p || p.trim() === "")) {
            return ChatLib.chat(`${prefix} &cYou must provide at least one username to add.`);
        }

        // Get the array directly from playerESPData
        let whitelistArray = playerESPData.playerWhitelist || [];

        players.forEach(player => {
            const playerName = player.trim();
            if (playerName === "") return;

            const lowercasePlayerName = playerName.toLowerCase();
            if (!whitelistArray.some(name => name.toLowerCase() === lowercasePlayerName)) {
                whitelistArray.push(playerName);
                ChatLib.chat(`${prefix} &fAdded &b[${playerName}] &fto the ESP whitelist.`);
            } else {
                ChatLib.chat(`${prefix} &b[${playerName}] &fis already on the ESP whitelist.`);
            }
        });

        whitelistArray.sort();
        playerESPData.playerWhitelist = whitelistArray;
        playerESPData.save(); // Save to JSON file
    },

    "remove": function(...players) {
        if (!players || players.length === 0 || players.every(p => !p || p.trim() === "")) {
            return ChatLib.chat(`${prefix} &cYou must provide at least one username.`);
        }

        let whitelistArray = playerESPData.playerWhitelist || [];

        if (whitelistArray.length === 0) {
            return ChatLib.chat(`${prefix} &rThe ESP whitelist is currently empty.`);
        }

        players.forEach(player => {
            const playerName = player.trim().toLowerCase();
            const index = whitelistArray.findIndex(name => name.toLowerCase() === playerName);

            if (index !== -1) {
                const removedName = whitelistArray[index];
                whitelistArray.splice(index, 1);
                ChatLib.chat(`${prefix} &fRemoved &b[${removedName}] &ffrom the ESP whitelist.`);
            } else {
                ChatLib.chat(`${prefix} &b[${player}] &fis not found in the ESP whitelist.`);
            }
        });

        playerESPData.playerWhitelist = whitelistArray;
        playerESPData.save(); // Save to JSON file
    },

    "list": function(page) {
        const whitelistArray = playerESPData.playerWhitelist || [];
        
        if (whitelistArray.length === 0) {
            return ChatLib.chat(`${prefix} &fThe ESP whitelist is currently empty!`);
        }

        const pageSize = 8;
        const totalPages = Math.ceil(whitelistArray.length / pageSize);
        const currentPage = parseInt(page) || 1;

        if (currentPage > totalPages || currentPage < 1) {
            return ChatLib.chat(`${prefix} &fInvalid page number!`);
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = currentPage * pageSize;
        const displayedWhitelist = whitelistArray.slice(startIndex, endIndex);

        ChatLib.chat("&r&r&5&m-----------------------------------------------------");

        const prevPage =
            currentPage > 1
                ? new TextComponent("&r&e&l<<")
                    .setClick("run_command", `/playeresp list ${currentPage - 1}`)
                    .setHover("show_text", "Click to go to previous page")
                : "  ";

        const nextPage =
            currentPage < totalPages
                ? new TextComponent("&r&e&l>>")
                    .setClick("run_command", `/playeresp list ${currentPage + 1}`)
                    .setHover("show_text", "Click to go to next page")
                : "  ";

        const header = new Message(
            `                       `,
            prevPage,
            ` &6ESP Whitelist (Page ${currentPage}/${totalPages}) `,
            nextPage
        );
        ChatLib.chat(header);

        displayedWhitelist.forEach(player => {
            const line = new Message(
                `                                     &7- `,
                new TextComponent(`&b${player}`)
                    .setClick("run_command", `/playeresp remove ${player}`)
                    .setHover("show_text", `Click to remove &b[${player}] &ffrom the ESP whitelist`)
            );
            ChatLib.chat(line);
        });

        ChatLib.chat("&r&r&5&m-----------------------------------------------------");
    },

    "reset": function() {
        // Show confirmation prompt
        const confirmMessage = new Message(
            `${prefix} &cAre you sure you want to reset the ESP whitelist? `,
            new TextComponent("&a&l[YES]")
                .setClick("run_command", `/playeresp resetconfirm`)
                .setHover("show_text", "&aClick to confirm reset"),
            " ",
            new TextComponent("&c&l[NO]")
                .setClick("run_command", `/playeresp resetcancel`)
                .setHover("show_text", "&cClick to cancel")
        );
        ChatLib.chat(confirmMessage);
    },

    "resetconfirm": function() {
        playerESPData.playerWhitelist = [];
        playerESPData.save(); // Save to JSON file
        ChatLib.chat(`${prefix} &fReset the ESP whitelist.`);
    },

    "resetcancel": function() {
        ChatLib.chat(`${prefix} &fReset cancelled.`);
    }
}

// Register Main Command
register("command", (actionType, ...players) => {
    if (!actionType) {
        return ChatLib.chat(`${prefix} &cUsage: /playeresp <add|remove|list|reset> [player]`);
    }

    if (actionType == "add") espwhitelist.add(...players);
    else if (actionType == "remove") espwhitelist.remove(...players);
    else if (actionType == "list") espwhitelist.list(players[0]);
    else if (actionType == "reset") espwhitelist.reset();
    else if (actionType == "resetconfirm") espwhitelist.resetconfirm();
    else if (actionType == "resetcancel") espwhitelist.resetcancel();
    else ChatLib.chat(`${prefix} &cCommand not recognized. Usage: /playeresp <add|remove|list|reset> [player]`);
}).setName("playeresp").setAliases(["pesp", "dawnaddonsespwhitelist"]);

function checkPlayerEspList(player) {
    const playerArray = playerESPData.playerWhitelist || [];
    const playerLower = player.toLowerCase();
    return playerArray.some(name => name.toLowerCase() === playerLower);
}

// Player ESP
register("renderWorld", () => {
     if (!settings().playeresp) return;

     World.getAllEntities().forEach(entity => {
        if (entity.getClassName() !== "EntityOtherPlayerMP") return;
        const name = entity.getName();
        if (name === Player.getName()) return;

        switch (settings().playerespmode) {
            case 0: break;
            case 1: 
                if (!checkPlayerEspList(name)) return;
                break;
            default: return;
        }
       RenderLib.drawEspBox(entity.getX(), entity.getY(), entity.getZ(), 1, 2, 0, 0.7, 0, 1, true);
     });
 });