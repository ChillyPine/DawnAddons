import settings from '../../config'

// Java class for Withers
const EntityWither = Java.type("net.minecraft.entity.boss.EntityWither");

// Helper to check item name
function isHoldingShadowFury() {
    const item = Player.getHeldItem();
    if (!item) return false;
    const name = item.getName();
    return name.toLowerCase().includes("shadow fury");
}

// Check for any non-invisible Wither within 12 blocks
function isWitherNearby() {
    const px = Player.getX();
    const py = Player.getY();
    const pz = Player.getZ();

    return World.getAllEntitiesOfType(EntityWither).some(wither => {
        if (wither.isInvisible()) return false;
        const dx = wither.getX() - px;
        const dy = wither.getY() - py;
        const dz = wither.getZ() - pz;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        return distance <= 12;
    });
}

const renderTitle = register("tick", () => {
    if (isHoldingShadowFury() && isWitherNearby()) {
        Client.showTitle("", `&cNECRON IN RANGE`, 0, 30, 0);

    }
}).unregister();

register("chat", () => {
    if(!settings().necronLeap) return
    renderTitle.register(); 
}).setCriteria("[BOSS] Necron: You went further than any human before, congratulations.");

register("worldUnload", () => {
    renderTitle.unregister();
});
