/*
"variables de remplazo para cada una"
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */



function asignarTexto(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

//funcion para parametros iniciales
function condicionesIniciales(){
    asignarTexto('h1', "Texto a Encriptar");
    asignarTexto('p',"NO admite caracteres especiales.");
    
}



//funcion para limpiar el imput
function limpiarCaja(){
    document.getElementById('texto').value = '';
}







function criptar(){
    
    var texto = document.getElementById("texto").value.toLowerCase();
    var textocifrado = texto.replace(/e/igm,"enter");
    var textocifrado = textocifrado.replace(/o/igm,"ober");
    var textocifrado = textocifrado.replace(/i/igm,"imes");
    var textocifrado = textocifrado.replace(/a/igm,"ai");
    var textocifrado = textocifrado.replace(/u/igm,"ufat");
    
    
    asignarTexto('h1', "Texto Encriptado");
    asignarTexto('p', textocifrado );
    limpiarCaja();
    alert("texto Encriptado")
    
    }
    
function descriptar(){
    
        var texto =document.getElementById("texto").value.toLowerCase();
        
        
        var textocifrado = texto.replace(/enter/igm,"e");
        var textocifrado = textocifrado.replace(/ober/igm,"o");
        var textocifrado = textocifrado.replace(/imes/igm,"i");
        var textocifrado = textocifrado.replace(/ai/igm,"a");
        var textocifrado = textocifrado.replace(/ufat/igm,"u");
        
        asignarTexto('h1', "Texto Descriptado");
        asignarTexto('p', textocifrado );
        limpiarCaja();
        alert("texto Desencriptado")
        
        
        
        }
    
const copy = async()=>{
            let copia = document.getElementById('contexto').innerHTML;
            navigator.clipboard.writeText(copia);
            alert("texto copiado");
        } 

condicionesIniciales();

