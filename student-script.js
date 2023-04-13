const cancelBtn = document.querySelector('.cancel');
const cancelBtn2 = document.querySelector('.cancel2');

const registerBtn = document.querySelector('.register-btn');
const registerForm = document.querySelector('.register-form');

const enrollBtn = document.querySelector('.enroll-btn');
const enrollForm = document.querySelector('.enroll-form');

registerBtn.addEventListener('click',()=>{
    registerForm.style.display="";
});

enrollBtn.addEventListener('click',()=>{
    enrollForm.style.display="";
});

cancelBtn.addEventListener('click',()=>{
    registerForm.style.display="none";
});
cancelBtn2.addEventListener('click',()=>{
    enrollForm.style.display="none";
});