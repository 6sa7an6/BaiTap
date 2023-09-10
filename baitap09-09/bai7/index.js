let arr = [];
let a = 0;
while (a < 10) {
    let number = prompt(`Hãy nhập số nguyên thứ ${a + 1}`);
    if (!isNaN(number) && Number.isInteger(number)) {
        if (!arr.includes(number)) {
            arr.push(number);
            a++;
        } else {
            alert('Số đã tồn tại , hãy nhập số khác');
        }
    } else {
        alert('Hãy nhập đúng dữ liệu')
    }
}
let max = arr[0];
let maxIndex = 1;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i + 1;
    }
}
console.log(`Số lớn nhất là ${max} ở vị trí ${maxIndex} trong mảng`);