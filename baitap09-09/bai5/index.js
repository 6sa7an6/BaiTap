let a = prompt('Hãy nhập một chuỗi ký tự')
let arr = a.split('');
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == '-'){
        arr.splice(i,1,'_')
    }
}
console.log(arr.join(''));