let arr = [1,1,1,5,5,5,4,1,1]
let fixArr = [];
for(let i = 0 ; i < arr.length ; i ++){
    if(!fixArr.includes(arr[i])){
        fixArr.push(arr[i]);
    }
}
let temp;
for(let j = 0 ; j < fixArr.length - 1 ; j ++){
    for(let k = 0 ; k < fixArr.length -1 - j ; k++){
        if(fixArr[k]>fixArr[k+1]){
            temp = fixArr[k];
            fixArr[k] = fixArr[k+1];
            fixArr[k+1] = temp;
        }
    }
}
console.log(fixArr);