//vẽ hình trái tim trên documen.write

let arrIndex = [[1, 2, 4, 5], [0, 3, 6], [0, 6], [1, 5], [2, 4], [3]];
let kiemTra = (a, i) => {
    return arrIndex[i].includes(a)
}
for (let i = 0; i < arrIndex.length; i++) {
    let traiTim = '';
    for (let a = 0; a < 8; a++) {
        if (kiemTra(a, i)) {
            traiTim += '*';
        } else {
            traiTim += '&nbsp;'
        }
    }
    document.write(traiTim)
    document.write('<br>')
}
