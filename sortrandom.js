var randarray = [];
for(let i = 1; i<=10;i++){
    let rand = Math.floor(Math.random()*900+100);
    randarray.push(rand);
}
//console.log(randarray);
var sortArray = randarray.sort();
console.log("sorted array",sortArray);
console.log("second smallest value ",sortArray.slice(1,2));
var arrayLength = sortArray.length;
//console.log(arrayLength);
console.log("second largest value",sortArray.slice(arrayLength-2,arrayLength-1));

