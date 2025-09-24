import settings from '../../config'
import RenderLib from '../../../RenderLib/index'


register("renderWorld", () => {
    if(settings().trapperesp){    
        const playerY = Player.getRenderY() + (Player.isSneaking() ? 1.54 : 1.62);

        World.getAllEntities().forEach(ent => {
            const ScanRadius = settings().trapperscansize
            if(ent.getClassName() == "EntityArmorStand"){
                if(ent.distanceTo(Player.getX(), Player.getY(), Player.getZ())>ScanRadius) return

                if(ent.getName().includes("Trackable")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 1, 1, 1, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 1, 1, 2);
                }
                if(ent.getName().includes("Untrackable")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 1, 0, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 0, 1, 2);
                }
                if(ent.getName().includes("Undetected")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 0, 1, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 0, 1, 1, 2);
                }
                if(ent.getName().includes("Endangered")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 1, 0, 1, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 1, 0, 1, 1, 2);
                }
                if(ent.getName().includes("Elusive")){
                    RenderLib.drawEspBox(ent.getX(), ent.getY() - 1, ent.getZ(), 1, 1, 0, 1, 1, 1, true);
                    drawLine(Player.getRenderX(), playerY, Player.getRenderZ(), ent.getX(), ent.getY() - 1, ent.getZ(), 0, 1, 1, 1, 2);
                }
            }

        })
    }

})


// Draw line function
function drawLine(x1, y1, z1, x2, y2, z2, red, green, blue, alpha, lineWidth) {
    GL11.glBlendFunc(770, 771)
    GL11.glEnable(GL11.GL_BLEND)
    GL11.glLineWidth(lineWidth)
    GL11.glDisable(GL11.GL_TEXTURE_2D)
    GL11.glDisable(GL11.GL_DEPTH_TEST)
    GL11.glDepthMask(false)
    GlStateManager.func_179094_E()

    Tessellator.begin(GL11.GL_LINES).colorize(red, green, blue, alpha)
    Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.pos(x2, y2, z2).tex(0, 0)
    Tessellator.draw()

    GlStateManager.func_179121_F()
    GL11.glEnable(GL11.GL_TEXTURE_2D)
    GL11.glEnable(GL11.GL_DEPTH_TEST)
    GL11.glDepthMask(true)
    GL11.glDisable(GL11.GL_BLEND)
}