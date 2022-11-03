let numero =0

function soma() {
    numero = numero + 1
    mostrarNaTela()
    console.log(numero)
}

function mostrarNaTela() {
    const p = document.querySelector("p")
    p.innerHTML = numero

    if(p.innerHTML==10){
        alert(" LINK NOVO LIBERADO!!! >>>>>> https://www.youtube.com/watch?v=LlHHCXp3Ink&ab_channel=OpenSource")
    }

    
}


