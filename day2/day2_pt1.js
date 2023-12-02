const fs = require('fs');
const filePath = 'input.txt';
const encoding = 'utf8';
const fileContents = fs.readFileSync(filePath, { encoding: encoding });
const lines = fileContents.split('\n');

let gameNum = 1;
let possibleGamesSum = 0;
let maxRed = 12;
let maxGreen = 13;
let maxBlue = 14;

for (const line of lines) {
    if (line !== "")
    {
        let possible = true;
        let trimmedLine = line.substring(line.indexOf(":") + 2, line.length - 1);
        let subsets = trimmedLine.split(";");
        for (const subset of subsets)
        {
            let revealedCubes = subset.split(", ");
            for (const revelation of revealedCubes)
            {
                let rev = revelation.trim().split(' ');
                let quantity = parseInt(rev[0]);
                let color = rev[1] 
                if ((color == "red" && quantity > maxRed) ||
                     (color == "green" && quantity > maxGreen) ||
                     (color == "blue" && quantity > maxBlue)) {
                        possible = false;
                        break;
                     }
            }
        }
        if (possible)
            possibleGamesSum += gameNum;
        gameNum++;
    }
}
console.log(possibleGamesSum);

    