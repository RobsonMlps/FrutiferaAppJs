let itensCardastrados = JSON.parse(localStorage.getItem("itensCardastrados")) || [];

function criarTabela() {
    let tabelaDIV = document.getElementById("itensCardapioTBody");
    tabelaDIV.innerHTML = "";

    function data (plantada) {
        
        let hoje =new Date();
        plantada.getMonth() -
        hoje.getMonth() +
        12 * (plantada.getFullYear() - hoje.getFullYear())

        return plantada
    }
    

    for (let dados of itensCardastrados) {
        let tabela = `
            <tr>
                <td>${dados.id}</td>
                <td>${dados.nome}</td>
                <td>${dados.nomeCientifico}</td>
                <td>${dados.preco}</td>
                <td>${dados.descricao}</td>
                <td>${dados.producao}</td>
            </tr>
        `;
        tabelaDIV.insertAdjacentHTML("beforeend", tabela);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let cardapioForm = document.getElementById('ItemCadastrarForm');
    let cardapioFormData = new FormData(cardapioForm);
    let itemCardapio = Object.fromEntries(cardapioFormData);

    itemCardapio.id = Date.now();

    itensCardastrados.push(itemCardapio);
    localStorage.setItem('itensCardastrados', JSON.stringify(itensCardastrados));

    criarTabela();

    cardapioForm.reset();

    Toastify({
        text: "Item cadastrado com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#198754",
        stopOnFocus: true,
    }).showToast();

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
    modal.hide();
}

let itemCadastrarForm = document.getElementById("ItemCadastrarForm");
itemCadastrarForm.onsubmit = handleSubmit;
