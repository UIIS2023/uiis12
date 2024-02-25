
const saveti = ["Budite pazljivi", 
"Nosite sredstva za samoodbranu sa sobom", 
"Budite na oprezu", 
"Prepustite se čarima zivota", 
"Dajte sebi malo oduška", 
"Uložite puno truda u ono što želite", 
"Nemojte prihvatati tuđe predloge", 
"Imajte vise poštovanja prema drugima", 
"Vreme je da se ponovite, idite u šoping!",
"Razmislite o promeni rutine",
"Postavite realne ciljeve i radite na njima",
"Pronađite vreme za opuštanje i meditaciju",
"Razgovarajte s nekim o svojim osećajima",
"Izazovite sebe da naučite nešto novo",
"Sledite svoje snove, bez obzira na prepreke",
"Razmislite o svojim prioritetima",
"Naučite reći 'ne' kada je to potrebno",
"Prestanite da odložete, ovo je pravo vreme",
"Ostanite povezani s porodicom i prijateljima",
"Budite više zahvalni"];

const meseci = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
const sudbine = [
  "Nasledićete veliku sumu novca", 
  "Čućete dobre vesti", 
  "Kupićete kucu", 
  "Bliska osoba će vas izdati", 
  "Otići ćete na prelepo putovanje", 
  "Udaćete se", 
  "Oženićete se", 
  "Opljačkaće vas",
  "Partner će vas zaprositi",
  "Položićete ispit", 
  "Pašćete godinu", 
  "Dobićete prijatno iznenađenje", 
  "Stare želje će Vam se ostvariti", 
  "Stara ljubav će Vam se vratiti u život", 
  "Dobićete rizičnu ponudu",
  "Otkrićete tajnu koja će promeniti sve", 
  "Otvorićete uspešan posao", 
  "Naučićete nešto novo i korisno", 
  "Upoznaćete značajnu osobu",
  "Putovaćete širom sveta", 
  "Otkrićete skriveni talenat", 
  "Sreća će biti na vašoj strani", 
  "Dobićete priznanje za svoj trud",
  "Pomagaćete drugima u nevolji", 
  "Suočićete se s teškoćama i pobediti", 
  "Otkrićete ljubav prema umetnosti", 
  "Postaćete lider u svojoj zajednici",
  "Osvojićete prestižnu nagradu", 
  "Pomirenje s dugogodišnjim neprijateljem", 
  "Dobićete neočekivani poklon", 
  "Započećete uspešnu karijeru u sportu",
  "Doživećete finansijski gubitak", 
  "Suočićete se s porodičnim problemima", 
  "Izgubićete važan predmet", 
  "Bićete suočeni s neprijatnim iznenađenjem",
  "Izgubićete posao", 
  "Doživećete ljubavnu razočaranost", 
  "Pronaći ćete se u neprilici", 
  "Prolazak kroz težak period u životu",
];





var brSlika = 30;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function OdrediBuducnost() {
const slikeIskoriscene = []

  document.getElementById("kontent").innerHTML = '    <h1 class="naslov">Ovako će izgledati Vaša 2024. godina!</h1>';
  var indexSudbina
  var indexSlika
  for (let index = 0; index < meseci.length; index++) 
  {
    indexSudbina= getRandomInt(brSlika);
    indexSlika = getRandomInt(brSlika);
    while (slikeIskoriscene.includes(indexSlika)){
      indexSlika = getRandomInt(brSlika);
      console.log(indexSlika,slikeIskoriscene.includes(indexSudbina) )
    }

    var opis = sudbine[indexSudbina] + '.<br>' + saveti[getRandomInt(saveti.length)]+ "!";

    document.getElementById("kontent").innerHTML += '<div class = "kartica"><h2>' + meseci[index] +
      '</h2><img src="../slike/' + indexSlika + '.jpg" alt="slika" > <p id = "opis">' +
      opis +
      '</p></div>';

      slikeIskoriscene.push(indexSlika);

  }
}



