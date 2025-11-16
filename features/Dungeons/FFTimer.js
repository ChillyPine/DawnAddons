import settings from '../../config'

let countdownTimers = [];

register("chat", () => {
    if (!settings().fftimer) return;
    
    countdownTimers = [];
    
    // Schedule all countdowns
    const countdowns = [
        { delay: 1500, text: "&5&kH&r&64&r&5&kH&r" },
        { delay: 2500, text: "&5&kH&r&63&r&5&kH&r" },
        { delay: 3500, text: "&5&kH&r&62&r&5&kH&r" },
        { delay: 4500, text: "&5&kH&r&61&r&5&kH&r" },
        { delay: 5500, text: "&4&kH&r&6NOW!&r&4&kH&r" }
    ];
    
    countdowns.forEach(({ delay, text }) => {
        const timer = setTimeout(() => {
            Client.showTitle(text, "", 0, 20, 0);
        }, delay);
        countdownTimers.push(timer);
    });
}).setCriteria("[BOSS] The Professor: Oh? You found my Guardians' one weakness?");

register("worldUnload", () => {
    countdownTimers.forEach(timer => clearTimeout(timer));
    countdownTimers = [];
});