let arr = [];
let count = 0;
while (count < 5) {
    let number = +prompt(`Hãy nhập số nguyên thứ ${count + 1}`)
    if (number != '') {
        if (!isNaN(number) && Number.isInteger(number)) {
            arr.push(number);
            count++;
        } else { alert('Hãy nhập số nguyên') };
    } else { alert('Hãy nhập số') }
}
console.log(arr);