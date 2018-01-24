function start() {

setInterval(function(interval) { Nedtelle() }, 1000);

function Nedtelle() {

var tidigjen = document.getElementById("nedtelling").innerHTML;

if (tidigjen >= 1) {

document.getElementById("nedtelling").innerHTML = (document.getElementById("nedtelling").innerHTML)-1;

} else {
clearInterval(interval)

}
    }
}
