const calcular = () =>{
    const entradaUm = Number(document.getElementById('entrada-1').value)
    const entradaDois = Number(document.getElementById('entrada-2').value)
    let res = document.getElementById('resultado')
    let total = 0

    if(entradaUm && entradaDois != 0){
        if(document.getElementById('soma').checked){
            total = entradaUm + entradaDois
        }else if(document.getElementById('subtracao').checked){
            total = entradaUm - entradaDois
        }else if(document.getElementById('multiplicacao').checked){
            total = entradaUm * entradaDois
        }else{
            total = (entradaUm / entradaDois).toFixed(3).replace('.', ',')
        }
        res.innerHTML = `
            <p>O resultado é ${total}</p>
        `
    }else{
        res.innerHTML = `
            <p>O resultado é 0</p>
        `
    }
}