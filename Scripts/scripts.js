
let side_bar = document.getElementsByClassName("side-bar")

let btn = document.querySelector('.open-side-bar')
btn.addEventListener('click', function(){
side_bar[0].classList.toggle("show-hide")
})



const now = new Date();

const currentDateTime = now.toLocaleString();
document.getElementById('time').innerText = currentDateTime