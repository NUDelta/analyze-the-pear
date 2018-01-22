const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const highlight = require('cli-highlight').highlight;

const LOGS_DIR = 'logs';
const directories = fs.readdirSync(LOGS_DIR);

for (let directory of directories) {
    const files = fs.readdirSync(LOGS_DIR + '/' + directory);

    let totalDuration = 0;
    let totalNumTimesRunCode = 0;

    for (let file of files) {
        console.log(file);
        console.log(`Opening ${ chalk.green(file) }...`);
        const filepath = path.join(LOGS_DIR + '/' + directory, file);
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
        totalDuration += if endTimeMS(endTimeMS - startTimeMS)/1000;
        totalNumTimesRunCode += numTimesRunCode;

        console.log(`Game lasted ${ chalk.green((endTimeMS - startTimeMS)/1000 + ' seconds') }.`);
        console.log(`Pair ran code ${ chalk.green(numTimesRunCode + ' times') }.`);
        console.log(`Final code submitted: \n${ highlight(finalCode, { language: 'javascript' }) }\n`);
    }

    console.log(`Games lasted ${ chalk.red(totalDuration + ' seconds') }.`);
    console.log(`Pair ran code ${ chalk.red(totalNumTimesRunCode + ' times') }.\n\n`);
}