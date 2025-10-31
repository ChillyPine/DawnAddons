import settings from '../../config'


let reloadBlock = true;
setTimeout(() => reloadBlock = false, 5000); 

// Utility function to create action buttons
function createActionButtons(player) {
    const buttons = [
        new TextComponent(`&6[DA] &b${player} &f» `),
        new TextComponent("&a[PV] ")
            .setClick("run_command", `/pv ${player}`)
            .setHover("show_text", `&aView &b${player}'s &aprofile`),
        "&7❘ ",
        new TextComponent("&c[Kick] ")
            .setClick("run_command", `/p kick ${player}`)
            .setHover("show_text", `&cKick &b${player}`),
        "&7❘ ",
        new TextComponent("&4[Block] ")
            .setClick("run_command", `/ignore add ${player}`)
            .setHover("show_text", `&4Block &b${player}`),
        "&7❘ ",
        new TextComponent(settings().showmorepllist ? "&d[SL]" : "&d[Shitterlist]")
            .setClick("run_command", `/shitter add ${player}`)
            .setHover("show_text", `&dAdd &b${player} &dto Shitter List`)

    ];

    // Add Promote and Transfer buttons if enabled in settings()
    if (settings().showmorepllist) {
        buttons.push(
            "&7 ❘ ",
            new TextComponent("&b[PM] ")
                .setClick("run_command", `/p promote ${player}`)
                .setHover("show_text", `&bPromote &b${player} &bto Mod`),
            "&7❘ ",
            new TextComponent("&6[PT] ")
                .setClick("run_command", `/p transfer ${player}`)
                .setHover("show_text", `&6Transfer party to &b${player}`)
        );
    }

    return new Message(...buttons);
}

// Party Leader Detection
register('chat', (event) => {
    if (!settings().BetterPL || reloadBlock) return;

    const message = ChatLib.getChatMessage(event);
    const match = message.match(/^Party Leader: \[(.*?)\] (\w+) ●$/);

    if (match) {
        const leader = match[2];
        setTimeout(() => ChatLib.chat(createActionButtons(leader)), 100);
    }
})

// Party Moderators Detection
register('chat', (event) => {
    if (!settings().BetterPL || reloadBlock) return;

    const message = ChatLib.getChatMessage(event);
    if (!message.startsWith("Party Moderators:")) return;

    const cleaned = message.replace("Party Moderators: ", "").trim();
    const entries = cleaned.split(" ●").filter(s => s.trim().length > 0);

    for (const entry of entries) {
        const parts = entry.trim().split(" ");
        const mod = parts[parts.length - 1];
        setTimeout(() => ChatLib.chat(createActionButtons(mod)), 100);
    }
})

// Party Members Detection
register('chat', (event) => {
    if (!settings().BetterPL || reloadBlock) return;

    const message = ChatLib.getChatMessage(event);
    if (!message.startsWith("Party Members:")) return;

    const cleaned = message.replace("Party Members: ", "").trim();
    const entries = cleaned.split(" ●").filter(s => s.trim().length > 0);

    for (const entry of entries) {
        const parts = entry.trim().split(" ");
        const member = parts[parts.length - 1];
        setTimeout(() => ChatLib.chat(createActionButtons(member)), 100);
    }
})
