`using strict`;

const menu = document.querySelector('.menu-icon');
const ovalay = document.querySelector('.ovalay');
const cancle = document.querySelector('.menu-cancle');


menu.addEventListener('click', ()=>{
    ovalay.style.display = 'flex';
    // menu.style.display ='none';
});

cancle.addEventListener('click', ()=>{
    ovalay.style.display = 'none'
    
})

