import settings from '../../config'
const prefix = "&5[Dawn&6Addons&5]";


register("command", () => {
    settings().blacklistIGN = "";
    ChatLib.chat(`${prefix} &fReset the Shitter list.`);
}).setName("dawnaddons_shitterlist_reset");

register("command", (...players) => {
    let blacklistIGN = settings().blacklistIGN;
    let blacklistArray = [];

    if (blacklistIGN !== "") {
        blacklistArray = blacklistIGN.split(" ");
    }

    players.forEach(player => {
        const playerName = player.trim();

        if (playerName !== "") {
            const lowercasePlayerName = playerName.toLowerCase();

            if (!blacklistArray.some(name => name.toLowerCase() === lowercasePlayerName)) {
                blacklistArray.push(playerName);
                if (!settings().hideclientname)
                    ChatLib.chat(`${prefix} &fAdded &b[${playerName}] &fto the shitter list.`);
                if(settings().hideclientname)
                    ChatLib.chat(`${prefix2} &fAdded &b[${playerName}] &fto the shitter list.`);
            } else {
                ChatLib.chat(`&f&b[${playerName}] &fis already in the shitter list.`);
            }
        }
    });

    blacklistArray.sort();

    settings().blacklistIGN = blacklistArray.join(" ");
}).setName("shitteradd");

register("command", (...players) => {
    let blacklistIGN = settings().blacklistIGN;

    let blacklistArray = blacklistIGN.split(" ");

    players.forEach(player => {
        const playerName = player.toLowerCase();

        const index = blacklistArray.findIndex(name => name.toLowerCase() === playerName);
        if (index !== -1) {
            blacklistArray.splice(index, 1);
            if (!settings().hideclientname)
                ChatLib.chat(`${prefix} &fRemoved &b[${player}] &ffrom the shitter list.`);
            if (settings().hideclientname)
                ChatLib.chat(`${prefix2} &fRemoved &b[${player}] &ffrom the shitter list.`);
        } else {
            ChatLib.chat(`&f&b[${player}] &fis not found in the shitter list.`);
        }
    });

    settings().blacklistIGN = blacklistArray.join(" ");
}).setName("shitterremove");

register("command", (page) => {
    const blacklistIGN = settings().blacklistIGN;
    if (blacklistIGN === "") {
        if (!settings().hideclientname)
            ChatLib.chat(`${prefix} &fshitterlist is empty!`);
        if (settings().hideclientname)
            ChatLib.chat(`${prefix2} &fshitterlist is empty!`);
        return;
    }

    const blacklistArray = blacklistIGN.split(" ");
    const pageSize = 8;
    const totalPages = Math.ceil(blacklistArray.length / pageSize);
    const currentPage = parseInt(page) || 1;

    if (currentPage > totalPages || currentPage < 1) {
        if (!settings().hideclientname)
            ChatLib.chat(`${prefix} &fInvalid page number!`);
        if (settings().hideclientname)
            ChatLib.chat(`${prefix2} &fInvalid page number!`);
        return;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const displayedBlacklist = blacklistArray.slice(startIndex, endIndex);

    ChatLib.chat("&r&r&5&m-----------------------------------------------------");

    let prevPage = currentPage > 1
        ? new TextComponent("&r&e&l<<")
            .setClick("run_command", `/showshitterlist ${currentPage - 1}`)
            .setHover("show_text", `Click to go to previous page`)
        : "  ";

    let nextPage = currentPage < totalPages
        ? new TextComponent("&r&e&l>>")
            .setClick("run_command", `/showshitterlist ${currentPage + 1}`)
            .setHover("show_text", "Click to go to next page")
        : "  ";

    let show_message = new Message(
        `                       `,
        prevPage,
        ` &6Shitter List (Page ${currentPage}/${totalPages}) `,
        nextPage
    );

    ChatLib.chat(show_message);

    displayedBlacklist.forEach(player => {
        show_message = new Message(
            `                                     &7- `,
            new TextComponent(`&b${player}`)
                .setClick("run_command", `/shitterremove ${player}`)
                .setHover("show_text", `Click to remove &b[${player}] &ffrom the shitter list`),
        );

        ChatLib.chat(show_message);
    });
    ChatLib.chat("&r&r&5&m-----------------------------------------------------");
}).setName("showshitterlist");
