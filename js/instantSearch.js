const wrapper1=document.querySelector(".wrapper1");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const btnPopup=document.querySelector(".btnLogin-popup");
const iconClose=document.querySelector(".icon-close");
registerLink.addEventListener('click',()=>{
    wrapper1.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper1.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper1.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper1.classList.remove('active-popup');
});

const container=document.querySelector(".container");
const btnp=document.querySelector(".c");
const iconc=document.querySelector(".iconc");





btnp.addEventListener('click',()=>{
    container.classList.add('active-popup');
});
iconc.addEventListener('click',()=>{
    container.classList.remove('active-popup');
});