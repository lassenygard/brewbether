
function countDownClock() {

// Finner argument 1 og 2 (0 og 1) nederst. Gir 100 sec dersom de ikke er fylt ut
  var number = document.getElementById('tid_mesk').innerHTML;


  var d = document;
  var minutesElement = d.querySelector('.minutes');
  var countdown = void 0;
  convertFormat();

// gjør om argument 1 (0) til riktig tall basert på argument 2 (1). Hvis argument 2 = minutes
// ..gir den funksjonen timer beskjed om at argument 1 skal ganges med 60.
  function convertFormat() {
        return timer(number * 60);
  }

// Funksjonen timer bruker tallet i argument 1 (0), som er omgjort til sekunder, og måler tiden fra
// siden ble lastet til nå, plusser på tid
  function timer(minutes) {
    var now = Date.now();
    var then = now + minutes * 1000;

// beregner tiden igjen til målet ved å ta tidspunktet siden ble lastet pluss millisekunder lagt til minus tidspunkt nå
    countdown = setInterval(function () {
      var minutesLeft = Math.round((then - Date.now()) / 1000);

// stopper når klokken når 0
      if (minutesLeft <= 0) {
        clearInterval(countdown);
        alert('dddd');
        return;
      };

      displayTimeLeft(minutesLeft);
    }, 1000);
  }

// viser tiden som er igjen
  function displayTimeLeft(minutes) {

    minutesElement.textContent = Math.floor(minutes / 60);

  }
};



/*
  start countdown
  enter number and format
  days, hours, minutes or minutes
*/
