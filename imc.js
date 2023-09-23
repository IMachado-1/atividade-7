// Função para calcular o IMC
function calcularIMC() {
    // Obter o valor do peso em quilogramas do input com id "peso"
    var peso = parseFloat(document.getElementById("peso").value);
  
    // Obter o valor da altura em metros do input com id "altura"
    var altura = parseFloat(document.getElementById("altura").value);
  
    // Verificar se os valores de peso e altura são válidos
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      // Calcular o IMC
      var imc = peso / (altura * altura);
  
      // Exibir o resultado em uma div com id "resultado"
      document.getElementById("resultado").innerHTML = "Seu IMC: " + imc.toFixed(2);
    } else {
      // Exibir uma mensagem de erro se os valores não forem válidos
      document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
    }
  }
  