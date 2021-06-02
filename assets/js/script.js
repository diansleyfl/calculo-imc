let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultadoIMC = document.getElementById("resultadoIMC");
    
    if(altura != "" && peso != ""){
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";

        if(imc < 18.5) {
            mensagem = "abaixo do peso ideal."
        } else if(imc < 25) {
            mensagem = "com o peso ideal."
        } else if(imc < 30) {
            mensagem = "um pouco acima do peso."
        } else if(imc < 35) {
            mensagem = "com obesidade classe I. Cuidado!"
        } else if(imc < 40) {
            mensagem = "com obesidade classe II. Cuidado!"
        } else {
            mensagem = "com obesidade classe III. Cuidado!"
        }

        resultadoIMC.textContent = 'Seu IMC é ' + imc + '. Você está ' + mensagem;
        
    } else{
        resultadoIMC.textContent = "Preencha todos os campos para que seja possível fazer o cálculo!"
    }


}

botaoCalcular.addEventListener('click', calculandoIMC);
