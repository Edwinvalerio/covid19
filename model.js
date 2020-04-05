const brain = require("brain.js");

const net = new brain.NeuralNetwork();

const settings = {
  errorThresh: 0.005, // error threshold to reach before completion
  iterations: 20000, // maximum training iterations
  log: true, // console.log() progress periodically
  logPeriod: 10, // number of iterations between logging
  learningRate: 0.3, // learning rate
};

const data = [
  // TODO:COLD
  {
    input: {
      Fever: 0.1, //Mild if present
      FatigueTiredness: 0.3, //Occasional, mild
      Sneezing: 0.8, //Common
      BodyAches: 0.8, //Common
      Headache: 0.3, // Very infrequent
      SoreThroat: 0.5, //Common
      StuffyOrRunnyNose: 0.5, //Common
      Diarrhea: 0, //No
      WateryEyes: 0.5, //Common
      Cough: 0.5, //Mild
      ShortnessOfBreath: 0, //No
      DifficultyBreathing: 0, //No
    },
    output: { cold: 1 },
  },

  // TODO:FLU
  {
    input: {
      Fever: 1, //Often
      FatigueTiredness: 0.5, //Common
      Sneezing: 0.3, //Infrequent
      BodyAches: 0.8, //Common
      Headache: 0.8, //Common
      SoreThroat: 0.3, //Occasional
      StuffyOrRunnyNose: 0.3, //Occasional
      Diarrhea: 3, //Occasional
      WateryEyes: 0.8, //Common
      Cough: 0.5, //Dry cough
      ShortnessOfBreath: 0.1, //Rare
      DifficultyBreathing: 0.05, //In severe infections
    },
    output: { flu: 1 },
  },

  // FIXME: COVID-19
  {
    input: {
      Fever: 1, //Often
      FatigueTiredness: 0.3, //Occasional
      Sneezing: 0.3, //Infrequent
      BodyAches: 0.8, //Occasional
      Headache: 0.8, //Occasional
      SoreThroat: 0.8, //Occasional
      StuffyOrRunnyNose: 0.3, //Infrequent
      Diarrhea: 3, //Infrequent
      WateryEyes: 0.8, //Infrequent
      Cough: 0.5, //A dry cough, often severe
      ShortnessOfBreath: 0.05, //With mild/moderate infection
      DifficultyBreathing: 0.05, //	Common in severe infections*
    },
    output: { covid: 1 },
  },
];

/*======================================

========================================*/
const datas = [
  // TODO:COLD
  {
    input: {
      Fever: 0, //Mild if present
      FatigueTiredness: 0, //Occasional, mild
      Sneezing: 1, //Common
      BodyAches: 1, //Common
      Headache: 0, // Very infrequent
      SoreThroat: 1, //Common
      StuffyOrRunnyNose: 1, //Common
      Diarrhea: 0, //No
      WateryEyes: 1, //Common
      Cough: 1, //Mild
      ShortnessOfBreath: 0, //No
      DifficultyBreathing: 0, //No
    },
    output: { cold: 1 },
  },

  // TODO:FLU
  {
    input: {
      Fever: 1, //Often
      FatigueTiredness: 1, //Common
      Sneezing: 0.3, //Infrequent
      BodyAches: 0.8, //Common
      Headache: 0.8, //Common
      SoreThroat: 0.3, //Occasional
      StuffyOrRunnyNose: 0.3, //Occasional
      Diarrhea: 3, //Occasional
      WateryEyes: 0.8, //Common
      Cough: 0.5, //Dry cough
      ShortnessOfBreath: 0.1, //Rare
      DifficultyBreathing: 0.05, //In severe infections
    },
    output: { flu: 1 },
  },

  // FIXME: COVID-19
  {
    input: {
      Fever: 1, //Often
      FatigueTiredness: 0.3, //Occasional
      Sneezing: 0.3, //Infrequent
      BodyAches: 0.8, //Occasional
      Headache: 0.8, //Occasional
      SoreThroat: 0.8, //Occasional
      StuffyOrRunnyNose: 0.3, //Infrequent
      Diarrhea: 3, //Infrequent
      WateryEyes: 0.8, //Infrequent
      Cough: 0.5, //A dry cough, often severe
      ShortnessOfBreath: 0.05, //With mild/moderate infection
      DifficultyBreathing: 0.05, //	Common in severe infections*
    },
    output: { covid: 1 },
  },
];

net.train(data, settings);

function diagnosisSym(patient) {
  const {
    Fever,
    FatigueTiredness,
    Sneezing,
    BodyAches,
    Headache,
    SoreThroat,
    StuffyOrRunnyNose,
    Diarrhea,
    WateryEyes,
    Cough,
    ShortnessOfBreath,
    DifficultyBreathing,
  } = patient;

  const output = net.run({
    Fever,
    FatigueTiredness,
    Sneezing,
    BodyAches,
    Headache,
    SoreThroat,
    StuffyOrRunnyNose,
    Diarrhea,
    WateryEyes,
    Cough,
    ShortnessOfBreath,
    DifficultyBreathing,
  });

  return output;
}

module.exports = diagnosisSym;
