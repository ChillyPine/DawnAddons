import settings from '../../config'

const prefix = "&5[Dawn&6Addons&5]";

if (settings().goldenfishdetect) {
    register("chat", () => {
        ChatLib.chat(prefix + "Golden Fish Detected")
    }).setCriteria("You spot a Golden Fish surface from beneath the lava!")
}