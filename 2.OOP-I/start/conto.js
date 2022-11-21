"use strict";
class SonAccount {
    constructor() {
        this.saldo = 0;
        this.versamento = Math.floor(Math.random() * 100);
        this.prelievo = Math.floor(Math.random() * 100);
    }
    vers() {
        return this.saldo = this.saldo + this.versamento;
    }
    prel() {
        return this.saldo = this.saldo - this.prelievo;
    }
}
let conto = new SonAccount;
console.log('Benvenuto nel conto figlio');
console.log('il tuo saldo corrente è: €', conto.saldo);
conto.vers();
console.log('hai versato: €', conto.versamento);
console.log('il tuo saldo corrente è: €', conto.saldo);
conto.prel();
console.log('hai prelevato: €', conto.prelievo);
console.log('il tuo saldo corrente è: €', conto.saldo);
class MotherAccount extends SonAccount {
    constructor() {
        super(...arguments);
        this.saldo = 0;
        this.versamento = Math.floor(Math.random() * 100);
        this.prelievo = Math.floor(Math.random() * 100);
    }
    vers() {
        return this.saldo = this.saldo + this.versamento;
    }
    prel() {
        return this.saldo = this.saldo - this.prelievo;
    }
    interesse() {
        return this.saldo = this.saldo + (this.saldo * 10 / 100);
    }
}
let contoDue = new MotherAccount;
console.log('Benvenuto nel conto genitore');
console.log('il tuo saldo corrente è: €', contoDue.saldo);
contoDue.vers();
console.log('hai versato: €', contoDue.versamento);
console.log('il tuo saldo corrente è: €', contoDue.saldo);
contoDue.prel();
console.log('hai prelevato: €', contoDue.prelievo);
console.log('il tuo saldo corrente è: €', contoDue.saldo);
contoDue.interesse();
console.log('il tuo saldo corrente con interesse è: €', contoDue.saldo);
