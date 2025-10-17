import settings from '../../config'
import { Event } from "../../../tska/event/Event"

let checkedThisInstance = false // check if it ran in the player's current instance
const MouseEvent = Java.type("net.minecraftforge.client.event.MouseEvent")
const PickobulusBlocker = register(MouseEvent, (event) => {
    // makes sure that the wrong clicks aren't cancelled
    if(!settings().pickHolder) return
    if(event.button !== 1 || !event.buttonstate) return
    const heldItem = Player.getHeldItem()?.getName()?.removeFormatting()
    if(!heldItem) return // failsafe

    // checks if player is holding a pickaxe
    if((heldItem.includes("Stonk") || heldItem.includes("Pickaxe") || heldItem.includes("Drill") || heldItem.includes("Gauntlet"))) cancel(event)
}).unregister()

register("worldLoad", () => { // resets island checker per instance
    PickobulusBlocker.unregister()
    checkedThisInstance = false
})

new Event("serverScoreboard", (input, event) => {
    // checks the scoreboard on packet update to register PickobulusBlocker if the player is on their private island
    if(checkedThisInstance) return
    const matches = input.match(/^ ⏣ Your Island$/)
    if(!matches) return
    setTimeout(() => {
      PickobulusBlocker.register()
      checkedThisInstance = true
    }, 200)
}).register()