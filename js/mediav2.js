// criar função para calcular a média
function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    var media = (nota1 + nota2) / 2;

    var mediaSpan = document.getElementById('media');
    var situacaoSpan = document.getElementById('situacao');
    mediaSpan.innerHTML = media.toFixed(2);

    if(media >= 6) {
        situacaoSpan.innerHTML = 'APROVADO';
        situacaoSpan.style.color = 'blue';
    } else {
        situacaoSpan.innerHTML = 'REPROVADO';
        situacaoSpan.style.color = 'red';
    }
} 
