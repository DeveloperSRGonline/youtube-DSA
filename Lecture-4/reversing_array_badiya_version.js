let arr = [10,20,30,40,50,60,70,80,90]

let i = 0; j = arr.length-1;

while (i!=j) {
    let temp = arr[i];
    arr[i]  = arr[j];
    arr[j]  =  temp;
    i++;
    j--;
}

console.log(arr)