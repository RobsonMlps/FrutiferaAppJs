let itensCardastrados = JSON.parse(localStorage.getItem("itensCardastrados")) || [];

// essa parte fiz com ajuda do chatGPT
function data (plantada) {
        
    if (!plantada) return 0;
    const hoje = new Date();
    const dataPlantio = new Date(plantada);
    return (hoje.getFullYear() - dataPlantio.getFullYear()) * 12 + (hoje.getMonth() - dataPlantio.getMonth());

}

// cria ID
itensCardastrados.id = Date.now();

function criarCartoes() {
    let cartoesDIV = document.getElementById("cartoes");
    cartoesDIV.innerHTML = ""; 



    for (let dados of itensCardastrados) {
        let idadeMeses = data(dados.plantada);
        let cartao = `<div class="col">
            <div class="card" style="width: 20rem;">
                <img src="${dados.imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Informações</h5>
                    <p class="card-text"><b>Nome:</b> ${dados.nome}</p>
                    <p class="card-text"><b>Nome científico:</b> ${dados.nomeCientifico}</p>
                    <p class="card-text"><b>Descrição:</b> ${dados.descricao }</p>
                    <p class="card-text"><b>Produção:</b> ${dados.producao } (KG)</p>
                    <p class="card-text><b>Preço:</b> ${dados.preco}</p>
                    <p class="card-text><b>Idade em Meses:</b> ${idadeMeses}</p>
                    <p class="card-text><b>ID:</b>${dados.id}</p>
                </div>
            </div>
        </div>`;

        let cartoesDIV = document.getElementById("cartoes");
        cartoesDIV.insertAdjacentHTML("beforeend", cartao);
    }
}


criarCartoes();