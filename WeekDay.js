//Print weekDay

const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('WhichDay ', (answer) => {
    // TODO: Log the answer in a database
switch (Number(answer)){
    case 1:
        console.log("Monday");
        break;
    case 1:
        console.log("Thuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    }
    r1.close();
  });
