import settings from '../../config'
import RenderLib from '../../../RenderLib/index'
import RenderLibV2 from "../../../RenderLibV2";
import Dungeon from "../../../BloomCore/dungeons/Dungeon"
// drawEspBoxV2 = (x, y, z, wx, h, wz, red, green, blue, alpha, phase, lineWidth)

let inf4boss = false;
let InJerryCave = false; 
let ratESPtransparency = false;
let playerIGN = Player.getName();


register("chat", () => {
    inf4boss = true
}).setCriteria(/^\[BOSS\] Thorn: Welcome Adventurers! I am Thorn, the Spirit! And host of the Vegan Trials!$/)

register("chat", () => {
    InJerryCave = true
}).setCriteria("CRACK! The explosion from Mount Jerry forced long lost items to resurface in the Glacial Cave!")

register("worldUnload", () => {
    inf4boss = false
    InJerryCave = false
})

register("command", () => {
    ratESPtransparency = !ratESPtransparency
    ChatLib.chat(`&6[ESP] &7Rat's can be seen through walls: ${ratESPtransparency ? "&aTRUE" : "&cFALSE"}`);
}).setName("ratesp");

// getX, getY, getZ, something, something, r, g, b, something, see-through-walls
register("renderWorld", () => {
    const playerY = Player.getRenderY() + (Player.isSneaking() ? 1.54 : 1.62);

    const blacklist = ["Overflux", "Dragon", "Livid", "Golem", "Chestplate", "Sword", "Bow", "Boots", "Leggings", "Helmet" , "♃"]
   
    World.getAllEntities().forEach(ent => {
        if(ent.getClassName() == "EntityArmorStand"){
            if(ent.distanceTo(Player.getX(), Player.getY(), Player.getZ())>100) return
            // Gift ESP
            if(InJerryCave && settings().GiftESP) {
                RenderLib.drawEspBox(ent.getX(), ent.getY() + 1, ent.getZ(), 1, 1, 1, 0, 1, 1, true);
            }
            // Corleone
            if(ent.getName().includes("Corleone") && settings().coreESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 1, 0, 1, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 1, 0, 1, 1, 2);
            }
            // Key Guardian
            if(ent.getName().includes("Key Guardian") && settings().KeyGESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 1, 0, 0, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 1, 0, 0, 1, 2);
            }
            // Matcho ESP
            if(ent.getName().includes("Matcho") && settings().MatchoESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 0, 0, 1, 1, true);
            }
            // Primal Fear ESP
            function highlightOwnedEntities(playerIGN, entityNames) {
                if (ent.getName().removeFormatting().includes(`Spawned by: ${playerIGN}`)) {
                    const allMatches = World.getAllEntities().filter(entity =>
                        entityNames.some(name => entity.getName().includes(name))
                    );
                    if (!allMatches.length) return;

                    const ownedEntity = allMatches.find(entity => entity.distanceTo(ent) < 1);
                    if (ownedEntity) {
                        RenderLib.drawEspBox(
                            ent.getX(),
                            ent.getY() - 1.7,
                            ent.getZ(),
                            1, 2,   // Width and height
                            0.6, 0.5, 0.9, 1,  // RGBA color
                            true   // Fill
                        );
                    }
                }
            }
            const targetNames = [
                "Primal Fear",
                "Commitment Phobia",
                "Darkness Shade",
                "Deadline",
                "Math Teacher",
                "Public Speaking Demon",
                "Vegan Crawler"
            ];

            highlightOwnedEntities(playerIGN, targetNames);


            
            // if(ent.getName().removeFormatting().includes(`Spawned by: ${playerIGN}`)){
            //     const primalFears = World.getAllEntities().filter(primal => primal.getName().includes("Primal Fear"))
            //     if(!primalFears) return
            //     const ownPrimalFear = primalFears.find(primal => primal.distanceTo(ent) < 1)
            //     if(ownPrimalFear) RenderLib.drawEspBox(ent.getX(), ent.getY() - 1.7, ent.getZ(), 1, 2, 0.6, 0.5, 0.9, 1, true)
            // }

            // Star Mob ESP
            let mobName = ent.getName().removeFormatting() 
            let StarMobboxColor = RenderLibV2.getColor(settings().boxStarredMobColor);
            let FelBoxColor = RenderLibV2.getColor(settings().felboxcolor);

            if(mobName.includes("Fel") && mobName.includes("✯") && settings().starmobesp) {
                RenderLibV2.drawEspBoxV2(ent.getX(), ent.getY() - 3, ent.getZ(), 1, 3, 1, FelBoxColor.red, FelBoxColor.green, FelBoxColor.blue, FelBoxColor.alpha, true, 2);
            } else if(mobName.includes("✯") && !mobName.endsWith("✯") && settings().starmobesp){
                RenderLibV2.drawEspBoxV2(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 1, StarMobboxColor.red, StarMobboxColor.green, StarMobboxColor.blue, StarMobboxColor.alpha, true, 2);
            }
            
            // Runic Mob ESP
            if(ent.getName().includes("§5[") && !(ent.getName().includes("Dragon")) && settings().Runicmobesp){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 1, 1, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
            }

            let SpiritBearColor = RenderLibV2.getColor(settings().spiritbearespcolor);
            if(mobName.includes("Spirit Bear") && settings().spiritbearesp) {
                RenderLibV2.drawEspBoxV2(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 1, SpiritBearColor.red, SpiritBearColor.green, SpiritBearColor.blue, SpiritBearColor.alpha, true, 2);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), SpiritBearColor.red, SpiritBearColor.green, SpiritBearColor.blue, SpiritBearColor.alpha, 2);
            }
            // See runics in dungeons
            if (Dungeon.inDungeon && settings().Runicmobesp) {
                const name = ent.getName();
                if (name.includes("§5") && !name.includes("ᛤ") && !blacklist.some(word => name.includes(word))) {
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 1, 1, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
                }
            }
            // blood / wither key esp
            if (Dungeon.inDungeon && settings().KEYESP) {
                const keyName = ent.getName();
                if (keyName.includes('Wither Key') || keyName.includes('Blood Key')) {
                    RenderLib.drawEspBox(ent.getX(), ent.getY() + 1, ent.getZ(), 1, 1, 0, 1, 0, 1, true);
                    if(settings().keytracerWB) {
                        drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() + 1, ent.getZ(), 0, 1, 0, 1, 2);
                
                    }
                }

            }
            // Butterfly ESP
            if(ent.getName().includes("Butterfly") && settings().bfESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 0.3, ent.getZ(), 0.6, 0.6, 0, 1, 1, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
            }
            // Goldin Goblin ESP
            if(ent.getName().includes("Golden Goblin") && settings().ggESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 1, 1, 0, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 1, 2);
            }
            // Diamond Goblin ESP
            if(ent.getName().includes("Diamond Goblin") && settings().dgESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 2, ent.getZ(), 1, 2, 0, 1, 1, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
            }
            // Old Wolf ESP
            if(ent.getName().includes("Old Wolf") && settings().oldwolfESP){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1.3, 1, 0, 1, 1, 1, true);
            }
            // Arcane ESP
            if(ent.getName().includes("Arachne") && settings().arachneesp){
                RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1.5, 1, 0, 1, 1, 1, true);
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
            }
        } else if(ent.getClassName() == "EntityOtherPlayerMP"){
            if(ent.getName().includes("m4t3") && settings().femboyESP) {
                RenderLib.drawEspBox(ent.getX(), ent.getY(), ent.getZ(), 1, 2, 1, 0, 0.894, 1, true)
                drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() + 1, ent.getZ(), 1, 0, 0.894, 1, 1)
            } 
        } else if(ent.getClassName() == "EntityBat" && !inf4boss){
            let BatESPColor = RenderLibV2.getColor(settings().batespcolor);
            if(!settings().batesp || !Dungeon.inDungeon || ent.isInvisible()) return
            RenderLibV2.drawEspBoxV2(ent.getX(), ent.getY(), ent.getZ(), 0.5, 1, 0.5, BatESPColor.red, BatESPColor.green, BatESPColor.blue, BatESPColor.alpha, true, 2);
            if(settings().batesptracer) {
            drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() + 0.5, ent.getZ(), BatESPColor.red, BatESPColor.green, BatESPColor.blue, BatESPColor.alpha, 2);
            }
        }

    })
    

})

// Player ESP
register("renderWorld", () => {
    if (!settings().playeresp) return;

    const whitelist = settings().playerespwhitelist.trim().split(/\s+/).map(name => name.toLowerCase());

    World.getAllEntities().forEach(entity => {
        if (entity.getClassName() !== "EntityOtherPlayerMP") return;
        const name = entity.getName();
        if (name === Player.getName()) return;

        switch (settings().playerespmode) {
            case 0: break;
            case 1: if (!whitelist.includes(name.toLowerCase())) return;
            default: return;
        }

        RenderLib.drawEspBox(entity.getX(), entity.getY(), entity.getZ(), 1, 2, 0, 0.7, 0, 1, true);
    });
});

// Rat ESP
register("renderWorld", () => {
 World.getAllEntities().forEach(ent => {
    if (ent.getClassName() == "EntityZombie" && settings().RatESP) {
        if (ent.isInvisible()) {
            let hasNearbyArmorStand = false;
            const checkRadius = 3; 
            
            World.getAllEntities().forEach(otherEnt => {
                if (otherEnt.getClassName() == "EntityArmorStand") {
                    const armorStandName = otherEnt.getName();
                    if (armorStandName.toLowerCase().includes("armadillo") || armorStandName.toLowerCase().includes("wraith") || armorStandName.toLowerCase().includes("watcher")) {
                        const distance = Math.sqrt(
                            Math.pow(ent.getX() - otherEnt.getX(), 2) + 
                            Math.pow(ent.getY() - otherEnt.getY(), 2) + 
                            Math.pow(ent.getZ() - otherEnt.getZ(), 2)
                        );
                        
                        if (distance <= checkRadius) {
                            hasNearbyArmorStand = true;
                        }
                    }
                }
            });
            
            // Only draw ESP if no armor stand is nearby
            if (!hasNearbyArmorStand) {
                RenderLib.drawEspBox(ent.getX(), ent.getY(), ent.getZ(), 0.9, 0.7, 0.9, 1, 0, 1, ratESPtransparency);      
                //drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 0.45, ent.getZ(), 1, 0, 1, 1, 2); <- IF we want line
            }
        }
    }
});
});

// Draw line function
function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha, lineWidth) {
    GL11.glBlendFunc(770, 771)
    GL11.glEnable(GL11.GL_BLEND)
    GL11.glLineWidth(lineWidth)
    GL11.glDisable(GL11.GL_TEXTURE_2D)
    GL11.glDisable(GL11.GL_DEPTH_TEST)
    GL11.glDepthMask(false)
    GlStateManager.func_179094_E()

    Tessellator.begin(GL11.GL_LINES).colorize(red, green, blue, alpha)
    Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.pos(x2, y2, z2).tex(0, 0)
    Tessellator.draw()

    GlStateManager.func_179121_F()
    GL11.glEnable(GL11.GL_TEXTURE_2D)
    GL11.glEnable(GL11.GL_DEPTH_TEST)
    GL11.glDepthMask(true)
    GL11.glDisable(GL11.GL_BLEND)
}
