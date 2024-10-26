let botaoSimples = document.getElementById('btSimples')
let botaoComposto = document.getElementById('btComposto')

function jurosSimples() {

    let capital = document.getElementById('capital')
    let taxaJuros = document.getElementById('taxa')
    let tempo = document.getElementById('tempo')
    let resposta = document.getElementById('res')
    let resposta1 = document.getElementById('res1')
    let juros
    let final

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    juros = valorCapital * (valorTaxa/100) * valorTempo
    final = valorCapital + juros

    resposta.innerHTML = `Montante final: R$ ${final.toFixed(2)} reais`
    resposta1.innerHTML = `Rendimento de juros: R$ ${juros.toFixed(2)} reais`
    
}

function jurosCompostos() {

    let capital = document.getElementById('capital')
    let taxaJuros = document.getElementById('taxa')
    let tempo = document.getElementById('tempo')
    let resposta = document.getElementById('res')
    let resposta1 = document.getElementById('res1')
    let juros
    let montante

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    montante = valorCapital * Math.pow((1 + (valorTaxa/100)), valorTempo)
    juros = montante - valorCapital

    resposta.innerHTML = `Montante final: R$ ${montante.toFixed(2)} reais`
    resposta1.innerHTML = `Rendimento de juros: R$ ${juros.toFixed(2)} reais`
}