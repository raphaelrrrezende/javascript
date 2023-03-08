function contar() {
    var txtIni = document.getElementById('ini')
    var txtFim = document.getElementById('fim')
    var txtPas = document.getElementById('pas')
    var txtRes = document.getElementById('res')

    if (txtIni.value.length == 0 || txtFim.value.length == 0 || txtPas.value.length == 0) {
        alert('Estão faltando dados!')
        txtRes.innerHTML = 'Não é possível contar!'
    } else {
        txtRes.innerHTML = 'Contando... <br>'
        var i = Number(txtIni.value)
        var f = Number(txtFim.value)
        var p = Number(txtPas.value)
        var c = i

        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            while (c <= f) {
                txtRes.innerHTML += ` ${c} \u{27A1} `
                c += p
            }
        } else {
            // Contagem regressiva
            while (c >= f) {
                txtRes.innerHTML += ` ${c} \u{27A1} `
                c -= p
            }
        }
        txtRes.innerHTML += `\u{1F3C1}`
    }
}