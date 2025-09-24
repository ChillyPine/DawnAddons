import settings from '../../config'
import { ItemUtils } from "../../utils/Utils";


register("tick", () => {
    if(!settings().CrystalHolder) return
    if (ItemUtils.InvCheck("Energy Crystal")) {
        Client.showTitle("", `&cHolding Crystal`, 0, 3, 0);
    }
})

register("tick", () => {
    if(!settings().RelicHolder) return
    if (ItemUtils.InvCheck("Relic")) {
        Client.showTitle("", `&cHolding Relic`, 0, 3, 0);
    }
})