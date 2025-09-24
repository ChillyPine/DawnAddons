import settings from '../../config'



register("chat", () => {
    if (!settings().dianainqmesage) return
    ChatLib.command(`pc ${settings().dianainqmesage}`)
}).setCriteria("${*} You dug out a Minos Inquisitor!")


let x = Math.round(Player.getX());
let y = Math.round(Player.getY());
let z = Math.round(Player.getZ());

register("chat", () => {
    if (!settings().sendinqcoords) return
    
    setTimeout(() => {
        ChatLib.command(`pc Inquisitor x: ${x}, y: ${y}, z: ${z}`);
    }, 100);

}).setCriteria("Party > ${player}: !coords")