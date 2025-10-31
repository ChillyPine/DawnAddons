import settings from '../../config'
import { getIGN } from "../../utils/Function";
import { shitterData } from '../../data/data';

const prefix = "&5[Dawn&6Addons&5]";
let ShitterMessage = "";

// Check if player is in the blacklist
function checkBlacklist(player) {
    const blacklistArray = shitterData.blacklist || [];
    const playerLower = player.toLowerCase();
    return blacklistArray.some(name => name.toLowerCase() === playerLower);
}

// Send to party
register('chat', (player) => {
    if (!settings().anncshitter) return;
    player = getIGN(player);
    if (!checkBlacklist(player)) return;
    
    ShitterMessage = settings().customShitterMessage.replace("{player}", player);
    ChatLib.command(`pc ${ShitterMessage}`);
}).setCriteria("Party Finder > ${player} joined the dungeon group! (${class} Level ${*})")

// Auto kick
register('chat', (player) => {
    if (!settings().kickNotWelcomePlayer) return;
    player = getIGN(player);
    if (!checkBlacklist(player)) return;
        
    if (settings().kickNotWelcomePlayer) {
        setTimeout(() => {
            ChatLib.command(`p kick ${player}`);
        }, 350);
    }
}).setCriteria("Party Finder > ${player} joined the dungeon group! (${class} Level ${*})")

// Scan players joining via not PF
register('chat', (player) => {
    if (!settings().anncshitter) return;
    player = getIGN(player);
    if (!checkBlacklist(player)) return;
    ShitterMessage = settings().customShitterMessage.replace("{player}", player);
    ChatLib.command(`pc ${ShitterMessage}`);
}).setCriteria("${player} joined the party.");


// Utility function to create quick party finder action buttons
function createQuickPartyFinderActions(player) {
    return new Message(
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
        new TextComponent("&d[Shitterlist] ")
            .setClick("run_command", `/shitter add ${player}`)
            .setHover("show_text", `&dAdd &b${player} &dto Shitter List`),
        "&7❘ "
    );
}

// Quick Party Finder Actions
register('chat', (player) => {
    if (!settings().quickpartyact) return;

    setTimeout(() => {
        ChatLib.chat(createQuickPartyFinderActions(player));
    }, 100);
}).setCriteria("Party Finder > ${player} joined the dungeon group! (${class} Level ${*})")

