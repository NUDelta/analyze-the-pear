const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const LOGS_DIR = 'logs';

// given the correct file, grab each log and output beautified each code submission
// String -> String
function printCodeOfFile(filepath) {
  //const filepath = LOGS_DIR + '/sanfeng-christian/sanfeng-christian-1.log';
  const contents = fs.readFileSync(filepath, { encoding: 'utf-8' });
  const lines = contents.trim().split('\n');
  let snippetNumber = 0
  let lastRunTS = 0;
  let runToSubmitTime = 0;

  for (let line of lines) {
    const object = JSON.parse(line);
    let code_string = '';

    if (object.data.sender === 'SERVER') {
      continue;
    }

    switch (object.data.type) {
      case 'WS_COMMAND':
        if(object.data.command.type === 'COMMAND_RUN_CODE') {
          code_string = object.data.command.fn;
        }
        break;
      case 'WS_ACTION':
        if(object.data.action.type === 'GAME_END') {
          code_string = object.data.action.code;
        }
        break;
      default:
        break;
    }

    if(code_string.length > 0) {
      lastRunTS = (lastRunTS === 0) ? object.timestamp : lastRunTS;
      let duration = (object.timestamp - lastRunTS)/1000;
      runToSubmitTime += duration;
      snippetNumber++;

      console.log(chalk.yellow(`Start of code snippet ${ snippetNumber }`));
      console.log(chalk.blue(`${ duration } second since last run`));
      console.log(code_string)

      lastRunTS = object.timestamp;
    }
  }
  console.log(chalk.magenta(`${ runToSubmitTime } seconds between first run and final submission`));
}

function printCodeOfFiles(fileDirectory) {
  const directoryPath = LOGS_DIR + '/' + fileDirectory;
  const files = fs.readdirSync(directoryPath);
  for (let file of files) {
    console.log(`\nStart of ${ chalk.green(file) }\n`);
    const filepath = path.join(directoryPath + file);
    printCodeOfFile(path.join(filepath));
    console.log(`\n\nEnd of ${ chalk.red(file) }\n`);
  }
}

printCodeOfFiles(process.argv[2]);
