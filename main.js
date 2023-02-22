function contagem() {
//Valores dos inputs
    let inicio = document.getElementById('inicial').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('contar').value
    let res = document.getElementById('res')
//Conferindo valores dos inputs
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "Por favor, defina os dados acima"
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        
        if(p <= 0) {
            alert('Contagem não realizada [Passo <= 0]. Considerando passo igual a 1')
            p = 1
        }
//realizando contagem
        if(i < f) {
            for(let cal = i; cal <= f; cal += p) {
                res.innerText += ` \u{27A1} ${cal}`
            }
        } else if(i > f) {
            for(let cal = i; cal >= f; cal -= p) {
                res.innerText += ` \u{27A1} ${cal}`
            }
        }
        res.innerText += `\u{1F3C1}`
        
    }
}