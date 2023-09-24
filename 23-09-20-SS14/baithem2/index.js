render = () => {
    text = '';
    for (let i = 1; i < 11; i++) {
        text += `<li onclick = 'clickPoint(${i})'>${i}</li>`
    }
    document.getElementsByClassName('container__point__list')[0].innerHTML = `${text}`
}
render();
clickPoint = (detail) => {
    for (let i = 1; i < 11; i++) {
        if (i == detail) {
            document.getElementsByClassName('container__feedback__main__point')[0].innerHTML = `<p style = 'background-color : red'>${i}</p>`
        }
    }
}
let clickButton = document.getElementsByClassName('container__review__button')[0];
clickButton.addEventListener('click', () => {
    let review = document.getElementById('text').value
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = `<p>${review}</p>`
})
let clickEdit = document.getElementsByClassName('edit')[0];
clickEdit.addEventListener('click', () => {
    document.getElementById('text').value = '';
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = '';
})
let clickClose = document.getElementsByClassName('close')[0];
clickClose.addEventListener('click', () => {
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = '';
    document.getElementsByClassName('container__feedback__main__point')[0].innerHTML = '';
})