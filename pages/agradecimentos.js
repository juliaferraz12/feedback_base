function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafos = document.querySelector(".paragrafos_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`

}

pegarNota()