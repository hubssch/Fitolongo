const kalendarz = document.getElementById("kalendarz");
const cwiczenia = document.getElementById("cwiczenia");
const trenerzy = document.getElementById("trenerzy")

kalendarz.addEventListener("click", function() {
    window.open("./kalendarz.html", "_self");
});

cwiczenia.addEventListener("click", function() {
    window.open("./cwiczenia.html", "_self");
});

trenerzy.addEventListener("click", function() {
    window.open("./trenerzy.html", "_self");
});