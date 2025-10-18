import settings from '../../config'
const prefix = "&5[Dawn&6Addons&5]";

// Quick Maths Solver
register("chat", (math) => {
    if (!settings().quickmathsprimalfear) return;
    const calculation = math.replaceAll(/(\x+)/g, "*").replace(/[^-()\d/*+.]/g, "");
    const answer = eval(calculation);
    setTimeout(() => {
        ChatLib.chat(`${prefix} &dQuick Maths Answer: &a&l${answer}`);
    }, 200); //Dont send message before it appears in chat
}).setCriteria("QUICK MATHS! Solve: ${math}")