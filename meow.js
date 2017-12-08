window.onload = function() {
  console.log("OH SNAP, KITTENS");
  var searchGiphyButton = document.getElementById("getMeow");
  var giphyImage = document.getElementById("rando-gliph-img");
  var textNothing = document.getElementById("nothing-yet");
  var textInput = document.getElementById("textInput");

  searchGiphyButton.addEventListener("click", function() {
    console.log("CLICK MEOW !!!");
    console.log(textInput.value);
    //What is the value of the text input

    fetchGiphy(textInput.value);
  });

  function fetchGiphy(inputValue) {
    if (inputValue === "") {
      inputValue = "kitten";
    }
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" +
        inputValue
    );

    xhr.onload = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var payload = JSON.parse(xhr.response);
        console.log(payload.data.image_url);
        updateMeowImage(payload.data.image_url);
      }
    };

    xhr.send();
  }

  function updateMeowImage(imageUrl) {
    giphyImage.src = imageUrl;
    textNothing.setAttribute("class", "nothing-yet-hidden");
  }
};
