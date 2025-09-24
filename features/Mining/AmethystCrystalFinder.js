import settings from '../../config'


const prefix = "&5[Dawn&6Addons&5]";

function getModifiedLocation() {
    // Get player coordinates
    const playerX = Math.floor(Player.getX());
    const playerY = Math.floor(Player.getY());
    const playerZ = Math.floor(Player.getZ());

    // Calculate new coordinates
    const newX = playerX + 61;
    const newY = playerY - 48;
    const newZ = playerZ + 18;

    return `&fCheese found at: x: ${newX}, y: ${newY}, z: ${newZ}`;
}


register('chat', (player) => {
    const modifiedLocationMessage = getModifiedLocation();

    if (!settings().hideclientname) {
        setTimeout(() => {
            ChatLib.chat(prefix + modifiedLocationMessage);
        }, 200);
    } 
}).setCriteria("[NPC] Kalhuiki Door Guardian: A Jungle Key! I will open the door for you.")