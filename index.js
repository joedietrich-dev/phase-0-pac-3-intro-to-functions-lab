function shout(message) {
  return message.toUpperCase();
}

function whisper(message) {
  return message.toLowerCase();
}

function logShout(message) {
  console.log(shout(message));
}

function logWhisper(message) {
  console.log(whisper(message));
}

function sayHiToGrandma(message) {
  switch (message) {
    case "I love you, Grandma.":
      return "I love you, too.";
    case shout(message): {
      return "YES INDEED!";
    }
    case whisper(message): {
      return "I can't hear you!";
    }
    default:
      return "Eh?";
  }
}