let itensCardapio = JSON.parse(localStorage.getItem("itensCardapio")) || [];


function criarCartoes() {
    let cartoesDIV = document.getElementById("cartoes");
    cartoesDIV.innerHTML = ""; 

    for (let dados of itensCardapio) {
        let cartao = `<div class="col">
            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">Informações</h5>
                    <p class="card-text"><b>Nome:</b> ${dados.nome}</p>
                    <p class="card-text"><b>Nome científico:</b> ${dados.nomeCientifico}</p>
                    <p class="card-text"><b>Descrição:</b> ${dados.descricao }</p>
                    <p class="card-text"><b>Produção:</b> ${dados.producao } (KG)</p>
                    <p class="card-text><b>Preço:</b> ${dados.preco}</p>
                    <p class="card-text><b>ID:</b> ${dados.id}</p>
                </div>
            </div>
        </div>`;

        let cartoesDIV = document.getElementById("cartoes");
        cartoesDIV.insertAdjacentHTML("beforeend", cartao);
    }
}


criarCartoes();