let pass = document.getElementById("password");
let conf = document.getElementById("confirm");
let err = document.getElementById("passError");

function checkError(){
    if(pass.value != conf.value){
        pass.style.borderColor = "red";
        conf.style.borderColor = "red";
        err.textContent = "* Passwords do not match";
    }
    else{
        pass.style.borderColor = "rgb(192, 190, 190)";
        conf.style.borderColor = "rgb(192, 190, 190)";
        err.textContent = "";
    }
}
pass.addEventListener("blur",checkError);
conf.addEventListener("blur",checkError);