// 1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.

skaiciuSuma = 0;

while (skaiciuSuma < 100) {
    let atsitiktinis = Math.floor(Math.random() * 10) + 1;
    skaiciuSuma += atsitiktinis;
    console.log(`Atsitiktinis sk.: ${atsitiktinis} -> Suma: ${skaiciuSuma}`);
}
console.log('----------');

//  2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.

skaiciuSuma = 0;

while (skaiciuSuma % 7 === 0) {
    let randomSkaicius = Math.floor(Math.random() * 10) + 1;
    skaiciuSuma += randomSkaicius;
    console.log(skaiciuSuma);
} 

console.log('----------');

// 3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.Kontroliniai duomenys:Įveskite knygos skyrių skaičių: 8 
// Tadas visą knygą perskaitys per 4 dienas (-ų).
// Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
// Įveskite knygos skyrių skaičių: 17
// Tadas visą knygą perskaitys per 6 dienas (-ų).
// Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).

// 4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.

paskutinisPenki = 0;

while (paskutinisPenki !== 5) {
    paskutinisPenki = Math.floor(Math.random() * 11);
    
    console.log(paskutinisPenki);
}

// 5. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.




    
    

