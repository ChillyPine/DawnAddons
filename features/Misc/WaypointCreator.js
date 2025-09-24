import settings from '../../config'

const coordRegex = /x:\s*(-?\d+),\s*y:\s*(-?\d+),\s*z:\s*(-?\d+)/;

// Listen for chat messages
register("chat", (message) => {
  const match = coordRegex.exec(message);
  if (match) {
    const [, x, y, z] = match;
    ChatLib.say(`coords seen at ${x} ${y} ${z}`);
  }
}).setChatCriteria("Party > ${player}: x: ${x}, y: ${y}, z: ${z}");

