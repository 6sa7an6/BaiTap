let arr = [];
let fixArr = [];
let a = 0;
while (a < 10) {
    let number = +prompt(`Hãy nhập số nguyên thứ ${a + 1}`)
    if (!isNaN(number) && Number.isInteger(number)) {
        arr.push(number);
        a++;
    } else { alert('Hãy nhập số hợp lệ') }
}
for (let i = 0; i < 10; i++) {
    if (arr[i] >= 10) {
        fixArr.push(arr[i])
    }
}
console.log(`Số nguyên lớn hơn 10 trong chuỗi là ${fixArr.length}`);
