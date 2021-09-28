let origDogs = ["Bulldog", "Beagle","Labrador"];
let cats = new Array("Americal Curl " , "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");
// origDogs.push("wilddog")
// origDogs.pop();
// console.log(origDogs);
// console.log(origDogs[0]);
// console.log(cats[0]);

//array copy element
let slicedDogd = origDogs.slice(1,2);
//console.log(slicedDogd);
//console.log(origDogs);
let copyDogs =  [...origDogs];
let copyDogssssss =  origDogs;
console.log(copyDogssssss);
console.log(copyDogs);
//let dogs = origDogs.slice(1);
let dogs = origDogs.splice(0,1);
console.log(origDogs)
console.log(dogs);

// //array function - concat , slice and sort
// let animals = origDogs.concat(cats,birds);
// console.log(animals)
// let newAnimal = [...dogs, ...cats, ...birds].toString();
// let sortDogs = dogs.slice(0).sort();
// console.log(sortDogs);
// console.log();


// //array try fun
// let empArray = [1,2,3,4,5];
// let totalEmpWage = 0;
// function sum(dailyWage){
//     totalEmpWage+= dailyWage;
// }
// empArray.forEach(sum);
// console.log(totalEmpWage);
// function totalWages(totalWage,dailyWage){
//     return totalWage+dailyWage;
// }
// console.log(empArray.reduce(totalWages,0));
// let dailyCntr = 0;
// function mapDatWithWage(dailyWage){
//     dailyCntr++;
// }