import settings from '../../config'

// Quick Maths Solver
register("chat", (math) => {
    if (!settings().quickmathsprimalfear) return;
    const calculation = math.replaceAll(/(\x+)/g, "*").replace(/[^-()\d/*+.]/g, "");
    const answer = eval(calculation);
    setTimeout(() => {
        ChatLib.chat(`&dQuick Maths Answer: &a&l${answer}`)
    }, 200); //Dont send message before it appears in chat
}).setCriteria("QUICK MATHS! Solve: ${math}")