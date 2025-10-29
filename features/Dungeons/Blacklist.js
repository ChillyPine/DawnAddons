import settings from '../../config'
import { shitterData } from '../../data/data.js'

const prefix = "&5[Dawn&6Addons&5]";

const shitter = {
    "add": function(...players) {
        // Check if any valid usernames were provided
        if (!players || players.length === 0 || players.every(p => !p || p.trim() === "")) {
            return ChatLib.chat(`${prefix} &cYou must provide at least one username to add.`);
        }

        // Get the array directly from tska
        let blacklistArray = shitterData.blacklist || [];

        players.forEach(player => {
            const playerName = player.trim();
            if (playerName === "") return;

            const lowercasePlayerName = playerName.toLowerCase();
            if (!blacklistArray.some(name => name.toLowerCase() === lowercasePlayerName)) {
                blacklistArray.push(playerName);
                ChatLib.chat(`${prefix} &fAdded &b[${playerName}] &fto the shitter list.`);
            } else {
                ChatLib.chat(`${prefix} &b[${playerName}] &fis already on the shitter list.`);
            }
        });

        blacklistArray.sort();
        shitterData.blacklist = blacklistArray;
        shitterData.save(); // Save to JSON file
    },

    "remove": function(...players) {
        if (!players || players.length === 0 || players.every(p => !p || p.trim() === "")) {
            return ChatLib.chat(`${prefix} &cYou must provide at least one username.`);
        }

        let blacklistArray = shitterData.blacklist || [];

        if (blacklistArray.length === 0) {
            return ChatLib.chat(`${prefix} &rThe shitter list is currently empty.`);
        }

        players.forEach(player => {
            const playerName = player.trim().toLowerCase();
            const index = blacklistArray.findIndex(name => name.toLowerCase() === playerName);

            if (index !== -1) {
                const removedName = blacklistArray[index];
                blacklistArray.splice(index, 1);
                ChatLib.chat(`${prefix} &fRemoved &b[${removedName}] &ffrom the shitter list.`);
            } else {
                ChatLib.chat(`${prefix} &b[${player}] &fis not found in the shitter list.`);
            }
        });

        shitterData.blacklist = blacklistArray;
        shitterData.save(); // Save to JSON file
    },

    "list": function(page) {
        const blacklistArray = shitterData.blacklist || [];
        
        if (blacklistArray.length === 0) {
            return ChatLib.chat(`${prefix} &fThe shitter list is currently empty!`);
        }

        const pageSize = 8;
        const totalPages = Math.ceil(blacklistArray.length / pageSize);
        const currentPage = parseInt(page) || 1;

        if (currentPage > totalPages || currentPage < 1) {
            return ChatLib.chat(`${prefix} &fInvalid page number!`);
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = currentPage * pageSize;
        const displayedBlacklist = blacklistArray.slice(startIndex, endIndex);

        ChatLib.chat("&r&r&5&m-----------------------------------------------------");

        const prevPage =
            currentPage > 1
                ? new TextComponent("&r&e&l<<")
                    .setClick("run_command", `/shitter list ${currentPage - 1}`)
                    .setHover("show_text", "Click to go to previous page")
                : "  ";

        const nextPage =
            currentPage < totalPages
                ? new TextComponent("&r&e&l>>")
                    .setClick("run_command", `/shitter list ${currentPage + 1}`)
                    .setHover("show_text", "Click to go to next page")
                : "  ";

        const header = new Message(
            `                       `,
            prevPage,
            ` &6Shitter List (Page ${currentPage}/${totalPages}) `,
            nextPage
        );
        ChatLib.chat(header);

        displayedBlacklist.forEach(player => {
            const line = new Message(
                `                                     &7- `,
                new TextComponent(`&b${player}`)
                    .setClick("run_command", `/shitter remove ${player}`)
                    .setHover("show_text", `Click to remove &b[${player}] &ffrom the shitter list`)
            );
            ChatLib.chat(line);
        });

        ChatLib.chat("&r&r&5&m-----------------------------------------------------");
    },

    "reset": function() {
        // Show confirmation prompt
        const confirmMessage = new Message(
            `${prefix} &cAre you sure you want to reset the shitter list? `,
            new TextComponent("&a&l[YES]")
                .setClick("run_command", `/shitter resetconfirm`)
                .setHover("show_text", "&aClick to confirm reset"),
            " ",
            new TextComponent("&c&l[NO]")
                .setClick("run_command", `/shitter resetcancel`)
                .setHover("show_text", "&cClick to cancel")
        );
        ChatLib.chat(confirmMessage);
    },

    "resetconfirm": function() {
        shitterData.blacklist = [];
        shitterData.save(); // Save to JSON file
        ChatLib.chat(`${prefix} &fReset the shitter list.`);
    },

    "resetcancel": function() {
        ChatLib.chat(`${prefix} &fReset cancelled.`);
    }
}

// Register Main Command
register("command", (actionType, ...players) => {
    if (!actionType) {
        return ChatLib.chat(`${prefix} Command not recognized. Run /da help for a list of commands.`);
    }

    if (actionType == "add") shitter.add(...players);
    else if (actionType == "remove") shitter.remove(...players);
    else if (actionType == "list") shitter.list(players[0]);
    else if (actionType == "reset") shitter.reset();
    else if (actionType == "resetconfirm") shitter.resetconfirm();
    else if (actionType == "resetcancel") shitter.resetcancel();
    else ChatLib.chat(`${prefix} Command not recognized. Run /da help for a list of commands.`);
}).setName("shitter");