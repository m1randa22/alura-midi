//Este JavaScript tem exemplos de como funciona cada objeto e para que servem.

function tocaSom (seletorAudio) { //Foi criado um '(parâmetro explicativo)'.
   const elemento = document.querySelector(seletorAudio).play();

   //Se existe o elemento que não seja nulo e o nome local do elemento for igual a 'audio', 
    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

//enquanto (while) determinada condição '()', vai criar uma condição e fazer a repetição parar
//para (for)
for (let contador = 0; contador < listaDeTeclas.length; contador++) { //listaDeTeclas.length chama todas as referências desta listaDeTeclas

    const tecla = listaDeTeclas[contador] //listaDeTeclas[contador] passou a se chamar teclas, com todas as suas funções
    const instrumento = tecla.classList[1] //usamos a classe como a lista
    const idAudio = `#som_${instrumento}` //criou uma constante chamada idAudio e usamos `` para que seja como uma string
    //template string '$' serve para rodar um pedaço de código dentro de uma string

    tecla.onclick = function () { //Neste escopo, é chamado o idAudio para reproduzir o som da 'const instrumento'
        tocaSom(idAudio);
    }

    //onkeydown (quando a tecla está pressionada)
    tecla.onkeydown = function (evento) { //neste escopo, foi inserido uma classe em todos os buttons quando selecionados
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
