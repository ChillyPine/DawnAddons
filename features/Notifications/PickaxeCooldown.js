import settings from '../../config'
// const prefix = "&5[Dawn&6Addons&5]";

register('chat', () => {
    if (!settings().pickCoolNotif) return
    Client.showTitle("", "&bPickaxe Ability Ready", 0, 30, 0);
}).setCriteria(/(Pickobulus|Mining Speed Boost|Maniac Miner|Tunnel Vision|Sheer Force|Gemstone Infusion) is now available!/g)