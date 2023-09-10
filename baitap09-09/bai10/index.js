let string = prompt('Hãy nhập chuỗi cần kiểm tra cách nhau bởi dấu cách');
let arr = string.split(' ');
let count = 0;
for(let i = 0 ; i < arr.length ; i++){
    if(!isNaN(arr[i]) && arr[i]<0){
        count++;
    }
}
console.log(`Số nguyên âm trong chỗi là ${count}`);