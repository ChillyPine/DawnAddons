import config from "../config";

const NBTTagString = Java.type("net.minecraft.nbt.NBTTagString");

export function isHoldItem(id) {
    return Player.getHeldItem()?.getNBT()?.toObject()?.tag?.ExtraAttributes?.id === id;
}

export function getId(item) {
    return item?.getNBT()?.toObject()?.tag?.ExtraAttributes?.id;
}

export function getItemScroll(item) {
    return Player.getHeldItem()?.getNBT()?.toObject()?.tag?.ExtraAttributes?.ability_scroll;
}

export function getCandyUsed(pet) {
    return JSON.parse(pet.getNBT()?.toObject()?.tag?.ExtraAttributes?.petInfo).candyUsed;
}

export function getPetXP(pet) {
    return JSON.parse(pet.getNBT()?.toObject()?.tag?.ExtraAttributes?.petInfo).exp;
}

export function getPetType(pet) {
    return JSON.parse(pet.getNBT()?.toObject()?.tag?.ExtraAttributes?.petInfo).type;
}

/**
 * Converts a number to a string in k, m, b notation
 *
 * @param {Number} num - Base number to convert.
 * @param {Number} significantDigits - Number of significant digits to display.
 * @returns {String} Formatted number if k, m, b notation
 */
export function formatNumber(num, significantDigits = 5) {
    if (isNaN(num) || num === 0) return "0";
  
    const sign = Math.sign(num);
    const absNum = Math.abs(num);
  
    if (absNum < 1) return (sign === -1 ? "-" : "") + absNum.toFixed(2);
  
    const abbrev = ["", "k", "m", "b", "t", "q", "Q"];
    const index = Math.floor(Math.log10(absNum) / 3);
  
    let formattedNumber = ((sign === -1 ? -1 : 1) * absNum) / Math.pow(10, index * 3);
    const digits = formattedNumber.toFixed(0).length;
    formattedNumber = formattedNumber.toFixed(MathLib.clamp(significantDigits - digits, 0, 2)) + abbrev[index];
  
    // Check if the number is a whole number, and if so, remove the ".00"
    if (Number.isInteger(absNum) && absNum < 1_000) return String(parseInt(formattedNumber));
    return formattedNumber;
  }


export function getIGN(player) {
    let player_ign = player;

    // remove any suffixes that are not legal ign symbols starting from the tail
    player_ign = player_ign.replace(/[^0-9A-Za-z_]+$/, "");

    // preserve all legal ign symbols starting from the tail
    let match_list = player_ign.match(/[0-9A-Za-z_]+$/);

    if (match_list !== null) {
        player_ign = match_list[0];
    } else {
        player_ign = "";

        setTimeout(() => {
            ChatLib.chat(`error at IGN, input = "${player}"`);
        }, 50);
    }

    return player_ign;
}

export function getColorArray(color) {
    const red = color.getRed();
    const green = color.getGreen();
    const blue = color.getBlue();
    const alpha = color.getAlpha();

    return [red, green, blue, alpha];
}

export function romanToInt(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let letters = roman.split("");
    let result = 0;
    for (var i = 0; i < letters.length; i++) {
        if (romanNumerals[letters[i]] < romanNumerals[letters[i + 1]]) {
            result -= romanNumerals[letters[i]]
        } else {
            result += romanNumerals[letters[i]]
        }
    }
    return result;
}

export function getVec3Pos(vec) {
    // [Vec3.xCoord, Vec3.yCoord, Vec3.zCoord]
    return [vec.field_72450_a, vec.field_72448_b, vec.field_72449_c]
}

export function getVec3iPos(vec) {
    // [Vec3i.getX(), Vec3i.getY(), Vec3i.getZ()]
    return [parseInt(vec.func_177958_n()), parseInt(vec.func_177956_o()), parseInt(vec.func_177952_p())]
}

// Reference to https://github.com/Soopyboo32/SoopyV2/blob/master/src/utils/utils.js
export function addLore(item, prefix, value) {

    const list = item.
        getNBT().
        getCompoundTag("tag").
        getCompoundTag("display").
        getTagMap().
        get("Lore");

    let done = false;

    // Use to go pass all line 
    // mapping: list.tagCount
    for (let i = 0; i < list.func_74745_c(); i++) {
        // Check if at target line
        // mapping: list.getStringTagAt
        if (String(list.func_150307_f(i)).startsWith(prefix)) {
            // Replace the line to "prefix + value"
            // mapping: list.set()
            list.func_150304_a(i, new NBTTagString(prefix + value));
            done = true;
        }
    }
    if (!done) {
        // If not exist before then add it
        // mapping: list.appendTag()
        list.func_74742_a(new NBTTagString(prefix + value));
    }

    item.
        getNBT().
        getCompoundTag("tag").
        getCompoundTag("display").
        getRawNBT().
        func_74782_a("Lore", list); // mapping: setTag("Lore", list)
}

// This function from OdinClient https://github.com/odtheking/OdinClient/
/**
 * Returns the squared 3D distance between two Minecraft entities.
 * @param {object} mcEntity1 - The first Minecraft entity.
 * @param {object} mcEntity2 - The second Minecraft entity.
 * @returns {number} The squared 3D distance between the two entities.
 */
export function noSqrt3DDistance(mcEntity1, mcEntity2) {
    return Math.pow(mcEntity1.field_70165_t - mcEntity2.field_70165_t, 2) +
        Math.pow(mcEntity1.field_70163_u - mcEntity2.field_70163_u, 2) +
        Math.pow(mcEntity1.field_70161_v - mcEntity2.field_70161_v, 2)
}

/**
 * Returns the entity render parameters for a given Minecraft entity.
 * @param {object} mcEntity - The Minecraft entity.
 * @param {number} partialTicks - The partial ticks for rendering.
 * @returns {Array} An array with the entity render parameters.
 */
export function getEntityRenderParams(mcEntity, partialTicks) {
    return [
        mcEntity.field_70142_S + (mcEntity.field_70165_t - mcEntity.field_70142_S) * partialTicks,
        mcEntity.field_70137_T + (mcEntity.field_70163_u - mcEntity.field_70137_T) * partialTicks,
        mcEntity.field_70136_U + (mcEntity.field_70161_v - mcEntity.field_70136_U) * partialTicks,
        mcEntity.field_70130_N,
        mcEntity.field_70131_O
    ]
}
//From VolcADDONS
/**
 * Plays a sound and sets cooldown
 * 
 * @param {Sound} sound - A sound ogg file from constants.js 
 */
export function playSound(sound) {
    sound.play();
}