/// entrada de dados e calculo
var nota1 = parseFloat(prompt('Digite a primeira nota: '));
var nota2 = parseFloat(prompt('Digite a segunda nota: '));
var media = (nota1 + nota2) / 2;

// buscando id para mostrar os resultados
var mediaSpan = document.getElementById('media');
var situacaoSpan = document.getElementById('situacao');

mediaSpan.innerHTML = media.toFixed(2); // colocar só 2 casas decimais

// saída dos dados
if (media >= 6) {
    situacaoSpan.innerHTML = 'APROVADO';
    situacaoSpan.style.color = 'blue';
} else {
    situacaoSpan.innerHTML = 'REPROVADO';
    situacaoSpan.style.color = 'red';
}
