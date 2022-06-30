pessoa1={
    nome:"Maria",
    idade:20,
};

pessoa2={
    nome:"João",
    idade:50,
};



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 7));

console.log(calculaIdade.apply(pessoa1, [7]));
