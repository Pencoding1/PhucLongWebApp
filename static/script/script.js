let eye = document.getElementById("unreveal");
let pass = document.getElementById("password");

eye.onclick = function(){
    if(password.type == "password") password.type="text";
    else password.type="password";
}