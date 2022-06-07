
let username = document.querySelector('#u-name');
let user_error = document.querySelector('#u-error');

let password = document.querySelector('#pass');
let password_error = document.querySelector('#p-error');

let error = document.getElementsByClassName('error');


function clearError() {
    for (let items of error) {
        items.innerHTML = "";
    }
}

function validateForm() {
    
    var returnval = true;
    clearError();

    if(username.value == "" ){
        user_error.innerHTML = "*Please enter user name";
        returnval = false;
    } else if(username.value.length < 4) {
        user_error.innerHTML = "*Minimum required 4 letter";
        returnval = false;
    }

    if(password.value == ""){
        password_error.innerHTML = "*Please enter password";
        returnval = false;
    } else if(password.value.length < 8) {
        password_error.innerHTML = "*Minimum required 8 letter";
        returnval = false;
    } 
    
    return returnval;
}



//----------------------------------------------------------------------------------------------




// let flag = 1;

// function validateForm() {

    //     if(username.value == "" ){
        //         user_error.innerHTML = "*Please enter user name";
//         flag = 0;
//     } else if(username.value.length < 4) {
//         user_error.innerHTML = "*Minimum required 4 letter";
//         flag = 0;
//     } else{
//         user_error.innerHTML = "";
//         flag = 1;
//     }


//     if(password.value == ""){
//         password_error.innerHTML = "*Please enter password";
//         flag = 0;
//     } else if(password.value.length < 8) {
//         password_error.innerHTML = "*Minimum required 8 letter";
//         flag = 0;
//     } else{
//         password_error.innerHTML = "";
//         flag = 1;
//     }

//     if (flag) {
//         return true;
//     } else {
//         return false;
//     }
// }
