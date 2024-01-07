let inps = document.querySelectorAll('input');
let img = document.querySelector('img');

inps.forEach((item) => {
    item.addEventListener('change', () => {
        let i = item.dataset.val;
        if(i == 'male') {
            img.src = 'img/icons8-man-96.png';
        } else {
            img.src = 'img/icons8-woman-96.png';
        }
    })
})