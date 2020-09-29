window.addEventListener('load', () => {
    padrao();
})

var entrada = document.getElementById('entrada');
/* Deixada global pois é usada em varias funções */
var divResultado = document.getElementById('resultado');



/** --- Valida entrada ---
 * 
 *  Se o usuário digitar qualquer caracter que não seja números, o método replace
 *  substitui o caracter digitado por vazio ('').
 * 
 */
entrada.addEventListener('keyup', validaEntrada);

function validaEntrada() {
    var captura = document.getElementById('entrada').value;
    captura = captura.replace(/\D+/, "");
    this.value = captura;
}

/** --- Botão Calcular ---
 * 
 *  Verifica se a entrada ta vazia, se positivo então mostra a mensagem de erro.
 *  E manda escutar o campo de entrada até ter uma entrada válida para retirar a 
 *  mensagem de erro.
 * 
 *  Entrada Válida:  copia o valor de entrada para uma variável temporaria,
 *  limpa os campos para não adicionar novos paragrafos ao final da tabuada.
 *  Faz um for onde, cria o elemento parágrafo, adiciona o conteúdo ao parágrafo
 *  já calculando a multiplicação e por fim vincula o parágrafo ao 
 * 
 */
document.getElementById('calcular').addEventListener('click', () => {
    var captura = document.getElementById('entrada');
    var erro = document.getElementById('erro');

    if (captura.value == '') {
        erro.style.visibility = "visible";
        erro.innerHTML = '* Entrada inválida!';
        captura.addEventListener('keyup', () => {
            if (captura.value != '') erro.style.visibility = "hidden";
        });
    } else {
        //calculando os valores, pega onde vai ser inserido o resultado
        valorEntrada = captura.value;
        limparCampos();
        for (var i = 1; i <= 10; i++) {
            //cria o elemento parágrafo
            var paragrafo = document.createElement('p');
            paragrafo.textContent = valorEntrada + ' x ' + i + ' = ' + i * valorEntrada;
            divResultado.appendChild(paragrafo);
        }
    }
});


/**  --- Botão Limpar ---
 * Limpa os campos e define como padrão a tabuada do zero para ficar sendo exibida.
 * Chama a função de limpar os campos para não ficar adicionando novos paragrafos ao final 
 * de cada calculo e preenche novamente com a tabuada padrão.
 *  
 * */
var limpar = document.getElementById('limpar');
limpar.addEventListener('click', padrao)

function padrao() {
    limparCampos();
    for (var i = 1; i <= 10; i++) {
        //cria o elemento
        var elemento = document.createElement('p');
        elemento.textContent = 0 + ' x ' + i + ' = ' + i * 0;
        divResultado.appendChild(elemento);
    }
}

/* Limpa os campos e remove os filhos da div resultado */
function limparCampos() {

    document.getElementById('entrada').value = '';
    document.getElementById('erro').style.visibility = 'hidden';

    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
};