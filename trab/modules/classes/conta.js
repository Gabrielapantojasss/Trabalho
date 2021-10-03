
class conta{
	constructor(saldo){
		this._saldo=10;
	}
	rendPoupanca(){

	}

	saque(saldo){
		var saldo=10;		
		saldo = saldo + (saldo*0.05);
		return saldo;
	}

	deposito(saldo){
		saldo=saldo-0.05;
	}
}