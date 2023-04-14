const cancelBtn = document.querySelector('.cancel');
const cancelBtn2 = document.querySelector('.cancel2');
const cancelBtn3 = document.querySelector('.cancel3');
const cancelBtn4 = document.querySelector('.cancel4');

const registerBtn = document.querySelector('.register-btn');
const registerForm = document.querySelector('.register-form');

const enrollBtn = document.querySelector('.enroll-btn');
const enrollForm = document.querySelector('.enroll-form');

const attBtn = document.querySelector('.att-btn');
const attForm = document.querySelector('.att-form');

const resultBtn = document.querySelector('.result-btn');
const resultForm = document.querySelector('.result-form');

registerBtn.addEventListener('click',()=>{
    registerForm.style.display="";
});

enrollBtn.addEventListener('click',()=>{
    enrollForm.style.display="";
});

attBtn.addEventListener('click',()=>{
    attForm.style.display="";
});

resultBtn.addEventListener('click',()=>{
    resultForm.style.display="";
});

cancelBtn.addEventListener('click',()=>{
    registerForm.style.display="none";
});
cancelBtn2.addEventListener('click',()=>{
    enrollForm.style.display="none";
});
cancelBtn3.addEventListener('click',()=>{
    attForm.style.display="none";
});
cancelBtn4.addEventListener('click',()=>{
    resultForm.style.display="none";
});