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
        this.garsas = true;
        this.maistas = 'sonkauliukai';
        this.arSedi = false;
    }
    galiIsskleistGarsa() {
        if (this.garsas === true) {
            console.log('Vejas: au au!!');
        }
        if (this.garsas !== true) {
            console.log('Vejas: Vizgina uodega.');
        }
    }
    galiPrisistatyti() {
        this.atsisesti === true;
        console.log(`Labas, as esu suo ir mano vardas ${this.vardas}. Mano spalva yra ${this.spalva}. Mano akiu spalva yra ${this.akys}. As turiu ${this.kojos} kojas. Siuo metu`);
    }
    galiAtsisesti() {
        this.arSedi = true;
        console.log('Vejas: dabar as sedziu.');
    }
    galiAtsistoti() {
        this.arSedi = false;
        console.log('Vejas: dabar as stoviu.');
    }

}

const suo1 = new Dog('Vejas', 'Vipetas');

console.log(suo1);

suo1.galiIsskleistGarsa();
suo1.galiPrisistatyti(); 
suo1.galiAtsisesti(); 
suo1.galiAtsistoti(); 


