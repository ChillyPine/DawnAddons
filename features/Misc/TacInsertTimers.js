import PogObject from "PogData";
import { DraggableGui } from "../../../Atomx/draggable/DraggableGui";
import settings from '../../config'

let countdownTime = 0;
let tickCounter = 0;

const colorCodes = [
  "§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7",
  "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f"
];

const getColorCode = (index) => colorCodes[index] || "§f";

// === Countdown Trigger ===
register("chat", () => {
    if (!settings().TacInstCoolDown) return;

    // Start 17s timer
    countdownTime = 17;
    tickCounter = 0;
}).setCriteria("Your gorilla tactics have hit ${*} enemies!");

register("chat", () => {
    if (!settings().TacInstCoolDown) return;

    // Start 17s timer
    countdownTime = 17;
    tickCounter = 0;
}).setCriteria("Your gorilla tactics have hit ${*} enemies! gg!");

// === Timer Tick ===
register("tick", () => {
    if (countdownTime > 0) {
        tickCounter++;
        if (tickCounter >= 20) {
            countdownTime--;
            tickCounter = 0;
        }
    }
});

// === GUI Pos + Display ===
const data = new PogObject("gorillatimer", {
    pos: { x: 0, y: 20, scale: 1 },
});

const editGui = new DraggableGui(data, data.pos).setCommand("gorilladisplay");

register("renderOverlay", () => {
    if (!World.isLoaded() || editGui.isOpen() || !settings().TacInstCoolDown) return;
    if (countdownTime <= 0 && tickCounter === 0) return;

    const totalTime = countdownTime + (1 - tickCounter / 20);
    const displayTime = totalTime.toFixed(2);

    let numberColor;
    if (totalTime > 12) {
        numberColor = "§c";
    } else if (totalTime > 5) {
        numberColor = "§e";
    } else {
        numberColor = "§a";
    }

    const prefixColor = getColorCode(settings().TacInsertCOlor); // Reusing settings() value
    const text = `${prefixColor}Tac Insert: ${numberColor}${displayTime}`;

    Renderer.retainTransforms(true);
    Renderer.translate(editGui.getX(), editGui.getY());
    Renderer.scale(editGui.getScale());
    Renderer.drawStringWithShadow(text, 0, 0);
    Renderer.retainTransforms(false);
    Renderer.finishDraw();
});

// === GUI Preview ===
editGui.onRender(() => {
    const preview = "§aTAC INSERT COOLDOWN";

    Renderer.retainTransforms(true);
    Renderer.translate(editGui.getX(), editGui.getY());
    Renderer.scale(editGui.getScale());
    Renderer.drawStringWithShadow(preview, 0, 0);
    Renderer.retainTransforms(false);
    Renderer.finishDraw();
});
