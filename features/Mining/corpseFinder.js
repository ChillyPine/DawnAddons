import settings from "../../config"
import { removeUnicode } from "../../utils/Function";

// Thanks to the creator of shaft utils for letting us skid their code without permission :D
let loggedCoords = [];
const formattedArmor = {
  "Lapis Armor Helmet": "Lapis",
  "Mineral Helmet": "Tungsten",
  "Yog Helmet": "Umber",
  "Vanguard Helmet": "Vanguard",
};
const corpseMessages = [];

export default register("step", () => {
  if (!settings().corpseFinder) return;
  const location = Scoreboard.getLines()
    .filter((line) => line.toString().split("").includes("⏣"))[0]
    ?.toString();
  const locationString = removeUnicode(ChatLib.removeFormatting(location));
  if (!locationString.includes("Glacite Mineshafts")) {
    loggedCoords = [];
    return;
  }


  const entities = World.getAllEntitiesOfType(
    net.minecraft.entity.item.EntityArmorStand
  ).map((entity) => new EntityLivingBase(entity.entity));

  const corpses = entities.filter((entity) => {
    const armorName = entity.getItemInSlot(4)?.getName()?.removeFormatting();
    return (
      armorName === "Lapis Armor Helmet" ||
      armorName === "Mineral Helmet" ||
      armorName === "Yog Helmet" ||
      armorName === "Vanguard Helmet"
    );
  });

  const formattedCorpses = corpses.map((corpse) => {
    const armorName = corpse.getItemInSlot(4)?.getName()?.removeFormatting();
    return {
      type: formattedArmor[armorName],
      posX: Math.floor(corpse.getX()),
      posY: Math.floor(corpse.getY()),
      posZ: Math.floor(corpse.getZ()),
    };
  });

  formattedCorpses.forEach((corpse, index) => {
    const coords = {
      x: corpse.posX,
      y: corpse.posY,
      z: corpse.posZ,
    };

    const alreadyLogged = loggedCoords.some((coord) => {
      return (
        coord.x === coords.x && coord.y === coords.y && coord.z === coords.z
      );
    });
    // Sends message in patcher coords format. This doesn't actually ESP the corpse.
    if (!alreadyLogged) {
      corpseMessages.push(`${corpse.type} corpse found! #${index + 1}`);
      corpseMessages.push(`x: ${corpse.posX}, y: ${corpse.posY}, z: ${corpse.posZ}`);
    }
    loggedCoords.push(coords);
  });

  if (corpseMessages.length) {
    ChatLib.command(`pc ${corpseMessages[0]}`);
    corpseMessages.shift();
  }
})
  .setFps(4)
  .setDelay(2);