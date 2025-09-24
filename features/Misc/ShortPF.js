import settings from '../../config'

register('chat', (event) => {
    if (!settings().shortPF) return
    cancel(event)
    ChatLib.chat("&dPF &f> &aQueued")
}).setCriteria("Party Finder > Your party has been queued in the dungeon finder!");


register('chat', (event) => {
    if (!settings().shortPF) return
    cancel(event)
    ChatLib.chat("&dPF &f> &cDe-listed")
}).setCriteria("Party Finder > Your group has been de-listed!");

register('chat', (event) => {
    if (!settings().shortPF) return
    cancel(event)
    ChatLib.chat("&dPF &f> &cGroup Removed")
}).setCriteria("Party Finder > Your group has been removed from the party finder!");

register('chat', (event) => {
    if (!settings().shortPF) return
    cancel(event)
    ChatLib.chat("&dPF &f> &cError Group Not Found")
}).setCriteria("Party Finder > This group has been de-listed.");