import settings from '../../config'

const prefix = "&5[Dawn&6Addons&5]";


//Ether Warp Ding
register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if(!settings().etherwarpding) return
    if (name.includes("mob.enderdragon.hit") && pitch === 0.5396825671195984) {
        cancel(event)
        World.playSound(settings().etherwarpsoundsreplacment, 100.0, 1.0)
    }
}).setCriteria("mob.enderdragon.hit")

//End of run sounds
let soundtrackPlayed = false; // Tracks if the soundtrack has been played


register("chat", () => {
    if (!settings().endrunmusic || soundtrackPlayed) return; // Only play if enabled and not already played
    const soundtracks = [
        "records.mall",
        "records.blocks",
        "records.cat",
        "records.chirp",
        "records.far",
        "records.mellohi",
        "records.stal",
        "records.strad",
        "records.wait",
        "records.ward",
    ];
    const randomSoundtrack = soundtracks[Math.floor(Math.random() * soundtracks.length)];
    const soundtrackName = randomSoundtrack.split(".")[1]; // Extract the part after "records."
    setTimeout(() => {
        ChatLib.chat(prefix + `&f Now enjoying ${soundtrackName}`);
    }, 200);
    World.playSound(randomSoundtrack, 100.0, 1.0);
    soundtrackPlayed = true; // Mark as played
}).setCriteria(/^ *Team Score: (\d+) \(([\w\+]{1,2})\)$/)




register("chat", () => {
    soundtrackPlayed = false
}).setCriteria('Starting in 1 second.'),
    


register("worldUnload", () => {
    soundtrackPlayed = false
    if (currentSound) {
        World.playSound(currentSound, 0.0, 1.0); 
        currentSound = null; // Reset the currentSound variable
    }
});
