const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    lerp: 0.06
});


const plusIcons = document.querySelectorAll('.fa-plus');
// console.log(plusIcons)
const removeAns = document.querySelectorAll('.remove')

let remove1 = document.querySelector('#C-one')
let remove2 = document.querySelector('#C-two')
let remove3 = document.querySelector('#C-three')
let remove4 = document.querySelector('#C-four')
let remove5 = document.querySelector('#C-five')
let remove6 = document.querySelector('#C-six')

const plusIcon1 = document.querySelector('#one')
const plusIcon2 = document.querySelector('#two')
const plusIcon3 = document.querySelector('#three')
const plusIcon4 = document.querySelector('#four')
const plusIcon5 = document.querySelector('#five')
const plusIcon6 = document.querySelector('#six')

const ans1 = document.querySelector('.answer-1');
const ans2 = document.querySelector('.answer-2');
const ans3 = document.querySelector('.answer-3');
const ans4 = document.querySelector('.answer-4');
const ans5 = document.querySelector('.answer-5');
const ans6 = document.querySelector('.answer-6');

plusIcons.forEach((icon) => {

    icon.addEventListener('click', (e) => {

        if (e.target.id === 'one') {
            ans1.style.display = 'flex';
            e.target.style.display = 'none';
            remove1.style.display = 'flex';
        }
        if (e.target.id === 'two') {
            ans2.style.display = 'flex';
            e.target.style.display = 'none';
            remove2.style.display = 'flex';
        }
        if (e.target.id === 'three') {
            ans3.style.display = 'flex';
            e.target.style.display = 'none';
            remove3.style.display = 'flex';
        }
        if (e.target.id === 'four') {
            ans4.style.display = 'flex';
            e.target.style.display = 'none';
            remove4.style.display = 'flex';
        }
        if (e.target.id === 'five') {
            ans5.style.display = 'flex';
            e.target.style.display = 'none';
            remove5.style.display = 'flex';
        }
        if (e.target.id === 'six') {
            ans6.style.display = 'flex';
            e.target.style.display = 'none';
            remove6.style.display = 'flex';
        }
    });
});

removeAns.forEach((remove) => {
    remove.addEventListener('click', (e) => {
        if (e.target.id === 'C-one') {
            ans1.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon1.style.display = 'flex';
        }
        if (e.target.id === 'C-two') {
            ans2.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon2.style.display = 'flex';
        }
        if (e.target.id === 'C-three') {
            ans3.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon3.style.display = 'flex';
        }
        if (e.target.id === 'C-four') {
            ans4.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon4.style.display = 'flex';
        }
        if (e.target.id === 'C-five') {
            ans5.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon5.style.display = 'flex';
        }
        if (e.target.id === 'C-six') {
            ans6.style.display = 'none';
            e.target.style.display = 'none';
            plusIcon6.style.display = 'flex';
        }
    })
})