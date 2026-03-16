import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const defaultConf = new DefaultConfig("DawnAddons", "data/settings.json")

.addSwitch({
    category: "Dungeons",
    configName: "customDeathMessageToggle",
    title: "Custom Death Message",
    description: "When a player dies in dungeons, sends a custom message in party chat.",
    subcategory: "General"
})
.addTextInput({
    category: "Dungeons",
    configName: "customDeathMessage",
    title: "Death Message",
    description: "",
    value: "",
    placeHolder: "Input Here",
    subcategory: "General",
    shouldShow(data){ return data.customDeathMessageToggle }
})
.addSwitch({
    category: "Party Finder",
    configName: "quickpartyact",
    title: "Quick Party Actions",
    description: "Lets you quickly /shitterlist, /kick, or /ignore players when they join",
    subcategory: "General"
})
.addSwitch({
    category: "Party Finder",
    configName: "shortPF",
    title: "Short Party Finder Message",
    description: "Shortens the party finder queue message.",
    subcategory: "General"
})
// .addSwitch({
//     category: "Party Finder",
//     configName: "blacklist",
//     title: "Shitter List",
//     description: "",
//     subcategory: "Shitter List"
// })
// .addTextInput({
//     category: "Party Finder",
//     configName: "blacklistIGN",
//     title: "Shitter IGN",
//     description: "Put in Shitters IGN, separate names with a space. Not case sensitive.\nExample: Dawn joE Matt liLY\n/dawnhelp for all commands regarding shitter list.",
//     value: "",
//     placeHolder: "Input Here",
//     subcategory: "Shitter List",
//     shouldShow(data){ return data.blacklist }
// })
.addSwitch({
    category: "Party Finder",
    configName: "kickNotWelcomePlayer",
    title: "Auto Kick Shitter",
    description: "Kicks the Shitter",
    subcategory: "Shitter List"
    //shouldShow(data){ return data.blacklist }
})
.addSwitch({
    category: "Party Finder",
    configName: "anncshitter",
    title: "Announce to party",
    description: "Sends a message in party chat when a shitter joins the ranks!",
    subcategory: "Shitter List"
    //shouldShow(data){ return data.blacklist }
})
.addTextInput({
    category: "Party Finder",
    configName: "customShitterMessage",
    title: "Custom Shitter Message",
    description: "Send a custom message when a shitter joins the party. Use {player} to insert the player's IGN.\nYou &emust &rinput a message for Announce Shitter to work in party chat.",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Shitter List",
    shouldShow(data){ return data.anncshitter }
})
/*.addSwitch({
    category: "Party Finder",
    configName: "partyfinder",
    title: "Party Finder Stats",
    description: "Shows stats of players in Party Finder. &c Due to recent API changes, this feature is broken.",
    subcategory: "Party Finder"
})
.addSwitch({
    category: "Party Finder",
    configName: "partyfinderClassLevel",
    title: "Show class level",
    description: "Shows the player's class level in party finder.",
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinder }
})
.addSwitch({
    category: "Party Finder",
    configName: "partyfinderCata",
    title: "Show Cata Level",
    description: "Shows the player's catacombs level in party finder.",
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinder }
})
.addDropDown({
    category: "Party Finder",
    configName: "catalvlcolor",
    title: "Cata Level Color",
    description: "The color that will be shown for catacombs level.\nOnly Supports HTML Color Codes",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinderCata }
})
.addSwitch({
    category: "Party Finder",
    configName: "partyfinderSecrets",
    title: "Show Total Secrets",
    description: "Shows the player's total amount of secrets in party finder.",
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinder }
})
.addDropDown({
    category: "Party Finder",
    configName: "secretscolor",
    title: "Total Secrets Color",
    description: "The color that will be shown for total secrets.\nOnly Supports HTML Color Codes",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinderSecrets }
})
.addSwitch({
    category: "Party Finder",
    configName: "partyfinderSecretAverage",
    title: "Show Secret Average",
    description: "Shows the player's secret average in party finder.",
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinder }
})
.addDropDown({
    category: "Party Finder",
    configName: "secretavgcolor",
    title: "Secret Average Color",
    description: "The color that will be shown for secret average.\nOnly Supports HTML Color Codes",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "Party Finder",
    shouldShow(data){ return data.secretavgcolor }
})
.addSwitch({
    category: "Party Finder",
    configName: "partyfinderF7PB",
    title: "Show S+ PB",
    description: "Shows the player's fastest S+ time for the current floor in party finder.",
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinder }
})
.addDropDown({
    category: "Party Finder",
    configName: "pbcolor",
    title: "S+ PB Color",
    description: "The color that will be shown for fastest S+ time.\nOnly Supports HTML Color Codes",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "Party Finder",
    shouldShow(data){ return data.partyfinderF7PB }
})*/
.addSwitch({
    category: "Party Finder",
    configName: "missingclasses",
    title: "Show missing classes",
    description: "Displays missing classes in M4/M6/M7 party finder.",
    subcategory: "Party Finder"
})
.addSwitch({
    category: "Party Finder",
    configName: "autokick",
    title: "Autokick",
    description: "Autokick players below a specified PB.",
    subcategory: "Autokick"
})
.addDropDown({
    category: "Party Finder",
    configName: "selectedfloor",
    title: "Selected Floor",
    description: "Which floor's S+ PB should be checked.",
    options: ["F7","M4","M5","M6","M7"],
    value: 0,
    subcategory: "Autokick",
    shouldShow(data){ return data.autokick }
})
.addTextInput({
    category: "Party Finder",
    configName: "requiredPB",
    title: "Required S+ PB",
    description: "Time in seconds. Leave empty for no requirement.",
    value: "",
    placeHolder: "no req",
    subcategory: "Autokick",
    shouldShow(data){ return data.autokick }
})
.addSwitch({
    category: "Party Finder",
    configName: "kickmessage",
    title: "Send kick message",
    description: "Sends a message in party chat before kicking.",
    subcategory: "Autokick",
    shouldShow(data){ return data.autokick }
})
.addSwitch({
    category: "Notifications",
    configName: "BSPM",
    title: "Bonzo / Spirt / Phoenix USED",
    description: "Sends a notification when one of those is used",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "BSPMR",
    title: "Bonzo / Spirt / Phoenix READY",
    description: "Sends a notification when one of those is ready",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Dungeons",
    configName: "fftimer",
    title: "Fire Freeze Timer for M3",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "hidedoors",
    title: "Invisible Doors",
    description: "Makes Wither / Blood doors invisible when opened.",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "hideLividNameTags",
    title: "Hide Incorrect Livid Nametags",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "lividNameGUI",
    title: "Render Livid HP",
    description: "Creates a moveable HUD element with the correct Livid's color and health.",
    subcategory: "General"
})
.addButton({
    category: "Dungeons",
    configName: "moveLividGUI",
    title: "Move Livid HP Display",
    description: "",
    subcategory: "General",
    onClick: () => ChatLib.command("lividgui", true),
    shouldShow(data){ return data.lividNameGUI }
})
.addSwitch({
    category: "Dungeons",
    configName: "KEYESP",
    title: "Wither / Blood Key ESP",
    description: "Highlights Wither and Blood Keys",
    subcategory: "ESP"
})
.addSwitch({
    category: "Dungeons",
    configName: "keytracerWB",
    title: "Wither / Blood Key Tracer",
    description: "Draws tracer to wither / blood key",
    subcategory: "ESP",
    shouldShow(data){ return data.KEYESP }
})
.addSwitch({
    category: "Dungeons",
    configName: "CrystalHolder",
    title: "Holding Crystal",
    description: "Tells you if you are holding a Maxor Crystal",
    subcategory: "P1"
})
.addSwitch({
    category: "Dungeons",
    configName: "stormbox",
    title: "Storm ESP",
    description: "",
    subcategory: "P2"
})
.addColorPicker({
    category: "Dungeons",
    configName: "StormColor",
    title: "Storm Box Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "P2",
    shouldShow(data){ return data.stormbox}
})
.addSwitch({
    category: "Dungeons",
    configName: "golderbox",
    title: "Goldor ESP",
    description: "",
    subcategory: "P3"
})
.addColorPicker({
    category: "Dungeons",
    configName: "golderboxcolor",
    title: "Goldor Box Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "P3",
    shouldShow(data){ return data.golderbox}
})
.addSwitch({
    category: "Dungeons",
    configName: "necronLeap",
    title: "Necron Leap Range",
    description: "Alerts you if Necron is in range of a Shadow Fury Leap",
    subcategory: "P4"
})
.addSwitch({
    category: "Dungeons",
    configName: "ArrowStackHelper",
    title: "Arrow Stack Helper",
    description: "Shows where to stand and put crosshair to stack dragons",
    subcategory: "P5"
})
.addSwitch({
    category: "Dungeons",
    configName: "RelicHolder",
    title: "Holding Relic",
    description: "Tells you if you are holding a Relic",
    subcategory: "P5"
})
.addSwitch({
    category: "Dungeons",
    configName: "keySoundDrop",
    title: "Play Sound on Key Drop",
    description: "Plays a sound of your choice when a key is droped by a mob.",
    subcategory: "Sounds"
})
.addTextInput({
    category: "Dungeons",
    configName: "keysoundsoundingsounder",
    title: "Input Sound (Key Drop)",
    description: "Example: note.bass",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Sounds",
    shouldShow(data){ return data.keySoundDrop }
})
.addSwitch({
    category: "Dungeons",
    configName: "endrunmusic",
    title: "Play Music at End",
    description: "Plays a random music disc after run completion :D",
    subcategory: "Sounds"
})
.addSwitch({
    category: "Dungeons",
    configName: "simonsaystime",
    title: "Simon Says Time",
    description: "Sends local chat message with the Simon Says time.",
    subcategory: "Devices"
})
.addSwitch({
    category: "Dungeons",
    configName: "notifyPartySimonSays",
    title: "Notify Party",
    description: "Sends party chat message with the Simon Says time.",
    subcategory: "Devices",
    shouldShow(data){ return data.simonsaystime }
})
.addSwitch({
    category: "! Commands",
    configName: "dtnoti",
    title: "!dt",
    description: "on !dt sends Ascii art of DT",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "playercoords",
    title: "!coords",
    description: "Sends coords",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "coinflip",
    title: "!coinflip",
    description: "Flips a coin",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "roll",
    title: "!dice rolls",
    description: "!roll d4 , !roll d6 , !roll d10 , !roll d12 , !roll d20",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "eightball",
    title: "!8ball",
    description: "The future is within your hands!",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "insult",
    title: "!insult {IGN}",
    description: "Sends the most rudest insult ever",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "TPScheck",
    title: "!real tps",
    description: "Sends TPS in chat (trust me)",
    subcategory: "General"
})
.addSwitch({
    category: "! Commands",
    configName: "ptme",
    title: "!ptme",
    description: "Takes party leader",
    subcategory: "Party"
})
.addSwitch({
    category: "! Commands",
    configName: "allinv",
    title: "!allinv",
    description: "Opens party",
    subcategory: "Party"
})
.addSwitch({
    category: "! Commands",
    configName: "warp",
    title: "!warp",
    description: "Warps party",
    subcategory: "Party"
})
.addSwitch({
    category: "Misc",
    configName: "BetterPL",
    title: "\"Party List\" Quick Actions",
    description: "Lets you quickly Kick, Ignore, Shitterlist, or PV any party member.",
    subcategory: "General"
})
.addSwitch({
    category: "Misc",
    configName: "showmorepllist",
    title: "Extra \"Party List\" Quick Actions",
    description: "Adds Promote and Transfer options to quick actions.",
    subcategory: "General",
    shouldShow(data){ return data.BetterPL }
})
.addSwitch({
    category: "Misc",
    configName: "TacInstCoolDown",
    title: "Tactical Insertion Cooldown Timer",
    description: "",
    subcategory: "General"
})
.addDropDown({
    category: "Misc",
    configName: "TacInsertCOlor",
    title: "Cooldown Color",
    description: "Color for the tactical insertion cooldown timer.",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "General",
    shouldShow(data){ return data.TacInstCoolDown}
})
.addSwitch({
    category: "Misc",
    configName: "pickHolder",
    title: "Block Pickobulus on Private Island",
    description: "Works with Stonk, Gemstone Gauntlet, and any items with the words \"Drill\" and \"Pickaxe\" in the name.",
    subcategory: "General"
})
.addSwitch({
    category: "Misc",
    configName: "showIRLtime",
    title: "IRL Time",
    description: "Creates a moveable GUI element to show your IRL time on screen. \n&eRun /timegui to move the HUD element.",
    subcategory: "IRL Time"
})
.addDropDown({
    category: "Misc",
    configName: "clockcolor",
    title: "Clock Color",
    description: "Color of the Clock",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "IRL Time",
    shouldShow(data){ return data.showIRLtime }
})
.addButton({
    category: "Misc",
    configName: "onClick",
    title: "Move HUD Element",
    description: "",
    subcategory: "IRL Time",
    onClick: () => ChatLib.command(`timegui`, true),
    shouldShow(data){ return data.showIRLtime }
})
.addSwitch({
    category: "Misc",
    configName: "etherwarpding",
    title: "Custom Etherwarp Sound",
    description: "Removes default Etherwarp sound and replaces it with your specified custom sound.",
    subcategory: "Sounds"
})
.addTextInput({
    category: "Misc",
    configName: "etherwarpsoundsreplacment",
    title: "Input Custom Etherwarp Sound",
    description: "Example: note.pling \nSearch \"Sound List\" for the list of 1.8.9 supported sounds.",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Sounds",
    shouldShow(data) { return data.etherwarpding }

})
.addSwitch({
    category: "Notifications",
    configName: "watchernoti",
    title: "Watcher Notifications",
    description: "Global Toggle, Notifies you on certain watcher things",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "bloodDoneParty",
    title: "Send Blood Progress In Party Chat",
    description: "Sends blood room progress in party chat",
    subcategory: "Dungeons",
    shouldShow(data){ return data.watchernoti }
})
.addSwitch({
    category: "Notifications",
    configName: "diaskipnoti",
    title: "Dialogue Skip Notifier",
    description: "Notifies you when you can kill for dialogue skip",
    subcategory: "Dungeons",
    shouldShow(data){ return data.watchernoti }
})
.addSwitch({
    category: "Notifications",
    configName: "bloodroomopen",
    title: "Blood Open",
    description: "Notifies you when the blood room is opened",
    subcategory: "Dungeons",
    shouldShow(data){ return data.watchernoti }
})
.addSwitch({
    category: "Notifications",
    configName: "bloodroomfull",
    title: "Blood Full",
    description: "Notifies you when the blood room is full",
    subcategory: "Dungeons",
    shouldShow(data){ return data.watchernoti }
})
.addSwitch({
    category: "Notifications",
    configName: "bloodroomcleared",
    title: "Blood Cleared",
    description: "Notifies you when the blood room is cleared",
    subcategory: "Dungeons",
    shouldShow(data){ return data.watchernoti }
})
.addSwitch({
    category: "Dungeons",
    configName: "watcheryaphider",
    title: "Watcher Yap Hider",
    description: "Hides some of the watchers yapping. \nDoes NOT conflict with watcher notifications.",
    subcategory: "Blood Room"
})
.addSwitch({
    category: "Notifications",
    configName: "lockedchestnoti",
    title: "Locked Chest Notification",
    description: "Notifies you when a chest is locked",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "autonotikick",
    title: "Auto Notify Party of Skyblock Kick",
    description: "Sends a message in party chat upon being kicked from Skyblock.",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "m5Wish",
    title: "M5 Wish Notification",
    description: "Tells you when to wish in M5.",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "BottleFullNoti",
    title: "Bottle Full Notification",
    description: "Tells you if your Thunder/Storm/Hurricane Bottle is filled. Must be in your inventory to work.",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Notifications",
    configName: "ArrowNotif",
    title: "Arrow Notifier",
    description: "Notifies you if you have an arrow in your inventory. \nOnly works with Flint Arrows.",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Misc",
    configName: "inqdugup",
    title: "Send Message on Inquisitor",
    description: "Sends a chat message when an Inquisitor is dug up",
    subcategory: "Diana"
})
.addTextInput({
    category: "Misc",
    configName: "dianainqmessage",
    title: "Input message",
    description: "",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Diana",
    shouldShow(data){ return data.inqdugup }
})
.addSwitch({
    category: "Misc",
    configName: "sendinqcoords",
    title: "Send Inquisitor Coords",
    description: "Sends coords when an Inquisitor is dug up",
    subcategory: "Diana",
    shouldShow(data){ return data.inqdugup }
})
/*
.addSwitch({
    category: "Misc",
    configName: "recieveWaypoint",
    title: "Recieve waypoints from chat",
    description: "Toggle to recieve waypoints from chat",
    subcategory: "Waypoints - NO FEATURES IN THIS CATEGORY ARE FUNCTIONING"
})
.addSwitch({
    category: "Misc",
    configName: "recieveOwnWaypoint",
    title: "Recieve waypoints from yourself",
    description: "Toggle to recieve waypoints sent by you",
    subcategory: "Waypoints - NO FEATURES IN THIS CATEGORY ARE FUNCTIONING",
    shouldShow(data){ return data.recieveWaypoint }
})
.addColorPicker({
    category: "Misc",
    configName: "waypointBeaconColor",
    title: "Waypoint Beacon Color",
    description: "Pick a color for the waypoint beacon beam",
    value: [255, 255, 255, 255],
    subcategory: "Waypoints - NO FEATURES IN THIS CATEGORY ARE FUNCTIONING",
    shouldShow(data){ return data.recieveWaypoint }
})
.addSlider({
    category: "Misc",
    configName: "waypointTextSize",
    title: "Waypoint Text Size",
    description: "",
    options: [0, 5],
    value: 0,
    subcategory: "Waypoints - NO FEATURES IN THIS CATEGORY ARE FUNCTIONING",
    shouldShow(data){ return data.recieveWaypoint }
})
.addSwitch({
    category: "Misc",
    configName: "waypointUnloadWhenSwapLobby",
    title: "Waypoint Unload When Swap Lobby",
    description: "The waypoint will remove when you swap lobby",
    subcategory: "Waypoints - NO FEATURES IN THIS CATEGORY ARE FUNCTIONING",
    shouldShow(data){ return data.recieveWaypoint }
})
*/
.addSwitch({
    category: "Misc",
    configName: "sendvanqcoords",
    title: "Send Vanquisher Coords",
    description: "Global toggle for automatic vanquisher spawn messages.",
    subcategory: "Vanquisher"
})
.addSwitch({
    category: "Misc",
    configName: "sendvanqcoordsAC",
    title: "Send Vanquisher Coords in All Chat",
    description: "",
    subcategory: "Vanquisher",
    shouldShow(data){ return data.sendvanqcoords }
})
.addSwitch({
    category: "Misc",
    configName: "sendvanqcoordsPC",
    title: "Send Vanquisher Coords in Party Chat",
    description: "",
    subcategory: "Vanquisher",
    shouldShow(data){ return data.sendvanqcoords }
})
.addSwitch({
    category: "Misc",
    configName: "sendvanqdead",
    title: "Send Vanquisher Killed",
    description: "Global toggle for automatic vanquisher kill messages.",
    subcategory: "Vanquisher"
})
.addSwitch({
    category: "Misc",
    configName: "sendvanqACDEAD",
    title: "Send Vanquisher Killed in All Chat",
    description: "",
    subcategory: "Vanquisher",
    shouldShow(data){ return data.sendvanqdead }
})
.addSwitch({
    category: "Misc",
    configName: "sendvanqPARTYDEAD",
    title: "Send Vanquisher Killed in Party Chat",
    description: "",
    subcategory: "Vanquisher",
    shouldShow(data){ return data.sendvanqdead }
})
.addSwitch({
    category: "Dungeons",
    configName: "detectplayersatcoords",
    title: "Positional Message &cW.I.P",
    description: "Displays on screen if a player is at a key location in M7. \nExample EE2 , EE3 , SS , etc. ",
    subcategory: "At Places"
})
.addSwitch({
    category: "Dungeons",
    configName: "atlocaiton",
    title: "At {location}",
    description: "Global toggle for new category. Sends message when at a certian location in F/M7. \nIf one of the sub-toggles is on while this toggle is off, a message will still be sent.",
    subcategory: "At {location}"
})
.addSwitch({
    category: "Dungeons",
    configName: "atsimonsays",
    title: "At Simon Says",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "underpillar",
    title: "Under a pillar",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "underpillarPAD",
    title: "At a pillars pad",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "atee2",
    title: "At ee2",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "atee3",
    title: "At ee3",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "atincore",
    title: "In Core",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Dungeons",
    configName: "atinstamid",
    title: "At Necron Mid",
    description: "",
    subcategory: "At {location}",
    shouldShow(data){ return data.atlocaiton }
})
.addSwitch({
    category: "Misc",
    configName: "DisplayDeploy",
    title: "Deployable Box",
    description: "Boxes Deployables (e.g. Plasmaflux, Overflux, etc...)",
    subcategory: "Render"
})
.addSwitch({
    category: "Misc",
    configName: "DepthCheck",
    title: "Depth Check",
    description: "See deployable boxes through walls.",
    subcategory: "Render",
    shouldShow(data) { return data.DisplayDeploy}
})
.addSwitch({
    category: "Misc",
    configName: "quickmathsprimalfear",
    title: "Quick Maths Solver",
    description: "Solves Math Teacher Primal Fear.",
    subcategory: "The Great Spook"
})
.addSwitch({
    category: "Misc",
    configName: "amethystFinder",
    title: "Amethyst Crystal Finder",
    description: "Upon using a Jungle Key, cheese coords will be sent in local chat.",
    subcategory: "Mining"
})
.addSwitch({
    category: "Misc",
    configName: "corpseFinder",
    title: "Send Corpse Coordinates in Chat",
    description: "Finds corpses when you enter a mineshaft and sends the coordinates in party chat in patcher format.",
    subcategory: "Mining"
})
.addSwitch({
    category: "Notifications",
    configName: "ragDetect",
    title: "Rag Axe Display",
    description: "Displays Rag Casted / Failed and how much strength you gained.",
    subcategory: "Rag Axe"
})
.addSlider({
    category: "Notifications",
    configName: "ragaxediaplytime",
    title: "Display Time (Rag Axe)",
    description: "Displays how long it will appear on your screen.\nTime is IN TICKS, 20 = 1 second",
    options: [20, 200],
    value: 20,
    subcategory: "Rag Axe",
    shouldShow(data){ return data.ragDetect }
})
.addDropDown({
    category: "Notifications",
    configName: "ragstrengtrhcolor",
    title: "Color of Strength Number",
    description: "The Color that will be displayed for the Strength Gained",
    options: ["Black","Dark Blue","Dark Green","Dark Aqua","Dark Red","Dark Purple","Gold","Gray","Dark Gray","Blue","Green","Aqua","Red","Light Purple","Yellow","White"],
    value: 0,
    subcategory: "Rag Axe",
    shouldShow(data){ return data.ragDetect }
})
.addTextInput({
    category: "Notifications",
    configName: "ragmessage",
    title: "Rag Axe Message",
    description: "Input will appear on screen. Colors and formatting can be added. \n&aLeave blank for just the Stregnth number to appear.",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Rag Axe",
    shouldShow(data){ return data.ragDetect }
})
.addSwitch({
    category: "Notifications",
    configName: "customragsound",
    title: "Custom Rag Sound",
    description: "Allows you to replace the wolf cry with any other sound.",
    subcategory: "Rag Axe"
})
.addTextInput({
    category: "Notifications",
    configName: "RagCustomSound",
    title: "Input Sound (Rag Axe)",
    description: "Example: note.harp",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Rag Axe",
    shouldShow(data){ return data.customragsound }
})
.addSwitch({
    category: "Notifications",
    configName: "ragCoolDown",
    title: "Rag Cooldown Timer",
    description: "Places a timer on your screen for rag axe cooldown.",
    subcategory: "Rag Axe"
})
.addSwitch({
    category: "Notifications",
    configName: "goldenfishdetect",
    title: "Golden Fish Notification",
    description: "Sends a chat message when a Golden Fish is spotted.",
    subcategory: "Fishing"
})
.addSwitch({
    category: "Notifications",
    configName: "pickCoolNotif",
    title: "Pickaxe Cooldown Notification",
    description: "Shows a title when your pickaxe ability is off cooldown.",
    subcategory: "Misc"
})
.addSwitch({
    category: "Notifications",
    configName: "jerryNotif",
    title: "Jerry Notifications",
    description: "Sends a chat message when a Jerry spawns.",
    subcategory: "Misc"
})
.addToggle({
    category: "Notifications",
    configName: "goldenJerry",
    title: "Golden Jerry",
    description: "",
    subcategory: "Misc",
    shouldShow(data){ return data.jerryNotif }
})
.addToggle({
    category: "Notifications",
    configName: "purpleJerry",
    title: "Purple Jerry",
    description: "",
    subcategory: "Misc",
    shouldShow(data){ return data.jerryNotif }
})
.addToggle({
    category: "Notifications",
    configName: "blueJerry",
    title: "Blue Jerry",
    description: "",
    subcategory: "Misc",
    shouldShow(data){ return data.jerryNotif }
})
.addToggle({
    category: "Notifications",
    configName: "greenJerry",
    title: "Green Jerry",
    description: "",
    subcategory: "Misc",
    shouldShow(data){ return data.jerryNotif }
})
.addSwitch({
    category: "ESPS",
    configName: "starmobesp",
    title: "Star Mob ESP",
    description: "",
    subcategory: "Dungeons"
})
.addColorPicker({
    category: "ESPS",
    configName: "boxStarredMobColor",
    title: "Star Mob Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "Dungeons",
    shouldShow(data){ return data.starmobesp }
})
.addColorPicker({
    category: "ESPS",
    configName: "felboxcolor",
    title: "Starred Fels Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "Dungeons",
    shouldShow(data){ return data.starmobesp }
})
.addSwitch({
    category: "ESPS",
    configName: "boxsa",
    title: "Shadow Assassin ESP",
    description: "",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "ESPS",
    configName: "batesp",
    title: "Bat ESP",
    description: "",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "ESPS",
    configName: "batesptracer",
    title: "Draw Tracer to Bat",
    description: "",
    subcategory: "Dungeons",
    shouldShow(data){ return data.batesp }
})
.addColorPicker({
    category: "ESPS",
    configName: "batespcolor",
    title: "Bat ESP Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "Dungeons",
    shouldShow(data){ return data.batesp }
})
.addSwitch({
    category: "ESPS",
    configName: "spiritbearesp",
    title: "Spirit Bear ESP",
    description: "",
    subcategory: "Dungeons"
})
.addColorPicker({
    category: "ESPS",
    configName: "spiritbearespcolor",
    title: "Spirit Bear Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "Dungeons",
    shouldShow(data){ return data.spiritbearesp }
})
.addSwitch({
    category: "ESPS",
    configName: "lividSolver",
    title: "Livid ESP",
    description: "",
    subcategory: "Dungeons"
})
.addColorPicker({
    category: "ESPS",
    configName: "lividBoxColor",
    title: "Livid Color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "Dungeons",
    shouldShow(data){ return data.lividSolver }
})
.addSwitch({
    category: "ESPS",
    configName: "Runicmobesp",
    title: "Runic Mob ESP",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "ESPS",
    configName: "arachneesp",
    title: "Arachne ESP",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "ESPS",
    configName: "RatESP",
    title: "Rat ESP",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "ESPS",
    configName: "MatchoESP",
    title: "Matcho ESP",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "ESPS",
    configName: "PrimalFearESP",
    title: "Primal Fear ESP",
    description: "",
    subcategory: "General"
})
.addSwitch({
    category: "ESPS",
    configName: "playeresp",
    title: "Player ESP",
    description: "",
    subcategory: "Players"
})
.addDropDown({
    category: "ESPS",
    configName: "playerespmode",
    title: "Player ESP Mode",
    description: "Run /da help for all Player ESP Commands.",
    options: ["All Players", "Specific Players"],
    value: 0,
    subcategory: "Players",
    shouldShow(data){ return data.playeresp }
})
/*.addTextInput({
    category: "ESPS",
    configName: "playerespwhitelist",
    title: "Player ESP List",
    description: "Searches for & boxes specified players. Enter names separated by a space.",
    value: "",
    placeHolder: "Input Here",
    subcategory: "Players",
    shouldShow(data){ return data.playeresp && data.playerespmode === 1 }
})*/
.addSwitch({
    category: "ESPS",
    configName: "trapperesp",
    title: "Trapper ESP",
    description: "SkyHanni has one so we do too. Unlike Skyhanni, ours works in The Oasis.",
    subcategory: "Farming"
})
.addSlider({
    category: "ESPS",
    configName: "trapperscansize",
    title: "Trapper Scan Radius",
    description: "",
    options: [10, 500],
    value: 10,
    subcategory: "Farming",
    shouldShow(data){ return data.trapperesp }
})
.addSwitch({
    category: "ESPS",
    configName: "coreESP",
    title: "Corleone ESP",
    description: "",
    subcategory: "Mining"
})
.addSwitch({
    category: "ESPS",
    configName: "KeyGESP",
    title: "Key Guardian ESP",
    description: "",
    subcategory: "Mining"
})
.addSwitch({
    category: "ESPS",
    configName: "bfESP",
    title: "Butterfly ESP",
    description: "",
    subcategory: "Mining"
})
.addSwitch({
    category: "ESPS",
    configName: "ggESP",
    title: "Golden Goblin ESP",
    description: "",
    subcategory: "Mining"
})
.addSwitch({
    category: "ESPS",
    configName: "dgESP",
    title: "Diamond Goblin ESP",
    description: "",
    subcategory: "Mining"
})
.addSwitch({
    category: "ESPS",
    configName: "oldwolfESP",
    title: "Old Wolf ESP",
    description: "",
    subcategory: "Slayers"
})
.addSwitch({
    category: "ESPS",
    configName: "GiftESP",
    title: "Glacial Cave Treasure ESP",
    description: "If this feature is turned on while you're in Jerry's Workshop you will need to rejoin the island for it to take effect.",
    subcategory: "Jerry's Workshop"
})
.addSwitch({
    category: "ESPS",
    configName: "femboyESP",
    title: "Femboy ESP",
    description: "For the gayest femboy of them all :3",
    subcategory: "Misc"
})
.addButton({
    category: "Misc",
    configName: "instaBan",   
    title: "Non Remover",
    description: "Removes Nons from Skyblock",
    subcategory: "Misc",
    onClick(setting) {
        setTimeout(() => {ChatLib.command("limbo")}, 2500);
        const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText")
		Client.currentGui.close()
		setTimeout(() => {Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(
		 "§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n\n" + 
		  `§7Reason: §rCheating through the use of unfair game advantages.\n` + 
		  "§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"
		 + "8CAC276C" + 
		 "\n§7Sharing your Ban ID may affect the processing of your appeal!"))}, 4500);
    }
})
.addSwitch({
    category: "Chat Blockers",
    configName: "blockBINTW",
    title: "Block \"There are blocks in the way!\"",
    description: "",
    subcategory: "Spam"
})
.addSwitch({
    category: "Chat Blockers",
    configName: "BlockGUILDEXP",
    title: "Block \"You earned # GEXP + # Event EXP from playing SkyBlock!\"",
    description: "",
    subcategory: "Spam"
})
/*
.addSwitch({
    category: "Chat Blockers",
    configName: "MuteMessage",
    title: "Block \"You are currently muted for a chat infraction!\"",
    description: "",
    subcategory: "Spam"
})
*/
.addSwitch({
    category: "Chat Blockers",
    configName: "hideprofileid",
    title: "Block Profile ID Message",
    description: "Blocks the profile ID message.",
    subcategory: "Skyblock"
})
.addSwitch({
    category: "Chat Blockers",
    configName: "hideprofilemsg",
    title: "Block Profile Message",
    description: "Blocks \"You are playing on [FRUIT] profile.\"",
    subcategory: "Skyblock"
})
.addSwitch({
    category: "Chat Blockers",
    configName: "LotteryMsg",
    title: "Block Annoying HOTF Perk Disable Message",
    description: "Blocks \"You can disable this message by toggling Lottery in your /hotf!\"",
    subcategory: "Skyblock"
})
.addSwitch({
    category: "Chat Blockers",
    configName: "LinkWarningMsg",
    title: "Block Party Finder Warning Message",
    description: "",
    subcategory: "Dungeons"
})
.addButton({
    category: "Misc",
    configName: "soundlistlink",
    title: "Sound List",
    description: "Takes you a website that lists all sounds you can use for all of our sound replacement mods. \n&cOpens a new tab in your browser.",
    subcategory: "",
    onClick() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/mapping-and-modding-tutorials/2213619-1-8-all-playsound-sound-arguments"))
    },
    shouldShow(data) { return data.etherwarpding }
})
.addSwitch({
    category: "Misc",
    configName: "showdebug",
    title: "Show Debug Messages",
    description: "",
    subcategory: "Debug"
})
.addSwitch({
    category: "Misc",
    configName: "BottleDisplay",
    title: "Bottle Progress Display",
    description: "Displays Charge Bottles Progress",
    subcategory: "General"
})

//Declare categories and write settings file
const categories = ["Dungeons", "Party Finder", "ESPS", "Notifications", "! Commands", "Chat Blockers", "Misc"]
const config = new Settings("DawnAddons", defaultConf, "data/ColorScheme.json")
    .setCategorySort((a, b) => categories.indexOf(a.category) - categories.indexOf(b.category))
    .setClickSound(() => {
        World.playSound("gui.button.press", 0.8, 1.5)
    })
    .apply() // apply the sorting changes

//Color scheme
const scheme = JSON.parse(FileLib.read("DawnAddons", "data/ColorScheme.json"))
FileLib.write("DawnAddons", "data/ColorScheme.json", JSON.stringify(scheme, null, 4))

//Draw purple line, version number, and our ego boost
const rcolor = Renderer.color(187, 134, 252)
config.getHandler().registers.onDraw(() => {
    const mb = config.mainBlock;
    const width = mb.getRight() - mb.getLeft();
    const height = mb.getBottom() - mb.getTop();
    //Purple line
    Renderer.drawLine(rcolor, mb.getLeft() + width * 0.20, mb.getTop() + height * 0.05, mb.getLeft() + width * 0.20, mb.getBottom() - height * 0.05, 2);
    //Draw version number
    Renderer.colorize(187, 134, 252, 255)
    Renderer.drawString(`v${JSON.parse(FileLib.read("DawnAddons", "metadata.json")).version}`, mb.getRight() - 31, mb.getBottom() - 12)
    //Draw ego boost
    Renderer.scale(0.85)
    Renderer.drawString(`Created by \n&5Dawn &rand &bChilly`, mb.getLeft() + 45, mb.getBottom() + 36)
})

//Apply settings and some other shit
config
    .setPos(0, 0)
    .setSize(60, 60)
    .setScheme("data/ColorScheme.json")
    .apply()

//Dynamic Description Height    
const textWrap = config.AmaterasuGui.descriptionElement.textWrap
textWrap.enabled = false // Set to false so the description does not get wrapped
textWrap.linesLimit = 2 // Set the limit of vertical lines (`2` is set by default so you can avoid setting it)
textWrap.removeLines = 1 // Set the amount of lines to remove when calculating the new height (`1` is set by default this is mostly for padding issues)
textWrap.wrapHeight = 7 // Set the amount of "text height" this is the value that will be used to calculate the new height (`7` is set by default)
config.AmaterasuGui.apply()

//Build GUI
export default () => config.settings;