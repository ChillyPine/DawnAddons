import settings from '../../config'
import RenderLib from '../../../RenderLib/index';

//drawCyl = (x, y, z, baseRadius, topRadius, height, slices, stacks, rot1, rot2, rot3, r, g, b, a, phase, linemode)
//drawInnerEspBox = (x, y, z, w, h, red, green, blue, alpha, phase)

/*
3x3 circle on floor
RenderLib.drawCyl(x, y, z, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 1, 0, 0, 0.5, true, true);
*/
let InWitherKing = false;

register("renderWorld", () => {
    if (!InWitherKing || !settings().ArrowStackHelper) return;

    // Purple
    RenderLib.drawCyl(34, 6, 102, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 1, 0, 1, 0.5, true, true);
    RenderLib.drawCyl(77, 6, 102, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 1, 0, 1, 0.5, true, true);
    RenderLib.drawInnerEspBox(56, 21.3, 129, 1, 1, 1, 0, 1, 0.4, true);

    // Blue
    RenderLib.drawCyl(45, 6, 102, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 0, 0, 1, 0.5, true, true);
    RenderLib.drawInnerEspBox(89, 22, 96, 1, 1, 0, 0, 1, 0.4, true);

    // Green
    RenderLib.drawCyl(58, 5, 71, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 0, 1, 0, 0.5, true, true);
    RenderLib.drawInnerEspBox(23, 23, 93.4, 1, 1, 0, 1, 0, 0.4, true);   

    // Red
    RenderLib.drawCyl(31, 5, 88, 1.2, 1.2, 0, 50, 1, 0, 90, 90, 1, 0, 0, 0.5, true, true);
    RenderLib.drawCyl(16, 6, 88, 1.2, 1.2, 0, 50, 1, 0, 90, 90, 1, 0, 0, 0.5, true, true);
    RenderLib.drawInnerEspBox(32, 22, 60, 1, 1, 1, 0, 0, 0.4, true);

    // Orange
    RenderLib.drawCyl(78, 5, 92, 1.5, 1.5, 0, 50, 1, 0, 90, 90, 1, 0.6, 0, 0.5, true, true);
    RenderLib.drawInnerEspBox(81.4, 21.6, 57, 1, 1, 1, 0.6, 0, 0.4, true);
});

register('chat', () => {
    InWitherKing = true;
}).setCriteria("[BOSS] Wither King: Ohhh?");

register('chat', () => {
    InWitherKing = true;
}).setCriteria("[BOSS] Wither King: You... again?");

register("worldUnload", () => {
    InWitherKing = false;
});
