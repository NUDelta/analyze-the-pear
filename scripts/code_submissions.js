const fs = require('fs');
const path = require('path');

// Receive code string, output beautified code string
// String -> String
function beautifySubmissions(code) {
}

// given the correct file, grab each log and output beautified each code submission
// String -> String
function getCodeSubmission() {
  const filepath = 'logs/sanfeng-christian/sanfeng-christian-1.log';
  const contents = fs.readFileSync(filepath, { encoding: 'utf-8' });
  const lines = contents.trim().split('\n');

  for (let line of lines) {
    const object = JSON.parse(line);
    let code_string = '';

    if (object.data.sender === 'SERVER') {
      continue;
    }

    switch (object.data.type) {
      case 'WS_COMMAND':
        if(object.data.command.type === 'COMMAND_RUN_CODE') {
          //code_string = trimHeader(object.data.command.fn);
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

    console.log(code_string);
  }
}

getCodeSubmission();
