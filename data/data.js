import { DataStore } from "../../tska/storage/DataStore"

// Create a DataStore instance for DawnAddons
export const dataStore = new DataStore("DawnAddons", "data/")

// Helper functions to manage the blacklist
export const shitterData = {
    get blacklist() {
        const data = dataStore.fromFile("shitterList.json", true)
        return data.blacklist || []
    },
    
    set blacklist(value) {
        dataStore.saveTo("shitterList.json", { blacklist: value })
    },
    
    save() {
        // No-op since setter already saves, but kept for compatibility
    }
}

// For specific player ESP
export const playerESPData = {
    get playerWhitelist() {
        const data = dataStore.fromFile("playerESP.json", true)
        return data.playerWhitelist || []
    },
    
    set playerWhitelist(value) {  // CHANGED: was "blacklist", now "playerWhitelist"
        dataStore.saveTo("playerESP.json", { playerWhitelist: value })
    },
    
    save() {
        // No-op since setter already saves, but kept for compatibility
    }
}