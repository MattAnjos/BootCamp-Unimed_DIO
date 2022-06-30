function calculadora(){
    let operaçao=Number(prompt("Escolha a operação:\n 1-Soma(+)\n 2- Subtraçao(-)\n 3-Multiplicaçao (*)\n 4- Divisão(/)\n 5- Divisão real(%)\n 6- Potencia(**)"));
    let num1=Number(prompt("Digite o primeiro numero"));
    let num2=Number(prompt("Digite o segundo numero"));
    let resultado;

    if (!num1||!num2){
        alert("Numero invalido")
        calculadora();
    }

    switch(operaçao){
        case 1:
            soma(num1,num2);
            break;
        case 2:
            sub(num1,num2);
            break;
        case 3:
            mult(num1,num2);
            break;
        case 4:
            div(num1,num2);
            break;
        case 5:
            div_real(num1,num2);
            break;
        case 6:
            pow(num1,num2);
            break;
        default:
            alert("Operaçao Invalida!!");
            calculadora();
    }

    function soma(a,b){
        resultado=a+b;
        alert(`${a} + ${b} = ${resultado}`);
        retorno();
    }

    function sub(a,b){
        resultado=a-b;
        alert(`${a} - ${b} = ${resultado}`);
        retorno();
    }

    function mult(a,b){
        resultado=a*b;
        alert(`${a} * ${b} = ${resultado}`);
        retorno();
    }

    function div(a,b){
        resultado=a/b;
        alert(`${a} / ${b} = ${resultado}`);
        retorno();
    }

    function div_real(a,b){
        resultado=a%b;
        alert(`O resto da divisao de  ${a}  por ${b} é ${resultado}`);
        retorno();
    }

    function pow(a,b){
        resultado=a**b;
        alert(`${a} elevado a ${b}ª = ${resultado}`);
        retorno();
    }

    function retorno(){
        let retorno = prompt("Deseja realizar novo calculo?\n 1-Sim\n 2-Não");

        retorno==1?calculadora():alert("Até mais")
    }


}

calculadora();