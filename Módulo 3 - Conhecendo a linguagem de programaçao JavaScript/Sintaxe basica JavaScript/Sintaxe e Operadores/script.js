function desafio(a,b){
    if(a==b){
        var igual=`Os numeros ${a} e ${b} são iguais.`;
    }
    else{
        var igual=`Os numeros ${a} e ${b} não são iguais.`;
    }

    if(a+b>10){
        if(a+b>20){
            var soma=` Sua soma é ${a+b}, que é maior que 10 e maior que 20.`;
        }
        else{
            var soma=` Sua soma é ${a+b}, que é maior que 10 e menor que 20.`;
        }
    }
    else{
        var soma=` Sua soma é ${a+b}, que é menor que 10 e menor que 20.`;

    }

return (igual+soma);
}


console.log(desafio(10,10));
