var randomNum = parseInt(Math.random() * 11);
console.log(randomNum);
var nChutes = 0;
var tentativasRest = 3;

var textoResp = "";
var elementoResp = document.getElementById("respostaChute");

function compararChute() {
  var elementoChute = document.getElementById("entryValue").value;
  tentativasRest = tentativasRest - 1;

  if (nChutes <= 2) {
    if (elementoChute == randomNum) {
      textoResp =
        "<p>Parabéns! Você acertou! O número aleatório realmente era " +
        elementoChute +
        "</p>";
      elementoResp.innerHTML = textoResp;
      nChutes = nChutes + 1;
    } else if (elementoChute != randomNum && nChutes == 2) {
      textoResp =
        "<p>Que pena, você não acertou! O valor aleatório era " +
        randomNum +
        "!</p>";
      elementoResp.innerHTML = textoResp;
    } else {
      textoResp =
        "<p>Ops, você errou... Tente novamente! Lhe restam " +
        tentativasRest +
        " tentativas!</p>";
      elementoResp.innerHTML = textoResp;
      nChutes = nChutes + 1;
    }
  }
}