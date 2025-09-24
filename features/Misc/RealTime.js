import settings from '../../config'
import PogObject from "PogData"
import { DraggableGui } from "../../../Atomx/draggable/DraggableGui"

// Clock position + scale storage
const data = new PogObject("timegui", {
    pos: { x: 0, y: 0, scale: 1 },
    firstdownload: true
})

// Create the draggable GUI
const editGui = new DraggableGui(data, data.pos).setCommand("timegui")

// Color code mapping for SelectorProperty
const colorCodes = [
    "&0", // Black
    "&1", // Dark Blue
    "&2", // Dark Green
    "&3", // Dark Aqua
    "&4", // Dark Red
    "&5", // Dark Purple
    "&6", // Gold
    "&7", // Gray
    "&8", // Dark Gray
    "&9", // Blue
    "&a", // Green
    "&b", // Aqua
    "&c", // Red
    "&d", // Light Purple
    "&e", // Yellow
    "&f"  // White
]

// Get current system time in 12-hour format
function getCurrentTime() {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours === 0 ? 12 : hours
    return `${hours}:${minutes} ${ampm}`
}

// Regular overlay render
register("renderOverlay", () => {
    if (!World.isLoaded() || editGui.isOpen() || !settings().showIRLtime) return

    const time = getCurrentTime()
    const color = colorCodes[settings().clockcolor] || "&f"

    Renderer.retainTransforms(true)
    Renderer.translate(editGui.getX(), editGui.getY())
    Renderer.scale(editGui.getScale())
    Renderer.drawStringWithShadow(`${color}${time}`, 0, 0)
    Renderer.retainTransforms(false)
    Renderer.finishDraw()
})

// Render while in GUI edit mode
editGui.onRender(() => {
    const time = getCurrentTime()
    const color = colorCodes[settings().clockcolor] || "&f"

    Renderer.retainTransforms(true)
    Renderer.translate(editGui.getX(), editGui.getY())
    Renderer.scale(editGui.getScale())
    Renderer.drawStringWithShadow(`${color}${time}`, 0, 0)
    Renderer.retainTransforms(false)
    Renderer.finishDraw()
})
