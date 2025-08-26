let itensCardapio = JSON.parse(localStorage.getItem("itensCardapio")) || [];
// vai usar o JSON.parse para converter em string os dados que estão no localStorage e vai guardar os dados em um array

function criarCaroseu() {
    // Função que vai montar a estrutura do carrossel.

    let caroseuDIV = document.getElementById("caroseu");
    // Vai usar o "document.getElementById("caroseu");" para saber onde o carrossel vai ser inserido, através do ID da div

    caroseuDIV.innerHTML = "";
    // apaga o conteúdo atual, para re-renderizar do zero, assim evitando a duplicação

    
    for (let dados of itensCardapio) {
        // Vai percorrer cada objeto dentro do array "itensCardapio" usando for...of
        
        let caroseu = `
            <div class="carousel-item ">
                <img src="${dados.imagem}" class="d-block w-100" alt="...">
            </div>
        `;
        // Cria o carousel na estrutura do HTML, para ele ser inserido da forma correta

        caroseuDIV.insertAdjacentHTML("beforeend", caroseu);
        // aqui vai ser usado o "insertAdjacentHTML" para colocar os caroseu no HTML, através do ID da div
    }
}

criarCaroseu();
// Chama a função
