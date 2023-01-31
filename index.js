import pegarDados from "./conection.js"
const verifica = document.getElementById("verificar")

function verificar() {
    
    if (document.querySelector(".card-resposta")){
        document.querySelector(".card-resposta").remove()
    }
    const nomeDeUsuario = document.getElementById("usuario")
    pegarDados(nomeDeUsuario.value)
    nomeDeUsuario.value  = ""
}

verifica.addEventListener("click", verificar)

