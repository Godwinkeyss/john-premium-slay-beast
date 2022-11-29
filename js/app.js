

let center = document.querySelector('.center')
let bug = document.querySelector('.bug')

bug.addEventListener('click',()=>{
    bug.classList.toggle('active');
    center.classList.toggle('active');
})

