const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
console.log("Hello");

function showError(input,message){      // a function that will be called whenever an error is to be printed 
    const parent=input.parentElement;   // in small
    parent.classList.add('error');
    parent.classList.remove('success');
    const small=parent.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){    // a function that will be called whenever an input is successful
    const parent=input.parentElement;
    parent.classList.remove('error');
    parent.classList.add('success');
}

function emailCheck(input){     // using regex to check email
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(input.value).toLowerCase());
}

function passwordCheck(input){      // checking password length
    return (input.value.length>=6 && input.value.length<=12);
}

function confirmPassword(input){    // checking if confirm password is same
    return (input.value===password.value);
}

form.addEventListener('submit',function(e){     // adding eventListener to form submit
    e.preventDefault();    // prevents the form from submitting
    if(username.value===''){
        showError(username,'Username is required');
    } else {
        showSuccess(username);
    }
    
    if(email.value===''){
        showError(email,'Email is required');
    } else if(emailCheck(email)===false){
        showError(email,'Invalid Email');
    } else {
        showSuccess(email);
    }
    
    if(password.value===''){
        showError(password,'Password is required');
    } else if(passwordCheck(password)===false){
        showError(password,'Password length should be between 6 and 12');
    } else {
        showSuccess(password);
    }
    
    if(password2.value===''){
        showError(password2,'Password is required');
    } else if(confirmPassword(password2)===false){
        showError(password2,'Password doesn\'t match');
    } else {
        showSuccess(password2);
    }
});