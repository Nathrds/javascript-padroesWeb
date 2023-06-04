// Criar função para calculo
function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value) / 100; // converter para metros

    var imc = peso / (altura * altura);
    var resultadoSpan = document.getElementById("resultado");
    var situacaoSpan = document.getElementById("situacao");

    resultadoSpan.innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
      situacaoSpan.innerHTML = "Abaixo do peso";
      situacaoSpan.className = "perigo";
    } else if (imc >= 18.5 && imc < 25) {
      situacaoSpan.innerHTML = "Peso normal";
      situacaoSpan.className = "normal";
    } else if (imc >= 25 && imc < 30) {
      situacaoSpan.innerHTML = "Acima do peso";
      situacaoSpan.className = "alerta";
    } else if (imc >= 30 && imc < 35) {
      situacaoSpan.innerHTML = "Obesidade I";
      situacaoSpan.className = "perigo";
    } else if (imc >= 35 && imc < 40) {
      situacaoSpan.innerHTML = "Obesidade II";
      situacaoSpan.className = "perigo";
    } else {
      situacaoSpan.innerHTML = "Obesidade III";
      situacaoSpan.className = "perigo";
    }
  }
  