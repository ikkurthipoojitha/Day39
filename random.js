var randarray = [];
for(let i = 1; i<=10;i++){
    let rand = Math.floor(Math.random()*999+10);
    randarray.push(rand);
}
console.log(randarray);

function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
findSecondLargestElem(randarray);

function findSecondSmallestElem(arr){
    let first = 999 , second = 999;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] < second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondSmallestElem(randarray);
//console.log(randarray.sort());