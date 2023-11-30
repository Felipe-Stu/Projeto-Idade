function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        var genero = '';

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imgs/crianca-homem.png');
            } else if (idade < 21) {
                img.setAttribute('src', './imgs/adolescente-masculino.png');
            } else if (idade < 50) {
                img.setAttribute('src', './imgs/adulto.png');
            } else {
                img.setAttribute('src', './imgs/idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imgs/crianca-mulher.png');
            } else if (idade < 21) {
                img.setAttribute('src', './imgs/adolescente-feminino.png');
            } else if (idade < 50) {
                img.setAttribute('src', './imgs/adulta.png');
            } else {
                img.setAttribute('src', './imgs/idosa.png');
            }
        }

        res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos.`;
        res.appendChild(img);
    }
}
