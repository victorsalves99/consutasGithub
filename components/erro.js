export default function err () {
    const erro = document.querySelector("#erro")
    erro.className = "animacao"
    setTimeout(() => {
        erro.className = ""
    },4000)
}