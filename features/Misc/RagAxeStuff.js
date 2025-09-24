import settings from '../../config'
import PogObject from "PogData";
import { DraggableGui } from "../../../Atomx/draggable/DraggableGui";

let Casted = false;
let countdownTime = 0; // seconds (integer part)
let tickCounter = 0;   // ticks since last second (0-19)

const colorCodes = [
  "§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7",
  "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f"
];

const getColorCode = (index) => colorCodes[index] || "§f";

/**
 * Check if the held item is Ragnarock Axe
 */
function isHoldingRagAxe() {
    const item = Player.getHeldItem();
    if (!item) return false;
    const nbt = item.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes");
    return nbt && nbt.getString("id") === "RAGNAROCK_AXE";
}

// Reset states on world load
register("worldLoad", () => {
    Casted = false;
    countdownTime = 0;
    tickCounter = 0;
});

// Detect Rag Axe cast
register("actionBar", () => {
    Casted = true;
}).setCriteria("${before}CASTING IN 1s");

// Handle howl sound and strength display
register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (settings().customragsound && name.includes("mob.wolf.howl") && Casted) {
        cancel(event);
        World.playSound(settings().RagCustomSound, 500.0, 1.0);
    }

    // Strength display logic
    if (!isHoldingRagAxe()) return;

    // Either Casted is true OR this is the first use after lobby change
    if (!Casted && countdownTime === 0) {
        // Allow first detection without Casted
    } else if (!Casted) {
        return;
    }

    const item = Player.getHeldItem();
    const lore = item.getLore();
    const strengthLine = lore.find((line) => line.startsWith("§5§o§7Strength:"));
    if (!strengthLine) return;

    const strength = Math.floor(Number(strengthLine.split(" ")[1]?.substring(3) || 0));
    const ragMessage = settings().ragmessage;
    const DisplayTime = settings().ragaxediaplytime;
    const strengthColor = getColorCode(settings().ragstrengtrhcolor);

    Client.showTitle(`${ragMessage}`, `${strengthColor}${strength * 1.5}`, 0, DisplayTime, 0);

    // Start 17s timer
    countdownTime = 17;
    tickCounter = 0;
    Casted = false;
}).setCriteria("mob.wolf.howl");

// Cancel on damage
register("chat", () => {
    Client.showTitle('', "&cRAG CANCELLED", 0, 70, 0);
    Casted = false;
    countdownTime = 0;
    tickCounter = 0;
}).setCriteria("Ragnarock was cancelled due to taking damage!");

// Tick handler for countdown
register("tick", () => {
    if (countdownTime > 0) {
        tickCounter++;
        if (tickCounter >= 20) { // 20 ticks per second
            countdownTime--;
            tickCounter = 0;
        }
    }
});

const data = new PogObject("ragcooldown", {
    pos: { x: 0, y: 0, scale: 1 },
});

const editGui = new DraggableGui(data, data.pos).setCommand("ragdisplay");

// Draw timer on screen
register("renderOverlay", () => {
    if (!World.isLoaded() || editGui.isOpen() || !settings().ragCoolDown) return;
    if (countdownTime <= 0 && tickCounter === 0) return;

    const totalTime = countdownTime + (1 - tickCounter / 20);
    const displayTime = totalTime.toFixed(2);

    // Determine color for the number based on time
    let numberColor;
    if (totalTime > 12) {
        numberColor = "§c";
    } else if (totalTime > 5) {
        numberColor = "§e";
    } else {
        numberColor = "§a";
    }

    const prefixColor = getColorCode(settings().ragstrengtrhcolor); // Get settings()ured color
    const text = `${prefixColor}RAG READY: ${numberColor}${displayTime}`;

    Renderer.retainTransforms(true);
    Renderer.translate(editGui.getX(), editGui.getY());
    Renderer.scale(editGui.getScale());
    Renderer.drawStringWithShadow(text, 0, 0);
    Renderer.retainTransforms(false);
    Renderer.finishDraw();

});

// GUI preview
editGui.onRender(() => {
    const preview = "§aRAG COOLDOWN";

    Renderer.retainTransforms(true);
    Renderer.translate(editGui.getX(), editGui.getY());
    Renderer.scale(editGui.getScale());
    Renderer.drawStringWithShadow(preview, 0, 0);
    Renderer.retainTransforms(false);
    Renderer.finishDraw();
});
