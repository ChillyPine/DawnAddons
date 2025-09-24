import settings from '../../config'

register("chat", () => {
    if (!settings().m5Wish) return;
    Client.showTitle("", "&4WISH", 0, 70, 0);
    setTimeout(() => {
    World.playSound("mob.zombie.remedy", 0.9, 0.5)
    }, 50)
}).setCriteria("[BOSS] Livid: I respect you for making it to here, but I'll be your undoing.");