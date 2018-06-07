const fs = require("fs");
const path = require("path");

const LOGS_DIR = "logs";

const BOOTCAMP_CONTROL_S1_DIR = "bootcamp-5-26-control-sequence1";
const BOOTCAMP_CONTROL_S2_DIR = "bootcamp-5-26-control-sequence2";
const BOOTCAMP_TREATMENT_S1_DIR = "bootcamp-5-26-treatment-sequence1";
const BOOTCAMP_TREATMENT_S2_DIR = "bootcamp-5-26-treatment-sequence2";

const results = {
  control: {
    s1: [],
    s2: []
  },
  treatment: {
    s1: [],
    s2: []
  }
};

const directories = [
  BOOTCAMP_CONTROL_S1_DIR,
  BOOTCAMP_CONTROL_S2_DIR,
  BOOTCAMP_TREATMENT_S1_DIR,
  BOOTCAMP_TREATMENT_S2_DIR
];

directories.forEach(directory => {
  const files = fs.readdirSync(`${LOGS_DIR}/${directory}`);

  files.forEach(file => {
    const contents = fs.readFileSync(`${LOGS_DIR}/${directory}/${file}`, {
      encoding: "utf-8"
    });

    const logs = contents
      .trim()
      .split("\n")
      .map(line => {
        try {
          return JSON.parse(line);
        } catch (e) {
          return null;
        }
      })
      .filter(log => !!log);

    const game = {
      filename: file,
      condition: directory,
      prompt: null,
      startTimestampMS: null,
      endTimestampMS: null,
      lastLogTimestampMS: null,
      players: new Set(),
      totalRunCodes: 0,
      totalTestsFailed: 0
    };
    for (let i = 0; i < logs.length; i++) {
      const log = logs[i];

      if (log.sender === "CLIENT") {
        if (log.data.command) {
          const { command } = log.data;
          switch (command.type) {
            case "COMMAND_RUN_CODE":
              game.totalRunCodes++;
              break;
            case "COMMAND_LOG_CODE":
              game.prompt = command.constructor;
              break;
          }
        }
      } else {
        log.data = JSON.parse(log.data);
        const { action } = log.data;

        switch (action.type) {
          case "PLAYERS_REGISTER_PLAYER":
            game.players.add(action.player.name);
            break;
          case "GAME_START":
            game.startTimestampMS = log.timestamp;
            break;
          case "GAME_END":
            game.endTimestampMS = log.timestamp;
            break;
        }
      }

      game.lastLogTimestampMS = log.timestamp;
    }

    game.players = [...game.players.values()];

    switch (directory) {
      case BOOTCAMP_CONTROL_S1_DIR:
        results.control.s1.push(game);
        break;
      case BOOTCAMP_CONTROL_S2_DIR:
        results.control.s2.push(game);
        break;
      case BOOTCAMP_TREATMENT_S1_DIR:
        results.treatment.s1.push(game);
        break;
      case BOOTCAMP_TREATMENT_S2_DIR:
        results.treatment.s2.push(game);
        break;
    }
  });

});

// for (let condition in results) {
//   for (let sequence in results[condition]) {
//     results[condition][sequence] = results[condition][sequence].filter(
//       game => !!game.endTimestampMS
//     );
//   }
// }

console.log("Total number of run codes per condition:");
console.log("\tControl:");
console.log(
  `\t\tS1: ${results.control.s1.reduce(
    (acc, curr) => acc + curr.totalRunCodes,
    0
  )}`
);
console.log(
  `\t\t\tLinear In: ${results.control.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "LinearInPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tAdding Machine: ${results.control.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "AddingMachinePrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tFix 45: ${results.control.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "Fix45Prompt" ? curr.totalRunCodes : 0),
    0
  )}`
);

console.log(
  `\t\tS2: ${results.control.s2.reduce(
    (acc, curr) => acc + curr.totalRunCodes,
    0
  )}`
);
console.log(
  `\t\t\tCan Balance: ${results.control.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "CanBalancePrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tArray Sequence Match: ${results.control.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ArraySequenceMatchPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tArray Two Sum: ${results.control.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ArrayTwoSumPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tValid Parentheses: ${results.control.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ValidParenthesesPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);

console.log("\tTreatment:");
console.log(
  `\t\tS1: ${results.treatment.s1.reduce(
    (acc, curr) => acc + curr.totalRunCodes,
    0
  )}`
);
console.log(
  `\t\t\tLinear In: ${results.treatment.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "LinearInPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tAdding Machine: ${results.treatment.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "AddingMachinePrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tFix 45: ${results.treatment.s1.reduce(
    (acc, curr) => acc + (curr.prompt === "Fix45Prompt" ? curr.totalRunCodes : 0),
    0
  )}`
);

console.log(
  `\t\tS2: ${results.treatment.s2.reduce(
    (acc, curr) => acc + curr.totalRunCodes,
    0
  )}`
);
console.log(
  `\t\t\tCan Balance: ${results.treatment.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "CanBalancePrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tArray Sequence Match: ${results.treatment.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ArraySequenceMatchPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tArray Two Sum: ${results.treatment.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ArrayTwoSumPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
console.log(
  `\t\t\tValid Parentheses: ${results.treatment.s2.reduce(
    (acc, curr) => acc + (curr.prompt === "ValidParenthesesPrompt" ? curr.totalRunCodes : 0),
    0
  )}`
);
