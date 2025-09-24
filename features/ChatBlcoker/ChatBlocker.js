import settings from '../../config'


// profile id hider
register("chat", (event) => {
    if (!settings().hideprofileid) return
    cancel(event)
}).setCriteria("Profile ID: ${*}")

// profile hider
register("chat", (event) => {
    if (!settings().hideprofilemsg) return
    cancel(event)
}).setCriteria("You are playing on profile: ${*} (Co-op)")

register("chat", (event) => {
    if (!settings().hideprofilemsg) return
    cancel(event)
}).setCriteria("You are playing on profile: ${*}")

//Block hider
register("chat", (event) => {
    if (!settings().blockBINTW) return
    cancel(event)
}).setCriteria("There are blocks in the way!")

//EXP Hider
register("chat", (event) => {
    if (!settings().BlockGUILDEXP) return
    cancel(event)
}).setCriteria("You earned ${*} GEXP + ${*} Event EXP from playing SkyBlock!")

//Link warning hider
register("chat", (event) => {
    if (!settings().LinkWarningMsg) return
    cancel(event)
}).setCriteria("  Clicking sketchy links can result in your account")

register("chat", (event) => {
    if (!settings().LinkWarningMsg) return
    cancel(event)
}).setCriteria("  Link looks suspicious? - Don't click it!")

register("chat", (event) => {
    if (!settings().LinkWarningMsg) return
    cancel(event)
}).setCriteria("  being stolen!")

register("chat", (event) => {
    if (!settings().LinkWarningMsg) return
    cancel(event)
}).setCriteria("   ")

//Lottery!
register("chat", (event) => {
    if (!settings().LotteryMsg) return
    cancel(event)
}).setCriteria("You can disable this messaging by toggling Lottery in your /hotf!")

/*
//Mute message
register("chat", (event) => {
    if(!settings().MuteMessage) return
    cancel(event)
}).setCriteria("-----------------------------------------------------")

register("chat", (event) => {
    if (!settings().MuteMessage) return
    cancel(event)
}).setCriteria("You are currently muted for a")

register("chat", (event) => {
    if (!settings().MuteMessage) return
    cancel(event)
}).setCriteria("Your mute will expire in")

register("chat", (event) => {
    if (!settings().MuteMessage) return
    cancel(event)
}).setCriteria("Find out more here: www.hypixel.net/mutes")

register("chat", (event) => {
    if (!settings().MuteMessage) return
    cancel(event)
}).setCriteria("Mute ID: #")

register("chat", (event) => {
    if(!settings().MuteMessage) return
    cancel(event)
}).setCriteria("-----------------------------------------------------")
*/