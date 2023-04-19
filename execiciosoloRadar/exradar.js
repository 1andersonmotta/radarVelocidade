

function radar (){
    var res = window.document.getElementById('res')
    var velocidade = window.document.getElementById('vel')
    var vel1 = Number(velocidade.value)
    var img = window.document.getElementById('imagem')
    var dig = window.document.getElementById('dig');
    var pontos = (vel1 - 70) / 5;

    res.innerHTML = ``;
    img.src = '';

    if (vel1 <= 0){
        alert  `NÚMERO INVÁLIDO`;
    }
    if (vel1 <=  70 && vel1 > 0 ){
        res.innerHTML= `Voce estava há ${vel1.toFixed(0)}Km e  Não foi Multado!!`;
    }
    if(pontos > 0 && pontos <= 1){
        res.innerHTML=`Voce estava há ${vel1.toFixed(0)}Km e levou 1 Ponto.`
    }
    if (vel1 > 70 && vel1 <200 && pontos > 1){
        res.innerHTML= `Você estava há ${vel1.toFixed(0)}Km , foi Multado e levou ${pontos.toFixed(0)} Pontos.`;
    }
    else if (vel1 >= 200){
        res.innerHTML= `QUER MORRER ?`;
        dig.innerHTML=''
        img.src = 'fotomorte.jpg'        
        
    };

    

    velocidade.value = '';
    velocidade.focus();
};






