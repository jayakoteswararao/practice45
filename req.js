var censor=require("./repcen");
console.log(censor.getcw());
console.log(censor.censor("some very sad bad and mad text."));
censor.addcw("gloomy");
console.log(censor.getcw());
console.log(censor.censor("A very gloomy day."));