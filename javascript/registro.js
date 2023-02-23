const form = document.getElementById('form')
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repassword = document.getElementById("repassword")
const parrafo = document.getElementById("warnings")

// form.addEventListener("submit", e=> {
//     e.preventDefault()

//     validarInputs();
// });
// const tirarError = (el, message) => {
//     const inputControl = el.parentElement;
//     const displayError = inputControl.querySelector('.warnings');

//     displayError.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const tirarValidacion = el => {
//     const inputControl = el.parentElement;
//     const displayError = inputControl.querySelector('.warnings');

//     displayError.innerText = "";
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }
// const emailValido = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//     const validarInputs = () => {
//         const validarName = nombre.value.trim();
//         const validarMail = email.value.trim();
//         const validarPassword = password.value.trim();
//         const validarConfirmPassword = repassword.value.trim();

//     if(validarName === ''){
//         tirarError(nombre, 'Usuario Requerido');
//     } else{
//         tirarValidacion(nombre);
//     }
//     if(validarMail === " "){
//         tirarError(email, 'Email Requerido');
//     } else if (!emailValido(email)) {
//         tirarError(email, "dar un email valido");
//     } else {
//         tirarValidacion(email);
//     }
//     if (validarPassword === " "){
//         tirarError(password, "Contraseña requerida")
//     } else if (validarPassword.length < 8){
//         tirarError (password, "Contraseña demasiado corta")
//     } else {
//         tirarValidacion(password);
//     }

//     if (validarConfirmPassword === ''){
//         tirarError(repassword, 'Porfavor confirma tu Contraseña')
//     } else if (validarConfirmPassword !== validarPassword){
//         tirarError(repassword, "Las Contraseñas no coinciden")
//     } else {
//         tirarValidacion(repassword)
//     }
//     };

















form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `EL email no es valido<br>`
        entrar = true;
    }


    if (password.value.length <8){
        warnings += `La contraseña no es valida <br>`
        entrar = true;
    }


    if (repassword !== password.value.le){
        warnings += `La contraseña no coincide <br>`
    } else {
        entrar = true;
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
