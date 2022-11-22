"use strict";
class Lavoratore {
    constructor(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
}
class Professionista extends Lavoratore {
    constructor(_redditoannuolordo, _codredd = 78, _tasseinps = 25.72, _tasseirpef = 5) {
        super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef);
    }
    getUtileTasse() {
        return this.redditoannuolordo * this.codredd / 100;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseinps / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseirpef / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
let newProfessionista = new Professionista(30000);
console.log("utile tasse professionista: ", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: ", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: ", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: ", newProfessionista.getRedditoAnnuoNetto());
console.log("---------------------------------");
class Artigiano extends Professionista {
    constructor(_redditoannuolordo, _codredd = 67, _tasseinps = 35, _tasseirpef = 15) {
        super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef);
    }
}
let newArtigiano = new Artigiano(30000);
console.log("utile tasse artigiano: ", newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: ", newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: ", newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: ", newArtigiano.getRedditoAnnuoNetto());
console.log("---------------------------------");
class Commerciante extends Professionista {
    constructor(_redditoannuolordo, _codredd = 40, _tasseinps = 35, _tasseirpef = 15) {
        super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef);
    }
}
let newCommerciante = new Commerciante(30000);
console.log("utile tasse commerciante: ", newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: ", newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: ", newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: ", newCommerciante.getRedditoAnnuoNetto());
console.log("---------------------------------");
