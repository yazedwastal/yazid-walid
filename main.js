let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav');
let close = document.querySelector('.close');
let nameCom = document.querySelector('.nam-comp');
toggle.onclick = function (){
    nav.classList.add('open');
    toggle.style.display = 'none';
    nameCom.style.display = 'none';
};
close.onclick = function (){
    nav.classList.remove('open');
    toggle.style.display = 'block';
    nameCom.style.display = 'block';
};
// document.onkeyup = function (e){
//     if(e.key === " "){
//         nav.classList.remove("open");
//     }
// };
