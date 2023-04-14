const cancelBtn = document.querySelector('.cancel');
const cancelBtn2 = document.querySelector('.cancel2');
const cancelBtn3 = document.querySelector('.cancel3');
const cancelBtn4 = document.querySelector('.cancel4');
const cancelBtn5 = document.querySelector('.cancel5');
const cancelBtn6  = document.querySelector('.cancel6');
const cancelBtn7  = document.querySelector('.cancel7');

const registerBtn = document.querySelector('.register-btn');
const registerForm = document.querySelector('.register-form');

const assignSubBtn = document.querySelector('.assign-subject-btn');
const assignSubForm = document.querySelector('.assign-subject-form');

const assignStudBtn = document.querySelector('.assign-student-btn');
const assignStudForm = document.querySelector('.assign-student-form');

const markAttBtn = document.querySelector('.mark-att-btn');
const markAttForm = document.querySelector('.mark-att-form');

const createTestBtn = document.querySelector('.create-test-btn');
const createTestForm = document.querySelector('.create-test-form');

const assignTestBtn = document.querySelector('.assign-test-btn');
const assignTestForm = document.querySelector('.assign-test-form');

const assignResultBtn = document.querySelector('.assign-result-btn');
const assignResultForm = document.querySelector('.assign-result-form');

//view forms
registerBtn.addEventListener('click',()=>{
    registerForm.style.display="";
});
assignSubBtn.addEventListener('click',()=>{
    assignSubForm.style.display="";
});
assignStudBtn.addEventListener('click',()=>{
    assignStudForm.style.display="";
});
markAttBtn.addEventListener('click',()=>{
    markAttForm.style.display="";
});
createTestBtn.addEventListener('click',()=>{
    createTestForm.style.display="";
});
assignTestBtn.addEventListener('click',()=>{
    assignTestForm.style.display="";
});
assignResultBtn.addEventListener('click',()=>{
    assignResultForm.style.display="";
});

//hide forms
cancelBtn.addEventListener('click',()=>{
    registerForm.style.display="none";
});
cancelBtn2.addEventListener('click',()=>{
    markAttForm.style.display="none";
});
cancelBtn3.addEventListener('click',()=>{
    createTestForm.style.display="none";
});
cancelBtn4.addEventListener('click',()=>{
    assignTestForm.style.display="none";
});
cancelBtn5.addEventListener('click',()=>{
    assignResultForm.style.display="none";
});
cancelBtn6.addEventListener('click',()=>{
    assignSubForm.style.display="none";
});
cancelBtn7.addEventListener('click',()=>{
    assignStudForm.style.display="none";
});