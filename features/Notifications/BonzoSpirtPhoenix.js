import settings from '../../config'

let SpiritUsed = false
let BonzoUsed = false
let PhoeoPetUsed = false

const prefix = "&5[Dawn&6Addons&5]";


// Bonzo Mask
register("chat", () => {
    if (!settings().BSPM) return
    
    BonzoUsed = true
    ChatLib.command('pc Bonzo Mask Used!');
    Client.showTitle("", "&cBonzo Used", 0, 70, 0);

    if (BonzoUsed) {
        //Begin tracking if useable
        setTimeout(() => {
            bonzoUsed = false
            if (settings().BSPMR) {
                Client.showTitle("", "&aBonzo Ready", 0, 70, 0);
                ChatLib.chat(prefix + ' &fBonzo Mask Ready!');
            }
        }, 180000);
    }

}).setCriteria("Your ⚚ Bonzo's Mask saved your life!");

// Spirit Mask
register("chat", () => {
    if (!settings().BSPM) return
    SpiritUsed = true
    ChatLib.command('pc Spirit Mask Used!');
    Client.showTitle("", "&cSpirit Used", 0, 70, 0);
    if (SpiritUsed) {
        //Begin tracking if useable
        setTimeout(() => {
            SpiritUsed = false
            if (settings().BSPMR) {
                Client.showTitle("", "&aSpirit Ready", 0, 70, 0);
                ChatLib.chat(prefix + ' &fSpirit Mask Ready!');
            }
        }, 30000);
    }

}).setCriteria("Second Wind Activated! Your Spirit Mask saved your life!");

// Phoenix Pet
register("chat", () => {
    if (!settings().BSPM) return
    
    PhoeoPetUsed = true
    ChatLib.command('pc Phoenix Used!');
    Client.showTitle("", "&cPhoenix Used", 0, 70, 0);

    if (PhoeoPetUsed) {
        //Begin tracking if useable
        setTimeout(() => {
            PhoeoPetUsed = false
            if (settings().BSPMR) {
                Client.showTitle("", "&aPhoenix Ready", 0, 70, 0);
                ChatLib.chat(prefix + ' &fPhoenix Pet Ready!');
            }
        }, 60000);
    }
}).setCriteria("Your Phoenix Pet saved you from certain death!");


//reset incase hypixel is ass
register('worldUnload', () => {
    SpiritUsed = false
    BonzoUsed = false
    PhoeoPetUsed = false
});

