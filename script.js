var button = document.querySelector(".translate");
var textInput = document.querySelector(".textarea");
var outputArea = document.querySelector(".output");

var serverURL = "	https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server, try again after sometime");
}

function clickHandler() {
  var inputText = textInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((respone) => respone.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputArea.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", clickHandler);
