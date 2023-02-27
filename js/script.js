let form__box = document.querySelector('.form-box');
let btn = document.querySelector('.btn');
let fa__x = document.querySelector('.fa-x');
let button__card__btn = document.querySelector('.button-card__btn')
btn.addEventListener('click', () => {
    form__box.classList.add('active')
})
button__card__btn.addEventListener('click', () => {
    form__box.classList.add('active')
})
fa__x.addEventListener('click', () => {
    form__box.classList.remove('active')
})