const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


//FUNCION ENCRIPTAR
function btnEncriptar() {
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value = ""
}

function encriptar (stringEncriptada) {
        let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],["!", ""],["@", ""],["#", ""],["$", ""],["%", ""],["", ""],["&", ""],];
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
                if (stringEncriptada.includes(matrizCodigo[i][0])) {
                        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
        }
        return stringEncriptada;
}

//FUNCION DESENCRIPTAR

function btnDecriptar() {
        const textoDecriptado = decriptar(inputTexto.value);
        mensaje.value = textoDecriptado;
        inputTexto.value = ""
}

function decriptar (stringDecriptada) {
        let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],];
        stringDecriptada = stringDecriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
                if (stringDecriptada.includes(matrizCodigo[i][1])) {
                        stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
        }
        return stringDecriptada;
}


//FUNCION COPY

function copy(){
        mensaje.select()
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value=""
        inputTexto.value = ""
        swal({  
                title: "Texto copiado",
                text: "Pegue con ctrl+v!",
                icon: "success",
                button: "Bien!!",
        });
}
