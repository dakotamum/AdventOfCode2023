const fs = require('fs');
const filePath = 'input.txt';
const encoding = 'utf8';
const fileContents = fs.readFileSync(filePath, { encoding: encoding });
const lines = fileContents.split('\n');

const Nums = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
}

var sum = 0;
for (const line of lines) {
    if (line.trim().length !== 0) {
        let letterArr = "";
        let numberArr = []
        for (let i = 0; i < line.length; i++) {
            let character = line[i];

            // check for worded numbers to add and trim off current string
            let front = -1;
            let foundIndex = 9999999;
            for (let j = 1; j <= 9; j++) {
                if (letterArr.includes(Nums[j])) {
                    if (letterArr.indexOf(Nums[j]) < foundIndex) {
                        front = j;
                        foundIndex = letterArr.indexOf(Nums[j]);
                    }
                }
            }
            if (front !== -1) {
                numberArr.push(front);
                letterArr = letterArr.substring(foundIndex + Nums[front].length, letterArr.length - 1);
            }

            if (character >= '0' && character <= '9')
                // just add numeric
                numberArr.push(parseInt(line[i]));
            else {
                // add next character to the string
                letterArr += character;
            }
        }
        sum += (10 * numberArr[0] + numberArr[numberArr.length - 1]);
    }
}
console.log(sum);
