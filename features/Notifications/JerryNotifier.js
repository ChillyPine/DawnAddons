import settings from '../../config'
const s = settings()

// Map each Jerry type to its color and setting
const jerries = {
    golden: { color: "&6", enabled: () => s.goldenJerry },
    purple: { color: "&5", enabled: () => s.purpleJerry },
    blue:   { color: "&9", enabled: () => s.blueJerry },
    green:  { color: "&2", enabled: () => s.greenJerry },
}

// List of all chat message variants
const messages = [
    "☺ You discovered a {color} Jerry!",
    "☺ There is a {color} Jerry!",
    "☺ You located a hidden {color} Jerry!",
    "☺ A wild {color} Jerry spawned!",
    "☺ Some {color} Jerry was hiding, but you found it!",
    "☺ A {color} Jerry appeared!"
]

// Register all in one loop
Object.entries(jerries).forEach(([name, { color, enabled }]) => {
    messages.forEach(msg => {
        const criteria = msg.replace("{color}", name.charAt(0).toUpperCase() + name.slice(1))
        register("chat", () => {
            if (!enabled() || !s.jerryNotif) return
            Client.showTitle(`${color}Jerry`, "", 0, 20, 0)
        }).setCriteria(criteria)
    })
})