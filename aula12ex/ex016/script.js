function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fSexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (fSexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 2) {
                // Bebê
                imagem.setAttribute('src', 'bebe-m.png')
            } else if (idade >= 2 && idade < 12) {
                // Criança
                imagem.setAttribute('src', 'crianca-m.png')
            } else if (idade >= 12 && idade < 20) {
                // Adolescente
                imagem.setAttribute('src', 'adolescente-m.png')
            } else if (idade >= 20 && idade < 28) {
                // Jovem adulto
                imagem.setAttribute('src', 'jovem-adulto-m.png')
            } else if (idade >= 28 && idade < 65) {
                // Adulto
                imagem.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'idoso-m.png')
            }
        } else if (fSexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                // Bebê
                imagem.setAttribute('src', 'bebe-f.png')
            } else if (idade >= 2 && idade < 12) {
                // Criança
                imagem.setAttribute('src', 'crianca-f.png')
            } else if (idade >= 12 && idade < 20) {
                // Adolescente
                imagem.setAttribute('src', 'adolescente-f.png')
            } else if (idade >= 20 && idade < 28) {
                // Jovem adulto
                imagem.setAttribute('src', 'jovem-adulto-f.png')
            } else if (idade >= 28 && idade < 65) {
                // Adulto
                imagem.setAttribute('src', 'adulto-f.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(imagem)
    }
}