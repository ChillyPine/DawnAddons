import settings from "../../config";
import RenderLibV2 from "../../../RenderLibV2";
import { depthCheckObject } from "../Misc/ESPS";

const EntityWither = Java.type("net.minecraft.entity.boss.EntityWither");


// Define the renderWorld callback and unregister it immediately
const render = register("renderWorld", () => {
    const Golder = World.getAllEntitiesOfType(EntityWither)
        .find(entity => !entity.isInvisible());

    if (!Golder) return;
    
    const GolderBoxColor = RenderLibV2.getColor(settings().golderboxcolor); 

    RenderLibV2.drawEspBox(
        Golder.getRenderX(),
        Golder.getRenderY() + 0.3,
        Golder.getRenderZ(),
        1,
        2,
        GolderBoxColor.red,
        GolderBoxColor.green,
        GolderBoxColor.blue,
        1,
        depthCheckObject.depthCheck
    );
    RenderLibV2.drawInnerEspBox(
        Golder.getRenderX(),
        Golder.getRenderY() + 0.3,
        Golder.getRenderZ(),
        1,
        2,
        GolderBoxColor.red,
        GolderBoxColor.green,
        GolderBoxColor.blue,
        0.21,
        depthCheckObject.depthCheck
    );

}).unregister();

// Activate rendering when Golder starts
register("chat", () => {
    if (!settings().golderbox) return 
    render.register();
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?");

// Deactivate rendering when Goldor starts
register("chat", () => {
    render.unregister();
}).setCriteria("[BOSS] Necron: You went further than any human before, congratulations.");

// Ensure cleanup on world unload
register("worldUnload", () => {
    render.unregister();
});
