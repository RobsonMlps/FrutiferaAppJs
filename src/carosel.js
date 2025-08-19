let itensCardapio = JSON.parse(localStorage.getItem("itensCardapio")) || [];

function criarCaroseu() {
    let caroseuDIV = document.getElementById("caroseu");
    caroseuDIV.innerHTML = "";
    

    for (let dados of itensCardapio) {
        let caroseu = `
            <div class="carousel-item active">
                <img src="${dados.imagem}" class="d-block w-100" alt="...">
            </div>
        `;
        caroseuDIV.insertAdjacentHTML("beforeend", caroseu);
    }
}


criarCaroseu();
