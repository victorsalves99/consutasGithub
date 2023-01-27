import pegarDados from "./conection.js"
const verifica = document.getElementById("verificar")

function verificar() {
    
    if (document.querySelector(".card-resposta")){
        document.querySelector(".card-resposta").remove()
    }
    const nomeDeUsuario = document.getElementById("usuario").value
    pegarDados(nomeDeUsuario)
}

verifica.addEventListener("click", verificar)

export default function criarCard(dados) {
    const nome = dados.name
    const imagen = dados.avatar_url
    const repositorio = dados.public_repos
    const resposta = document.getElementById("res")
    
    const card = document.createElement("div")
    card.className = "card-resposta"
    const cardimagi = document.createElement("img")
    cardimagi.src = imagen
    const paragravo = document.createElement("p")
    paragravo.innerText = nome
    paragravo.className = "card-nome"
    const numeroRepo = document.createElement("p")
    numeroRepo.innerText = `Numero de Repositorios: ${repositorio}`
    card.append(cardimagi,paragravo,numeroRepo)
    resposta.appendChild(card)

}