// document.querySelector('.toggle').addEventListener('click',()=>{
//     document.querySelector('.toggle').toggleAttribute('class','active')
// })

const toggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    showcase.classList.toggle('active');
})