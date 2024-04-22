let paragrafo = document.querySelector('h1')
let texto = paragrafo.innerHTML
let controlador = 0

const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

    if(texto.length > controlador){
        if(controlador == 0){
            paragrafo.innerHTML = texto.charAt(controlador)
        } else{
            paragrafo.innerHTML += texto.charAt(controlador)
        }

        paragrafo.innerHTML += '|'

        controlador++
        setTimeout(escrever,50)
    }
}

escrever()