let arr1 = ['c', 's', 'c', '2', '6', '1'];
let arr2 = ['c', 's', 'c', '2', '6', '1'];
let result = true;
if (arr1.length != arr2.length) {
    result = false;
}
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        result = false;
        break;
    }
}
result ? console.log('Hai mảng giống nhau') : console.log('Hai mảng khác nhau'); 