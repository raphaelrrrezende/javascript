let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valor)) {
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function analizar() {
    if (valor.length == 0) {
        alert('Adicione valores antes de analizar!')
    } else {
        let total = valor.length
        let menor = valor[0]
        let maior = valor[0]
        let soma = 0
        let média = 0

        for (let pos in valor) {
            soma += valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
        }
        média = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${total} números;</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor};</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior};</p>`
        res.innerHTML += `<p>A soma dos números adicionados resulta em ${soma};</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${média}.</p>`
    }
}