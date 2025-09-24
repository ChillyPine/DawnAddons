import { registerWhen } from "../../../BloomCore/utils/Utils"
import settings from '../../config'


registerWhen(register('renderEntity', (entity, pos, ticks, event) => {
	cancel(event)
}).setFilteredClass(Java.type("net.minecraft.entity.item.EntityFallingBlock").class), () => settings().hidedoors)