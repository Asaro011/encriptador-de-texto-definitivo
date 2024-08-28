//Variables
const mensaje = document.querySelector(".text-mensaje");
const resultado = document.querySelector(".text-resultado");
//Botones

function botonEncriptar() {
    
    const txtEncriptado = encriptar(mensaje.value)
    resultado.value = txtEncriptado
    txtEncriptado.value = "";
   
}

function botonDesencriptar() {


    const txtEncriptado = desencriptar(mensaje.value)
    resultado.value = txtEncriptado
    txtEncriptado.value = "";
    
}

function botonCopiar() {

    const resultado = document.querySelector(".text-resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(resultado.value).then(() => {
        resultado.value = "";

    });


}
//Encriptacion

function encriptar(encriptarVocal) {
    const vocales = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    encriptarVocal = encriptarVocal.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        if (encriptarVocal.includes(vocales[i][0])) {
            encriptarVocal = encriptarVocal.replaceAll(vocales[i][0], vocales[i][1])
        };
    }
    return encriptarVocal;

}

//Desencriptacion

function desencriptar(desencriptarVocal) {
    const vocales = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    desencriptarVocal = desencriptarVocal.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        if (desencriptarVocal.includes(vocales[i][1])) {
            desencriptarVocal = desencriptarVocal.replaceAll(vocales[i][1], vocales[i][0])
        };
    }
    return desencriptarVocal;

}