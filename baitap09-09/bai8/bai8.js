let arr = [5, 7, 8, 3, 5, 4, 12, 4];
let max = arr[0];
let tong = 0;
for (let i = 0; i < arr.length; i++) {
    tong += arr[i];
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(`Số lớn nhất là ${max}`);
console.log(`Giá trị trung bình của các phần tử trong mảng là ${tong / arr.length}`);