class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Saldo insuficiente!";
    }
    if (valor <= 0) {
      return "Valor digitado inválido!";
    }
    this._saldo = this._saldo - valor;
    return `Você sacou R$${valor}.`;
  }

  depositar(valor) {
    if (valor <= 0) {
      return "Valor digitado inválido!";
    }
    this._saldo = this._saldo + valor;
    return `Você depositou R$${valor}.`;
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this.cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this.cartaoCredito;
  }

  set cartaoCredito(limite) {
    this._cartaoCredito = limite;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }
  sacar(valor) {
    if (valor > 500) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
  }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333, false);

console.log(contaUni.depositar(1500));
console.log(contaUni.saldo);
console.log(contaUni.sacar(600));
console.log(contaUni.saldo);
console.log(contaUni.tipo);
