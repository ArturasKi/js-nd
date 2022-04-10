// Class Dog {}
// žino vardą
// žino rūšies pavadinimą
// žino (kailio) spalvą
// žino akių spalvą
// žino kojų skaičių
// žino garsą kurį gali išskleisti
// žino mėgstamą maistą
// žino ar šiuo metu sėdi (default: ne)
// gali išskleisti garsą, pvz.: “Rex: au au!!”
// gali prisistatyti, pvz.: “Hi, I am a dog and my name is Rex. My color is black. My eyes are blue. I have 4 legs. Right now I am standing.”
// gali atsisėsti ir apie tai pranešti, pvz.: “Rex: I am sitting.”
// gali atsistoti ir apie tai pranešti, pvz.: “Rex: I am standing.”

class Dog {
    constructor(vardas, rusis) {
        this.vardas = vardas;
        this.rusis = rusis;
        this.spalva = 'pilka';
        this.akys = 'melynos';
        this.kojos = '4';
        this.garsas = false;
        this.maistas = 'sonkauliuku';
        this.arSedi = false;
    }
    galiIsskleistGarsa() {
        if (this.garsas === true) {
            console.log(`${this.vardas}: au au!!`);
        }
        if (this.garsas !== true) {
            console.log(`${this.vardas}: Vizgina uodega.`);
        }
    }
    galiPrisistatyti() {
        this.prisistatymas === true;
        console.log(`${this.vardas}: Labas, as esu suo ir mano vardas ${this.vardas}. Mano spalva yra ${this.spalva}. Mano akiu spalva yra ${this.akys}. As turiu ${this.kojos} kojas. Siuo metu`);
    }
    galiAtsisesti() {
        if (this.arSedi !== false) {
        console.log(`${this.vardas}: dabar as sedziu.`);
        }
    }
    galiAtsistoti() {
        if (this.arSedi === false) {
        console.log(`${this.vardas}: dabar as stoviu.`);
        }
    }
    arGausMaisto() {
        if (this.arSedi === false) {
            console.log(`${this.vardas}: gaus ${this.maistas}.`);
        }
        if (this.arSedi !== false) {
            console.log(`${this.vardas}: dabar nenori valgyt.`);
        }
    }
}

const suo1 = new Dog('Vejas', 'Vipetas');

console.log(suo1);

suo1.galiIsskleistGarsa();
suo1.galiPrisistatyti(); 
suo1.galiAtsisesti(); 
suo1.galiAtsistoti(); 
suo1.arGausMaisto(); 


