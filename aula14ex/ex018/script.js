function tabuada() {
    var txtNum = document.getElementById('num')
    var tabuada = document.getElementById('tab')

    if (txtNum.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(txtNum.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}