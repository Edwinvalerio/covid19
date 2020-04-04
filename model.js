const brain = require("brain.js");

const net = new brain.NeuralNetwork();

net.train([
  {
    input: {
      fever: 0.03,
      fatigueTirednessg: 0.7,
      bodyAches: 0.5,
      headache: 0,
      soreThroat: 0,
      stuffyOrRunningNose: 0,
      diarrhea: 0,
      wateryEyes: 0,
      cough: 0,
      shortnessOfBreadth: 0,
      difficultyOfBreathung: 0,
    },
    output: { black: 1 },
  },
]);

const output = net.run({ r: 1, g: 0.4, b: 0 }); // { white: 0.99, black: 0.002 }

console.log(output);
