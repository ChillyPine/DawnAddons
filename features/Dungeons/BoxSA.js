import settings from '../../config'
import RenderLib from '../../../RenderLib/index'
import Dungeon from "../../../BloomCore/dungeons/Dungeon"

register("renderWorld", () => {
    if(settings().boxsa && Dungeon.inDungeon){    

        World.getAllEntities().forEach(ent => {
            if(ent.getClassName() == "EntityOtherPlayerMP"){
                if(ent.getName().includes("Shadow Ass")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY(), ent.getZ(), 1, 2, 0, 1, 1, 1, true);
                }
            }

        })
    }
})