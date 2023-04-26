//recupero la griglia contenitore
const griglia = document.getElementById("grid");

//Griglia 8x8 = 64 elementi
for (let i = 0; i < 64; i++) {

    //CODICE SCHIANTATO QUI, MA VOI USATE LE FUNZIONI !
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("square");

    nuovoDiv.addEventListener("click", function() {
        console.log("this: ", this);
        this.classList.toggle("clicked");
    });

    griglia.appendChild(nuovoDiv);

    // const nuovoDivHtml = '<div class="square"></div>';
    // griglia.innerHTML += nuovoDivHtml;
}