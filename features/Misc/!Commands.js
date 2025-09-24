import settings from '../../config'
import { getIGN } from "../../utils/Function";


register('chat', (player) => {
    if(settings().dtnoti)
        ChatLib.command('pc ゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゛゜゛███゛゜█████゛゜█゛゜█゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゜゛゜█゜゛█゛゜゛█゜゛゜゛█゜゛█゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛ ゛゜゛█゛゜█゜゛゜█゛゜゛゜█゛゜█゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜ ゜゛゜█゜゛█゛゜゛█゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛゜゛ ゛゜゛███゛゜゛゜█゛゜゛゜█゛゜█゜゛゜゛゜' )

}).setCriteria("Party > ${player}: !dt")


function getPlayerLocation() {
    const playerX = Math.floor(Player.getX());
    const playerY = Math.floor(Player.getY());
    const playerZ = Math.floor(Player.getZ());
    return `x: ${playerX} y: ${playerY} z: ${playerZ}`;
}

//FUN FUNCTIONS
register("chat", () => {
    if (!settings().playercoords) return;
    const location = getPlayerLocation(); 
    ChatLib.command(`pc ${location}`);

}).setCriteria("Party > ${player}: !coords")

register("chat", () => {
    if (!settings().coinflip) return;
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    ChatLib.command(`pc Flipped ${outcome}`);

}).setCriteria("Party > ${player}: !coinflip")

//DICE ROLLS
register("chat", () => {
    if (!settings().roll) return;
    const roll = Math.floor(Math.random() * 6) + 1; 
    ChatLib.command(`pc Rolled a ${roll}`);
}).setCriteria("Party > ${player}: !roll d6")

register("chat", () => {
    if (!settings().roll) return;
    const roll = Math.floor(Math.random() * 4) + 1; 
    ChatLib.command(`pc Rolled a ${roll}`);
}).setCriteria("Party > ${player}: !roll d4")

register("chat", () => {
    if (!settings().roll) return;
    const roll = Math.floor(Math.random() * 10) + 1; 
    ChatLib.command(`pc Rolled a ${roll}`);
}).setCriteria("Party > ${player}: !roll d10")

register("chat", () => {
    if (!settings().roll) return;
    const roll = Math.floor(Math.random() * 12) + 1; 
    ChatLib.command(`pc Rolled a ${roll}`);
}).setCriteria("Party > ${player}: !roll d12")

register("chat", () => {
    if (!settings().roll) return;
    const roll = Math.floor(Math.random() * 20) + 1; 
    ChatLib.command(`pc Rolled a ${roll}`);
}).setCriteria("Party > ${player}: !roll d20")

register("chat", () => {
    if (!settings().eightball) return;
    const responses = [
        "Yes, definitely!", "No way!", "Ask again later.", 
        "It is certain.", "Very doubtful.", "Outlook not so good.",
        "Signs point to yes.", "Don't count on it."
    ];
    const answer = responses[Math.floor(Math.random() * responses.length)];
    ChatLib.command(`pc Magic 8-Ball says: ${answer}`);
}).setCriteria("Party > ${player}: !8ball")

register("chat", (ign, player) => {
    if (!settings().insult) return;

    // Define the insults
    const insults = [
        "You fight like a baby zombie!",
        "Did you learn your PvP skills from a villager?",
        "Even a Creeper could beat you in a staring contest.",
        "Your armor has as much style as a dirt block!",
        "You have the luck of a player mining in the gold mines!",
        "You fight like you're trying to pet a creeper!",
        "If I had a nickle for every time you made me laugh, I'd have 2 nickles, which isn't alot but its weird that it happened twice!",
        "You'd lose a duel against a hub NPC!",
        "You have more deaths than a Bat in the Spooky Festival!",
        "Your bank has to have less coins than a new player!",
        "If you were coins, you'd be in serious debt!",
        "You make the Piggy Bank look like a Fortune 500 company!",
        "Even Necron thinks you need a shower!",
        "What color is grass again?",
        "Your armor is so bad, even a Creeper would hesitate to explode near you!",
        "You're the only player that makes a Feather Falling enchantment seem useless!",
        "You're so monke that your treecap doesn't have a cooldown!",
        "You sure your using that Term right? I could do more damage with a party napkin!",
        "Your Lily and Senither weights are somehow lower than your skill avearge!",
        "The Tank has more damage than you!"
    ];

    // Select a random insult
    const insult = insults[Math.floor(Math.random() * 20)];

    // Send the insult in party chat, mentioning the target player's name
    setTimeout(() => {
        ChatLib.command(`pc ${player}, ${insult}`);
    }, 100);
}).setCriteria("Party > ${ign}: !insult ${player}")






//PARTY FUNCTIONS
register("chat", (player) => {
    if (!settings().ptme) return; 
    player = getIGN(player);

    setTimeout(() => {
        ChatLib.command(`p transfer ${player}`)
    }, 100);

}).setCriteria("Party > ${player}: !ptme")

register("chat", (player) => {
    if (!settings().allinv) return; 
    setTimeout(() => {
        ChatLib.command("p setting allinvite")
    }, 100);

}).setCriteria("Party > ${player}: !allinv")

register("chat", (player) => {
    if (!settings().warp) return; 
    setTimeout(() => {
        ChatLib.command("p warp")
    }, 100);

}).setCriteria("Party > ${player}: !warp")

//Real TPS

register("chat", () => {
    if (!settings().TPScheck) return;

    // Define the TPS/M7-themed comebacks
    const tpsList = [
        // Original TPS jokes
        "Yeah, I'm holding the server together with duct tape and hope.",
        "It's not good, it's optimal.",
        "TPS is a lifestyle, not a number.",
        "Shhh... don't expose my potato-powered server.",
        "I like my TPS like I like my coffee laggy and unpredictable.",
        "Lag is just part of the skill gap.",
        "Don't worry, it's a feature, not a bug.",
        "This lag is a skill issue for the server.",
        "I don't lag, I just move through time differently.",
        "Is this sever running on a microwave?",

        // M7-Specific TPS Jokes
        "This TPS is lower than a tank's DPS in phase 5.",
        "I've seen snails clear M7 faster than this TPS.",
        "This runs got more slideshow than a school project.",
        "The only thing slower than this TPS is a healer queuing solo.",
        "This isn't M7, it's M7: Time-Lapse Edition.",
        "The Shadow Assassin had time to retire during this run.",
        "The wither miners are moving in Morse code at this point.",
        "Even Goldor gave up and left the dungeon early."
    ];

    // Select a random comeback
    const tpsLine = tpsList[Math.floor(Math.random() * tpsList.length)];

    // Send the message in party chat
    setTimeout(() => {
        ChatLib.command(`pc ${tpsLine}`);
    }, 100);
}).setCriteria("Party > ${ign}: !tps")

register("chat", (player) => {
    ChatLib.command(`pc 1.0.6`);
}).setCriteria("Party > ${player}: !version")
