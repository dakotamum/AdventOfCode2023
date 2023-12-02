const fs = require('fs');
const filePath = 'input.txt';
const encoding = 'utf8';
const fileContents = fs.readFileSync(filePath, { encoding: encoding });
const lines = fileContents.split('\n');

let powersSum = 0;

for (const line of lines) {
    if (line !== "")
    {
        let trimmedLine = line.substring(line.indexOf(":") + 2, line.length - 1);
        let subsets = trimmedLine.split(";");

        let neededRed = 0;
        let neededGreen = 0;
        let neededBlue = 0;

        for (const subset of subsets)
        {
            let revealedCubes = subset.split(", ");
            for (const revelation of revealedCubes)
            {
                let rev = revelation.trim().split(' ');
                let quantity = parseInt(rev[0]);
                let color = rev[1] 
                if (color == "red")
                {
                    if (quantity > neededRed)
                        neededRed = quantity
                }
                if (color == "green")
                {
                    if (quantity > neededGreen)
                        neededGreen = quantity
                }
                if (color == "blue")
                {
                    if (quantity > neededBlue)
                        neededBlue = quantity
                }
            }
        }
        let power = neededRed * neededGreen * neededBlue;
        powersSum += power;
    }
}
console.log(powersSum);
