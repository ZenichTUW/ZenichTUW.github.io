function encriptado() {
    let texto = document.getElementById("entrada").value;
    if(document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        document.getElementById("textoEncriptado").innerHTML = texto;
    } else {
        alert("Usted ha digitado letras mayúsculas i/o con carácteres especiales");
    }

}

function textoImagen(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("negrita").style.display = "none";
    document.getElementById("normal").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    }


    function copiar() {
            var parrafo = document.getElementById('textoEncriptado');
            var rango = document.createRange();
            rango.selectNode(parrafo);
          
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(rango);
            try {
              document.execCommand('copy');
            } catch (err) {
              console.error('No se pudo copiar el texto: ', err);
            }
            window.getSelection().removeAllRanges();
          }

  
function desencriptado() {
    let texto = document.getElementById("entrada").value;
    if (texto.match(/^[a-z ]*$/)) {
        texto = texto
            .replace(/ober/gi, "o")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/enter/gi, "e")
            .replace(/ufat/gi, "u");

        document.getElementById("textoEncriptado").innerHTML = texto;
    } else {
        alert("Usted ha digitado letras mayúsculas y/o caracteres especiales");
    }
};