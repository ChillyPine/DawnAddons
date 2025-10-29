import { monthsShort } from "../../BloomCore/utils/Utils";

export const prefix = "&5[Dawn&6Addons&5] ";

export const line = "&m-".repeat(ChatLib.getChatWidth() / 6);

/**
 * Strips the user of the rank.
 *
 * @param {Number} UNIX_timestamp - unix timespamp
 * @returns {String} - d/m/y h:m:s
 */
export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = monthsShort[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}


// Useful Emojis Sorted by Attainment Mechanism
// emojis: {
//     mvp: {
//         '<3': '❤',
//         'o/': '( ﾟ◡ﾟ)/',
//         ':star:': '✮',
//         ':yes:': '✔',
//         ':no:': '✖',
//         ':java:': '☕',
//         ':arrow:': '➜',
//         ':shrug:': '¯\\_(\u30c4)_/¯',
//         ':tableflip:': '(╯°□°）╯︵ ┻━┻',
//         ':totem:': '☉_☉',
//         ':typing:': '✎...',
//         ':maths:': '√(π+x)=L',
//         ':snail:': "@'-'",
//         ':thinking:': '(0.o?)',
//         ':gimme:': '༼つ◕_◕༽つ',
//         ':wizard:': '(\' - \')⊃━☆ﾟ.*･｡ﾟ',
//         ':pvp:': '⚔',
//         ':peace:': '✌',
//         ':puffer:': "<('O')>"
//     },
//     gift: {
//         ':dab:': '<o/',
//         'h/': 'ヽ(^◇^*)/',
//         ':dog:': '(ᵔᴥᵔ)',
//         ':yey:': 'ヽ (◕◡◕) ﾉ',
//         ':cat:': '= ＾● ⋏ ●＾ =',
//         ':cute:': '(✿◠‿◠)',
//         ':snow:': '☃',
//         ':sloth:': '(・⊝・)',
//         ':dj:': 'ヽ(⌐■_■)ノ♬'
//     },
//     emojis_custom: {
//         ':skull:': '☠',
//         ':wheelchair:': '♿',
//         ':wc:': '♿',
//         ':caution:': '⚠',
//         ':warning:': '⚠',
//         ':explosion:': '✳',
//         ':biohazard:': '☣',
//         ':)': 'Â',
//         '0_0': '☉_☉',
//         ':!!:': '‼',
//         ':!?:': '⁉'
//     }

export function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var elapsed = current - previous;
    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }
    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }
    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }
    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }
    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }
    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

// Useful Emojis:
//     ':skull:': '☠',
//     ':wheelchair:': '♿',
//     ':wc:': '♿',
//     ':caution:': '⚠',
//     ':warning:': '⚠',
//     ':explosion:': '✳',
//     ':biohazard:': '☣',
//     ':)': 'Â',
//     '0_0': '☉_☉',
//     ':!!:': '‼',
//     ':!?:': '⁉'


export function isInDungeon() {
    try {
        return TabList?.getNames()?.some(a => a.removeFormatting() == 'Dungeon: Catacombs')
    } catch (e) { }
}

export class ItemUtils {
    /**
         * Used to check if the inventory contains a certain item
         * @param {string} name
         * @return {boolean}
         */
    static InvCheck(name) {
        return Player.getInventory().getItems().find(a => a?.getName()?.includes(name))
    }
}