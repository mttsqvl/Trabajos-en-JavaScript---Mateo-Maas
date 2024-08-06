/* Mateo Maas Esquivel
5to Bachillerato Gamma
Programación II

Proyecto Final - Tercer Bimestre
*/



/* Con estas variables, vinculamos los formularios y backdoors del (HTML) para poder trabajar con ellos en este JavaScript. */
var contenedor = document.querySelector(".Formularios_Login_Registro")
var formulario_login = document.querySelector(".login");
var formulario_registro = document.querySelector(".registro");
var Backdoor_login = document.querySelector(".Backdoor_login");
var Backdoor_registro = document.querySelector(".Backdoor_registro");


function register(){ // Con esta función, se hara el cambio de iniciar sesión a registro. 

    formulario_registro.style.display = "block"; /* Se cambia el display a block. */
    contenedor.style.left = "410px";
    formulario_login.style.display = "none"; /* Se oculta el formulario de inicio de sesión. */

    Backdoor_registro.style.opacity = "0"; /* El texto que te lleva al cambio a registro desaparece, pues esta función lleva al formulario de registro.*/
    Backdoor_login.style.opacity = "1"; /* Se muestra el texto que te pregunta si quieres volver a iniciar sesión, pues ahora estarías en registro. */

}

function iniciarSesión(){ // Con esta función, se hara el cambio de iniciar sesión a registro. 

    formulario_registro.style.display = "none"; /* Se cambia el display a block. */
    contenedor.style.left = "10px";
    formulario_login.style.display = "block"; /* Se oculta el formulario de inicio de sesión. */

    Backdoor_registro.style.opacity = "1"; /* El texto que te lleva al cambio a registro desaparece, pues esta función lleva al formulario de registro.*/
    Backdoor_login.style.opacity = "0"; /* Se muestra el texto que te pregunta si quieres volver a iniciar sesión, pues ahora estarías en registro. */

}

document.getElementById("btn__Registro").addEventListener("click", register); /* Con esta función ejecutaremos el cambio entre cada modalidad. */

document.getElementById("btn__Login").addEventListener("click", iniciarSesión); /* Con esta función ejecutaremos el cambio entre cada modalidad. */
