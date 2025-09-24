import settings from '../../config'


// Function to get current player coordinates
function getPlayerLocation() {
    const playerX = Math.floor(Player.getX());
    const playerY = Math.floor(Player.getY());
    const playerZ = Math.floor(Player.getZ());
    return `x: ${playerX} y: ${playerY} z: ${playerZ}`;
}

// Send chat message when vanquisher is spawned

register('chat', () => {
    if (settings().sendvanqcoords) {
        const location = getPlayerLocation(); 
        if (settings().sendvanqcoordsAC){
            ChatLib.command(`ac [!] Vanquisher is spawned at [${location} ] [!]`)
        }
        if (settings().sendvanqcoordsPC) {
            setTimeout(() => {
                ChatLib.command(`pc [!] Vanquisher is spawned at [${location} ] [!]`)
            }, 100);
        } else {
            if (settings().sendvanqcoordsPC) return;
            ChatLib.command(`pc [!] Vanquisher is spawned at [${location} ] [!]`)
        }
    }  
}).setCriteria("A Vanquisher is spawning nearby!")
// Send chat message in either party or all chat that the vanquisher was killed

register('chat', () => {
    if (settings().sendvanqdead) {
        if (settings().sendvanqACDEAD){
            ChatLib.command(`ac [!] Vanquisher Killed [!]`)
        }
        if (settings().sendvanqPARTYDEAD) {
            setTimeout(() => {
                ChatLib.command(`pc [!] Vanquisher Killed [!]`)
            }, 100);        }
    }  
}).setCriteria("RARE DROP! Nether Star")