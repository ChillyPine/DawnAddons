import settings from "./config"

register("command", (arg) => {
    if (arg === "help") {
        ChatLib.chat("&r&r&7&m----------------------------------------------------"); 
        ChatLib.chat("&6/da &f: Opens gui");
        ChatLib.chat("&6/shitteradd {IGN} &f: Adds a player to the shitter list");
        ChatLib.chat("&6/shitterremove {IGN} &f: Removes a player from the shitter list");
        ChatLib.chat("&6/showshitterlist &f: Displays shitter list");   
        ChatLib.chat("&6/dawnaddons_shitterlist_reset &f: Removes every player on Shitter list");
        ChatLib.chat("&6/dawn_reset &f: Removes all shown coords");
        ChatLib.chat("&r&r&7&m-----------------------------------------------------");
    } else if (!arg) {
        return settings().getConfig().openGui();
    } else {
        ChatLib.chat("&5[Dawn&6Addons&5] &cError: Unknown command. Use &6/da help &cfor all commands.");
    }
}).setName("da").setAliases(["dawn"]);



const prefix = "&5[Dawn&6Addons&5]";
const Debuger = "&5[D&6A&a DebugMode&5]"

/*
This is a Chat Triggers Module for Hypixel Skyblock. Some of the code is taken from other modules
where ever code is taken the creater is given credit via a comment in the code. If you see your code
here and are not credited, or do not wish it to be here please contact me in game. IGN DwnInFraggleRock.
*/

ChatLib.chat(prefix + " &fInitializing");

// DUNGEONS CATEGORY
import './features/Dungeons/HideDoors';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Hide Doors");
}
import './features/Dungeons/Blacklist';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported ShitterList");
}
import './utils/EventListener';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported EventListner");
}
import './features/Dungeons/announceshitter';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Shitter Announce");
}
import './features/Dungeons/DungDevice';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Simon Says Timer");
}
import './features/Dungeons/watcheryapping';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Watcher Yapping");
}
import './features/Dungeons/FFTimer';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported FF Timer");
}
import './features/Dungeons/partyfinder';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Party Finder Overlay");
}
import './features/Dungeons/autokick';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Auto Kick");
}
import './features/Dungeons/witherKey';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Wither Key ESP");
}
import './features/Dungeons/AtPLACE';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported At PLACE");
}
import './features/Dungeons/postionalMessage'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Positional Messages")
}
import './features/Dungeons/BoxStorm'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Box Storm")
}
import './features/Dungeons/NecronStuff'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Necron Stuff")
}
import './features/Dungeons/BoxGolder'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Box Goldor")
}
import './features/Dungeons/StackHelper'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Stack Helper")
}
import './features/Dungeons/m5WishNotification'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported M5 Wish Notif")
}
import './features/Dungeons/Holding'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Holding")
}
import './features/Dungeons/BoxSA'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported BoxSA")
}

// MISC
import './features/Diana/Dianashit';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Diana Shit");
}
/*import './features/Misc/WaypointCreator';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Waypoints");
}*/
import './features/Misc/quickmaths';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Quick Maths");
}
import './features/Mining/AmethystCrystalFinder';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Crystal Finder");
}
import './features/Misc/!Commands';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported !Commands");
}

// NOTIS
import './features/Notifications/BonzoSpirtPhoenix';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Bonzo Spirt Phoenix");
}
import './features/Notifications/GoldenfishNotifier';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Golden Fish Notifs");
}
import './features/Notifications/Notifications';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Notifications");
}
import './features/Notifications/VanquisherNotifier';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Vanq Notifs");
}
import './features/Notifications/WatcherNotifications';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Watcher Notifs");
}
import './features/Notifications/JerryNotifier';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Jerry Notifs");
}
import './features/Notifications/PickaxeCooldown';
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Pickaxe Cooldown");
}
import './features/Misc/Sounds'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Sounds");
}
import './features/Misc/Deployrange'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Deploy Range");
}
import './features/Misc/RagAxeStuff'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Rag Axe Stuff")
}
import './features/Misc/TrapperESP'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Trapper ESP")
}
import './features/Misc/ESPS'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported ESPS")
}
import './features/Misc/BetterPartyList'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported BetterPartyList")
}
import './features/Misc/RealTime'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Real Time")
}
import './features/Misc/TacInsertTimers'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported TacInsert Timers")
}
import './features/ChatBlcoker/ChatBlocker'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Chat Blocker")
}
import './features/Misc/ShortPF'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Short PF")
}
import './features/Notifications/ArrowNotifier'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Arrow Notifier")
}
import './features/Notifications/BottleFullNotif'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Bottle Full Notifier")
}
import './features/Misc/pickobulusBlocker'
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &fImported Pickobulous Blocker")
}

//The below message lists all currently disabled modules/features. 
// `(config)` indicates that it's been disabled in config.js, `(index)` indicates that it's been disabled in index.js, and `(.js)` indicates that it's been disabled in the actual code.
if (settings().showdebug) {
    ChatLib.chat(Debuger + " &r&lCurrently Disabled Features: &c&lWaypoint Creator (index)&r&l, &r&c&lParty Finder Stats + All Dependencies (config)&r&l, &r&c&lMute Message Chat Blocker (config, .js)")
}
ChatLib.chat(prefix + " &fInitializing &aComplete");
//;)