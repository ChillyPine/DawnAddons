import PogObject from "PogData"
import settings from '../../config'
import RenderLibV2 from '../../../RenderLibV2/index'
import { DraggableGui } from "../../../Atomx/draggable/DraggableGui"

// // Livid HUD position + scale storage
// const data = new PogObject("DawnAddons", {
//     pos: { x: 6, y: 6, scale: 1 }
// }, "data/lividHUD.json");

// // Create the draggable GUI
// const editGui = new DraggableGui(data, data.pos).setCommand("lividgui")

const numToLivid = {
    0: { "color": "§f", "name": "Vendetta Livid" },
    5: { "color": "§a", "name": "Smile Livid" },
    13: { "color": "§2", "name": "Frog Livid" },
    14: { "color": "§c", "name": "Hockey Livid" },
    2: { "color": "§d", "name": "Crossed Livid" },
    10: { "color": "§5", "name": "Purple Livid" },
    7: { "color": "§7", "name": "Doctor Livid" },
    11: { "color": "§9", "name": "Scream Livid" },
    4: { "color": "§e", "name": "Arcade Livid" }
};

let allLividFound = false;
let bossStarted = false;
let trueLividColor = null;
let trueLividName = null;
let trueLividEntity = null;
let trueLividNameTag = null;

// Regular overlay render - HUD display feature
// register("renderOverlay", () => {
//     if (!settings().lividNameGUI || editGui.isOpen()) return;
    
//     if (trueLividNameTag !== null) {
//         let entityName = trueLividNameTag.getName();
//         Renderer.retainTransforms(true)
//         Renderer.translate(editGui.getX(), editGui.getY())
//         Renderer.scale(editGui.getScale())
//         Renderer.drawStringWithShadow(entityName, 0, 0)
//         Renderer.retainTransforms(false)
//         Renderer.finishDraw()
//     }
// });

// let entityName = null
// register("renderOverlay", () => {
//     if (!settings().lividNameGUI || editGui.isOpen()) return;
//     if (trueLividNameTag !== null) {
//         entityName = trueLividNameTag.getName()
//     }
// })

// // Render while in GUI edit mode
// editGui.onRender(() => {
//     if (trueLividNameTag !== null) {
//         Renderer.retainTransforms(true)
//         Renderer.translate(editGui.getX(), editGui.getY())
//         Renderer.scale(editGui.getScale())
//         Renderer.drawStringWithShadow(entityName, 0, 0)
//         Renderer.retainTransforms(false)
//         Renderer.finishDraw()
//     } else {
//         // Show example text when editing and no livid is found
//         Renderer.retainTransforms(true)
//         Renderer.translate(editGui.getX(), editGui.getY())
//         Renderer.scale(editGui.getScale())
//         Renderer.drawStringWithShadow("§e﴾ §c§lLivid§r §a7M§c❤ §e﴿", 0, 0)
//         Renderer.retainTransforms(false)
//         Renderer.finishDraw()
//     }
// });

// Hide incorrect livid name tags - independent feature
register("renderEntity", (entity, position, partialTicks, event) => {
    if (!settings().hideLividNameTags) return;
    if (trueLividColor === null) return;
    
    // Only hide armor stands (nametags), not the actual Livid mob
    if (entity.getClassName() !== "EntityArmorStand") return;
    
    let entityName = entity.getName();
    // If it's a Livid entity but doesn't have the correct color, hide it
    if (entityName.includes("Livid") && !entityName.startsWith(trueLividColor)) {
        cancel(event);
    }
});

// Draw outline around correct livid - independent feature (ESP)
register("renderWorld", (partialTicks) => {
    if (!settings().lividSolver) return;
    
    if (trueLividEntity !== null) {
        let boxColor = RenderLibV2.getColor(settings().lividBoxColor);
        RenderLibV2.drawEspBoxV2(
            trueLividEntity.getRenderX(), 
            trueLividEntity.getRenderY(), 
            trueLividEntity.getRenderZ(), 
            0.9, 
            1.9, 
            0.9, 
            boxColor.red, 
            boxColor.green, 
            boxColor.blue, 
            boxColor.alpha, 
            true, 
            2
        );
    }
});

register("worldLoad", () => {
    allLividFound = false;
    trueLividColor = null;
    trueLividName = null;
    trueLividNameTag = null;
    trueLividEntity = null;
    bossStarted = false;
});

// Check for correct livid every tick - runs if ANY feature is enabled
register("tick", () => {
    if (settings().lividSolver || settings().hideLividNameTags || settings().lividNameGUI) {
        findCorrectLivid();
    }
});

// Check for when boss starts
register("chat", () => {
    if (!allLividFound) {
        bossStarted = true;
    }
}).setChatCriteria("[BOSS] Livid: I respect you for making it to here, but I'll be your undoing.");

// Find correct livid - shared detection logic
function findCorrectLivid() {
    if (inDungeon() != 5) return;
    
    let lividArr = [];
    if (!allLividFound) {
        World.getAllEntities().forEach(entity => {
            let entityName = entity.getName();
            if (entityName.endsWith("Livid") && entity.getClassName() === "EntityOtherPlayerMP") {       
                lividArr.push(entity);
                if (lividArr.length === 9) {
                    allLividFound = true;
                }
            }
        })
    }
    
    if (bossStarted || allLividFound) {
        let lividBlock = World.getBlockAt(5, 108, 42);
        if (lividBlock.type.getRegistryName() === "minecraft:stained_glass") {
            trueLividColor = numToLivid[lividBlock.getMetadata()].color;
            trueLividName = numToLivid[lividBlock.getMetadata()].name;
        }
    }
    
    if (bossStarted && !allLividFound) {
        World.getAllEntities().forEach(entity => {
            let entityName = entity.getName();
            if (entityName.includes("Livid") && entityName.removeFormatting().includes(trueLividName) && entity.getClassName() === "EntityOtherPlayerMP") {
                trueLividEntity = entity;
            }
        });
    }
    
    if (allLividFound) {
        World.getAllEntities().forEach(entity => {
            let entityName = entity.getName();
            // Find the nametag entity (for HUD display)
            if (entityName.includes("Livid") && entityName.length > 5 && entityName.charAt(1) === entityName.charAt(5) && entityName.startsWith(trueLividColor)) {
                trueLividNameTag = entity;
            }
            // Find the actual livid entity (for ESP box)
            if (entityName.removeFormatting().includes(trueLividName) && entity.getClassName() === "EntityOtherPlayerMP") {
                trueLividEntity = entity;
            }
        });
    }
}

function inDungeon() {
    let scoreboard = Scoreboard.getLines().map(a => { return ChatLib.removeFormatting(a) });
    let currentDungeonFloor = null;
    for (let line of scoreboard) {
        let match = line.match(/ ⏣ The Catac.+ombs \((.+)\)/);
        if (match) {
            let floor = match[1];
            currentDungeonFloor = parseInt(floor.replace(/[^\d]/g, ""));
        }
    }
    return currentDungeonFloor;
}