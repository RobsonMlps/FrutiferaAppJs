// vai usar o JSON.parse para converter em string os dados que estão no localStorage e vai guarda os dados em uma array
let itensCardastrados = JSON.parse(localStorage.getItem("itensCardastrados")) || [];


// essa parte fiz com ajuda do chatGPT porque eu não sei fazer essa parte
// foi criado uma função com o nome "data" para fazer o calculo de meses
function data (plantada) {
    // vai verificar se tem alguma informação em "plantada", se tiver vazio retorna 0
    if (!plantada) return 0;

    const hoje = new Date();
    // Cria um objeto Date com a data/hora atual.

    const dataPlantio = new Date(plantada);
    // Converte a entrada "plantada" em um objeto Date.

    return (hoje.getFullYear() - dataPlantio.getFullYear()) * 12 + (hoje.getMonth() - dataPlantio.getMonth());
    // Calcula a diferença em anos * 12 + diferença de meses.
    // `getFullYear()` pega o ano com 4 dígitos; `getMonth()` pega o mês (0=jan ... 11=dez).
    // Observação: não considera o dia do mês; veja ajuste para ficar mais preciso.
}

// cria o ID
itensCardastrados.id = Date.now();

// essa função é responsavel por interar os cartões que vão ser isseridos no "index.html"
function criarCartoes() {
    
    // Vai usar o "document.getElementById("cartoes");" para saber onde os cartões vão ser inseridos, atraves do ID da div
    let cartoesDIV = document.getElementById("cartoes");
    
    // apaga o conteudo atual, para re-renderizar do zero, assim evitando a duplicação
    cartoesDIV.innerHTML = ""; 


    for (let dados of itensCardastrados) {
        // Vai percorre cada objeto dentro do array "itensCardastrados" usando forof

        let idadeMeses = data(dados.plantada);
        // vai usar a função "data" para calcular a idade das plantas em meses

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
        // Cria os cartões na estrutura do HTML

        cartoesDIV.insertAdjacentHTML("beforeend", cartao);
       // aqui vai ser usado o "insertAdjacentHTML" para colocar os cartões no HTML, atraves do ID da div
    }
}

criarCartoes();
// Chama a função
