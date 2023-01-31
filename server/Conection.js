import criarCard from "../components/card.js"
import err from "../components/erro.js"

const pegarDados = async (nomeDeUsuario) => {
    await fetch(`https://api.github.com/users/${nomeDeUsuario}`,{
    method: "GET",
    headers: {
        accept: "application/vnd.github.v3+json",
    }
    }).then((resposta => {
        return resposta.json()
    })).then((dados) => {
        if (dados.message) {
            err()
        }else {
            criarCard(dados)
        }
    }).catch((err)=> {
        DadosUsuario = err
    })
}
export default pegarDados