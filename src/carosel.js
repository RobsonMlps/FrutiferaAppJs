let itensCardapio = JSON.parse(localStorage.getItem("itensCardapio")) || [];

function criarCaroseu() {
    let caroseuDIV = document.getElementById("itensCardapioTBody");
    caroseuDIV.innerHTML = "";
    

    for (let dados of itensCardapio) {
        let caroseu = `
            <div class="carousel-item active">
                <img src="${dados.imagem}" class="d-block w-100" alt="...">
            </div>
        `;
        tabelaDIV.insertAdjacentHTML("beforeend", caroseu);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let cardapioForm = document.getElementById('ItemCadastrarForm');
    let cardapioFormData = new FormData(cardapioForm);
    let itemCardapio = Object.fromEntries(cardapioFormData);

    itensCardapio.push(itemCardapio);
    localStorage.setItem('itensCardapio', JSON.stringify(itensCardapio));

}

criarCaroseu()
