abstract class Lavoratore {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_redditoannuolordo: number,_codredd: number,  _tasseinps: number, _tasseirpef: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this. tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    getUtileTasse(): number {
        return this.redditoannuolordo * this.codredd / 100;
    }
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseinps / 100; 
    }
    getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseirpef / 100;
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

class Professionista extends Lavoratore {
    constructor(_redditoannuolordo: number, _codredd: number = 78, _tasseinps: number = 25.72, _tasseirpef: number = 5) {
    super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) 
}
   
}

let newProfessionista = new Professionista(30000);
console.log("utile tasse professionista: ", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: ", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: ", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: ", newProfessionista.getRedditoAnnuoNetto());
console.log("---------------------------------");


class Artigiano extends Lavoratore {
    constructor(_redditoannuolordo: number, _codredd: number = 67, _tasseinps: number = 35, _tasseirpef: number = 15) {
    super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) 
}

}

let newArtigiano = new Artigiano(30000);
console.log("utile tasse artigiano: ",newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: ",newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: ",newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: ",newArtigiano.getRedditoAnnuoNetto());
console.log("---------------------------------");

class Commerciante extends Lavoratore {
    constructor(_redditoannuolordo: number, _codredd: number = 40, _tasseinps: number = 35, _tasseirpef: number = 15) {
    super(_redditoannuolordo, _codredd, _tasseinps, _tasseirpef) 
}
}

let newCommerciante = new Commerciante(30000);
console.log("utile tasse commerciante: ",newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: ",newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: ",newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: ",newCommerciante.getRedditoAnnuoNetto());
console.log("---------------------------------");