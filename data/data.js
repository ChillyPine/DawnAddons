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