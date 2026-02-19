// Botones bienvenida (si existen)
const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");

if(btnLogin){
btnLogin.addEventListener("click", function(){
window.location.href = "login.html";
});
}

if(btnRegistro){
btnRegistro.addEventListener("click", function(){
window.location.href = "registro.html";
});
}


// REGISTRAR
function registrar(){

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(nombre === "" || email === "" || password === ""){
alert("Completá todos los campos");
return;
}

const usuario = {
nombre: nombre,
email: email,
password: password
};

localStorage.setItem("usuario", JSON.stringify(usuario));

alert("Cuenta creada correctamente");

window.location.href = "login.html";
}


function iniciarSesion(){

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if(!usuarioGuardado){
alert("No hay usuario registrado");
return;
}

if(email === usuarioGuardado.email && password === usuarioGuardado.password){
alert("Inicio de sesion correcto");
window.location.href = "panel.html";   // ← ACÁ ESTÁ LA CLAVE
}else{
alert("Email o contraseña incorrectos");
}

}


function cerrarSesion(){
    window.location.href = "index.html";
}
const password = document.getElementById("password").value;















