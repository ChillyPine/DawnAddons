import settings from '../../config'
import RenderLibV2 from "../../../RenderLibV2";

const EntityWither = Java.type("net.minecraft.entity.boss.EntityWither");


// Define the renderWorld callback and unregister it immediately
const render = register("renderWorld", () => {
    const storm = World.getAllEntitiesOfType(EntityWither)
        .find(entity => !entity.isInvisible());

    if (!storm) return;
    
    const StormColorBox = RenderLibV2.getColor(settings().StormColor); 

    RenderLibV2.drawEspBox(
        storm.getRenderX(),
        storm.getRenderY() + 0.3,
        storm.getRenderZ(),
        1,
        2,
        StormColorBox.red,
        StormColorBox.green,
        StormColorBox.blue,
        1,
        true
    );
    RenderLibV2.drawInnerEspBox(
        storm.getRenderX(),
        storm.getRenderY() + 0.3,
        storm.getRenderZ(),
        1,
        2,
        StormColorBox.red,
        StormColorBox.green,
        StormColorBox.blue,
        0.21,
        true
    );

}).unregister();

// Activate rendering when Storm starts
register("chat", () => {
    if (!settings().stormbox) return
    render.register();
}).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.");

// Deactivate rendering when Goldor starts
register("chat", () => {
    render.unregister();
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?");

// Ensure cleanup on world unload
register("worldUnload", () => {
    render.unregister();
});
