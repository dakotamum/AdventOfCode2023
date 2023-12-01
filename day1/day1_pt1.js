const fs = require('fs');
const filePath = 'input.txt';
const encoding = 'utf8';
const fileContents = fs.readFileSync(filePath, { encoding: encoding });
const lines = fileContents.split('\n');

var sum = 0;
for (const line of lines) {
    if (line.trim().length !== 0) {
        let numberArr = [];
        for (let i = 0; i < line.length; i++) {
            let character = line[i];
            if (character >= '0' && character <= '9') {
                numberArr.push(parseInt(character));
            }
        }
        sum += (10 * numberArr[0] + numberArr[numberArr.length - 1]);
    }
}
console.log(sum);
