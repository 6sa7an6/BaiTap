//Tìm số lớn nhất và duy nhất trong chuỗi 5 số nguyên.

let input = [1, 2, 3, 5, 5]
let arr = input.sort((a, b) => {
    return b - a;
})
let kiemTra = (arr) => {
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]) {
                return arr[i + 1];
            }
        }
    }
}
console.log(`Số lớn nhất cũng là số duy nhất là : ${kiemTra(arr)}`);