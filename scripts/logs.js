const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const highlight = require('cli-highlight').highlight;

const LOGS_DIR = 'logs';
const files = fs.readdirSync(LOGS_DIR);

for (let file of files) {
    console.log(`Opening ${ chalk.green(file) }...`);
    const filepath = path.join(LOGS_DIR, file);
    const contents = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const lines = contents.trim().split('\n');

    let startTimeMS, endTimeMS;
    let numTimesRunCode = 0;
    let finalCode = '';

    for (let line of lines) {
        const obj = JSON.parse(line);
        if (obj.data.type === 'WS_ACTION') {
            switch (obj.data.action.type) {
                case 'GAME_START':
                    startTimeMS = obj.timestamp;
                    break;
                case 'GAME_END':
                    if (obj.sender === 'CLIENT') {
                        finalCode = obj.data.action.code;
                    }

                    endTimeMS = obj.timestamp;
                    break;
            }
        }

        if (obj.data.type === 'WS_COMMAND') {
            switch(obj.data.command.type) {
                case 'COMMAND_RUN_CODE':
                    ++numTimesRunCode;
                    break;
            }
        }
    }

    console.log(`Game lasted ${ chalk.green((endTimeMS - startTimeMS)/1000 + ' seconds') }.`);
    console.log(`Pair ran code ${ chalk.green(numTimesRunCode + ' times') }.`);
    console.log(`Final code submitted: \n${ highlight(finalCode, { language: 'javascript' }) }\n`);
}
