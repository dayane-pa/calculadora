function insert(num){
    let numero = document.querySelector('#mostrador').innerHTML
    document.querySelector('#mostrador').innerHTML = numero + num
}

function clean(){
    document.querySelector('#mostrador').innerHTML = ""
}

function back(){

   var resultado = document.querySelector('#mostrador').innerHTML
   document.querySelector('#mostrador').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = document.querySelector('#mostrador').innerHTML 

    if(resultado){
        document.querySelector('#mostrador').innerHTML = eval(resultado)
    }
}