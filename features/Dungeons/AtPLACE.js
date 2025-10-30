import settings from '../../config'

let lastMessageTime = 0; // Track the timestamp of the last message sent


register('chat', (player) => {
    hasDetectedSimonSays = false;
    hasDetectedAtee2 = false;
    hasDetectedAtee3 = false;
    hasDetectedINCore = false;
    hasDetectedInstaMid = false; 
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

const isAtSimonSays = () => 
    Player.getY() === 120 && Player.getX() >= 106 && Player.getX() <= 110 && Player.getZ() >= 92 && Player.getZ() <= 95;

const isAtee2 = () => 
    Player.getY() === 109 && Player.getX() >= 56 && Player.getX() <= 60 && Player.getZ() >= 129 && Player.getZ() <= 132;

const isAtee3 = () => 
    Player.getY() === 109 && Player.getX() >= 1 && Player.getX() <= 3 && Player.getZ() >= 97 && Player.getZ() <= 100;

const isINCore = () => 
    Player.getY() === 115 && Player.getX() >= 47 && Player.getX() <= 61 && Player.getZ() >= 55 && Player.getZ() <= 60;

const isINCore2 = () => 
    Player.getY() === 114 && Player.getX() >= 47 && Player.getX() <= 61 && Player.getZ() >= 55 && Player.getZ() <= 60;

const isAtInstaMid = () => 
    Player.getY() === 65 && Player.getX() >= 46 && Player.getX() <= 62 && Player.getZ() >= 68 && Player.getZ() <= 84;

const atgreenpillar = () => 
    Player.getY() === 169 && Player.getX() >= 44 && Player.getX() <= 48 && Player.getZ() >= 39 && Player.getZ() <= 43;

const atgreenpad = () => 
    Player.getY() === 170 && Player.getX() >= 25 && Player.getX() <= 40 && Player.getZ() >= 5 && Player.getZ() <= 21;

const atyellowpillar = () => 
    Player.getY() === 169 && Player.getX() >= 44 && Player.getX() <= 48 && Player.getZ() >= 63 && Player.getZ() <= 67;

const atyellowpad = () => 
    Player.getY() === 170 && Player.getX() >= 25 && Player.getX() <= 40 && Player.getZ() >= 86 && Player.getZ() <= 101;

const atpurplepillar = () => 
    Player.getY() === 169 && Player.getX() >= 98 && Player.getX() <= 102 && Player.getZ() >= 64 && Player.getZ() <= 67;

const atpurplepad = () => 
    Player.getY() === 170 && Player.getX() >= 106 && Player.getX() <= 121 && Player.getZ() >= 86 && Player.getZ() <= 101;

let hasDetectedSimonSays = false;
let hasDetectedAtee2 = false;
let hasDetectedAtee3 = false;
let hasDetectedINCore = false;
let hasDetectedInstaMid = false;
let hasDetectedGreenPillar = false;
let hasDetectedyellowPillar = false;
let hasDetectedpurplePillar = false;
let hasDetectedGreenPad = false;
let hasDetectedyellowpad = false;
let hasDetectedpurplepad = false;

const resetFlags = () => {
    if (!atgreenpillar()) hasDetectedGreenPillar = false;
    if (!atgreenpad()) hasDetectedGreenPad = false;
    if (!atyellowpillar()) hasDetectedyellowPillar = false;
    if (!atyellowpad()) hasDetectedyellowpad = false;
    if (!atpurplepillar()) hasDetectedpurplePillar = false;
    if (!atpurplepad()) hasDetectedpurplepad = false;
};

const canSendMessage = () => {
    const now = Date.now();
    if (now - lastMessageTime >= 2000) {
        lastMessageTime = now;
        return true;
    }
    return false;
};

const checkLocation = () => {
    if (isAtSimonSays() && !hasDetectedSimonSays && settings().atsimonsays && canSendMessage()) {
        ChatLib.command('pc At Simon Says');
        hasDetectedSimonSays = true;
    } else if (isAtee2() && !hasDetectedAtee2 && settings().atee2 && canSendMessage()) {
        ChatLib.command('pc At ee2');
        hasDetectedAtee2 = true;
    } else if (isAtee3() && !hasDetectedAtee3 && settings().atee3 && canSendMessage()) {
        ChatLib.command("pc At ee3");
        hasDetectedAtee3 = true;
    } else if ((isINCore() || isINCore2()) && !hasDetectedINCore && settings().atincore && canSendMessage()) {
        ChatLib.command("pc In Core");
        hasDetectedINCore = true;
    } else if (isAtInstaMid() && !hasDetectedInstaMid && settings().isAtInstaMid && canSendMessage()) {
        ChatLib.command("pc At Necron Mid");
        hasDetectedInstaMid = true;
    } else if (atgreenpillar() && !hasDetectedGreenPillar && settings().underpillar && canSendMessage()) {
        ChatLib.command("pc Under Green Pillar");
        hasDetectedGreenPillar = true;
    } else if (atgreenpad() && !hasDetectedGreenPad && settings().underpillarPAD && canSendMessage()) {
        ChatLib.command("pc At Green Pad");
        hasDetectedGreenPad = true;
    } else if (atyellowpillar() && !hasDetectedyellowPillar && settings().underpillar && canSendMessage()) {
        ChatLib.command("pc Under Yellow Pillar");
        hasDetectedyellowPillar = true;
    } else if (atyellowpad() && !hasDetectedyellowpad && settings().underpillarPAD && canSendMessage()) {
        ChatLib.command("pc At Yellow Pad");
        hasDetectedyellowpad = true;
    } else if (atpurplepillar() && !hasDetectedpurplePillar && settings().underpillar && canSendMessage()) {
        ChatLib.command("pc Under Purple Pillar");
        hasDetectedpurplePillar = true;
    } else if (atpurplepad() && !hasDetectedpurplepad && settings().underpillarPAD && canSendMessage()) {
        ChatLib.command("pc At Purple Pad");
        hasDetectedpurplepad = true;
    }
};

register("worldUnload", () => {
    hasDetectedSimonSays = false;
    hasDetectedAtee2 = false;
    hasDetectedAtee3 = false;
    hasDetectedINCore = false;
    hasDetectedInstaMid = false;
    hasDetectedGreenPillar = false;
    hasDetectedGreenPad = false;
    hasDetectedyellowPillar = false;
    hasDetectedyellowpad = false;
    hasDetectedpurplePillar = false;
    hasDetectedpurplepad = false;
});

register("step", () => {
    resetFlags();
    checkLocation();
}).setDelay(0.5);

// settings() toggle if needed
const checkEE2Players = true;

// EE2 coordinate bounds
const isEntityAtEE2 = (x, y, z) => {
    return (
        y === 109 &&
        x >= 56 && x <= 60 &&
        z >= 129 && z <= 132
    );
};

// WORKS PROFF ON CONCERPT WORKS
/*register("renderWorld", () => {
    if (!checkEE2Players) return;

    World.getAllEntities().forEach(entity => {
        if (entity.getClassName() !== "EntityOtherPlayerMP") return;
        if (entity.getName() === Player.getName()) return;

        const x = entity.getX();
        const y = entity.getY();
        const z = entity.getZ();

        if (isEntityAtEE2(x, y, z)) {
            ChatLib.chat(`&b${entity.getName()} is at EE2!`);
        }
    });
});*/
