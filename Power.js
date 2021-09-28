//print powers
let power ;
process.argv.forEach(function (val, index, array) {
    for (let i =0 ; i<=val ; i++){
        power = Math.pow(2,i),
        console.log(power);
    }

  });


