import settings from '../../config'
import RenderLib from '../../../RenderLib/index'

const EntityArmorStand = Java.type('net.minecraft.entity.item.EntityArmorStand')


//Box dat thing
register('renderEntity', (entity) => {
    let mcEntity = entity.entity;
    if (!settings().DisplayDeploy) return 
    if (mcEntity instanceof EntityArmorStand) {
        const entityName = entity.getName();

        if (entityName.includes('Plasmaflux')) {
            RenderLib.drawEspBox(entity.getX(), entity.getY() - 1.15, entity.getZ(), 1, 1, 1, 0, 1, 1, settings().DepthCheck);
        }
        if (entityName.includes('Overflux')) {
            RenderLib.drawEspBox(entity.getX(), entity.getY() - 1.15, entity.getZ(), 1, 1, 1, 0, 0, 1, settings().DepthCheck);
        }
        if (entityName.includes('Mana Flux')) {
            RenderLib.drawEspBox(entity.getX(), entity.getY() - 1.15, entity.getZ(), 1, 1, 0, 0, 1, 1, settings().DepthCheck);
        }
        if (entityName.includes('Radiant Power')) {
            RenderLib.drawEspBox(entity.getX(), entity.getY() - 1.15, entity.getZ(), 1, 1, 0, 1, 0, 1, settings().DepthCheck);
        }
        
    }
})

