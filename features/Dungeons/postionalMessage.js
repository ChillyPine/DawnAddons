import settings from '../../config'

const trackedPlayers = {};
const lockedPlayers = new Set();

function updatePlayerLocation(playerName, newLocation) {
    const currentLocation = trackedPlayers[playerName];
    if (currentLocation !== newLocation) {
        trackedPlayers[playerName] = newLocation;

        if (newLocation !== null) {
            Client.showTitle("", `§b${playerName} is at ${newLocation}`, 0, 180, 0);
            lockedPlayers.add(playerName); // Lock this player in so we stop updating
        }
    }
}

function getLocation(x, y, z) {
    if (y === 109 && x >= 56 && x <= 60 && z >= 129 && z <= 132) return "EE2";
    if (y === 109 && x >= 1 && x <= 3 && z >= 97 && z <= 100) return "EE3";
    if (y === 120 && x >= 106 && x <= 110 && z >= 92 && z <= 95) return "Simon Says";
    if ((y === 115 || y === 114) && x >= 47 && x <= 61 && z >= 55 && z <= 60) return "Core";
    if (y === 65 && x >= 46 && x <= 62 && z >= 68 && z <= 84) return "Necron Mid";

    return null;
}

register("renderWorld", () => {
    if (!settings().detectplayersatcoords) return;

    const currentlySeenPlayers = new Set();

    World.getAllEntities().forEach(entity => {
        if (entity.getClassName() !== "EntityOtherPlayerMP") return;
        const name = entity.getName();
        if (name === Player.getName()) return;

        currentlySeenPlayers.add(name);

        if (lockedPlayers.has(name)) return;

        const [x, y, z] = [entity.getX(), entity.getY(), entity.getZ()];
        const location = getLocation(x, y, z);
        updatePlayerLocation(name, location);
    });

    // Remove locked players who are no longer visible
    lockedPlayers.forEach(name => {
        if (!currentlySeenPlayers.has(name)) {
            lockedPlayers.delete(name);
            delete trackedPlayers[name];
            Client.showTitle("", "", 0, 0, 0); // Clear title
        }
    });
});
