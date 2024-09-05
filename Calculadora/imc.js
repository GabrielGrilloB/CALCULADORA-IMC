
const calcular = document.getElementById('calcular')


function imc () {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

if (nome !== '' && altura !== '' && peso !== ''){
  const valorIMC = (peso / (altura * altura)).toFixed(1)

  let classificacao = ''
if(valorIMC < 16){
classificacao = 'com magreza grave.'
}else if(valorIMC < 16.9){
  classificacao = 'com magreza moderada.'
}else if (valorIMC < 18.5){
    classificacao = 'com magreza leve.'
  } else if(valorIMC < 24.9){
    classificacao = 'com peso ideal.'
  } else if(valorIMC < 29.9) {
    classificacao = 'com sobrepeso.'
  } else if(valorIMC < 34.9){
     classificacao = 'com obesidadade grau I.'
  }else if(valorIMC < 39.9){
    classificacao= 'com obesidade grau II ou severa.'
  }else{
    classificacao = 'com obesidade grau III ou mórbida.'
  }

  resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

}else{
  resultado.textContent = 'preencha todos os campos'
}

}

calcular.addEventListener('click', imc)