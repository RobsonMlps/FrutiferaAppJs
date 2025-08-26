let itensCardastrados = JSON.parse(localStorage.getItem("itensCardastrados")) || [];
// vai usar o JSON.parse para converter em string os dados que estão no localStorage e vai guarda os dados em uma array

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

function criarTabela() {
    // essa função é responsavel por interar e montar as linhas <tr> dentro do <tbody> da tabela,
    // vão ser isseridos no "index.html"

    let tabelaDIV = document.getElementById("itensCardapioTBody");
    // Vai usar o "document.getElementById("itensCardapioTBody");" 
    // para saber onde os dados da tabela vai ser inserido, atraves do ID da div
    tabelaDIV.innerHTML = "";
    // apaga o conteudo atual, para re-renderizar do zero, assim evitando a duplicação


    for (let dados of itensCardastrados) {
        // Vai percorre cada objeto dentro do array "itensCardastrados" usando forof

        let idadeMeses = data(dados.plantada);
        // vai usar a função "data" para calcular a idade das plantas em meses
    

        let tabela = `
            <tr>
                <td>${dados.id}</td>
                <td>${dados.nome}</td>
                <td>${dados.nomeCientifico}</td>
                <td>${dados.preco}</td>
                <td>${dados.producao}</td>
                <td>${dados.descricao}</td>
                <td>${idadeMeses} meses</td>
            </tr>
        `;
        // Cria o "<tr> e o <td>" na estrutura do HTML, para ele ser inserido da forma correta

        tabelaDIV.insertAdjacentHTML("beforeend", tabela);
        // aqui vai ser usado o "insertAdjacentHTML" para colocar os caroseu no HTML, atraves do ID da div
    }
}

function handleSubmit(event) {
    // Função para o submit do formulário.

    event.preventDefault();
    // Impede o comportamento padrão do submit (recarregar a página),

    let cardapioForm = document.getElementById('ItemCadastrarForm');
    // Vai busca o elemento no "document.getElementById("ItemCadastrarForm");

    let cardapioFormData = new FormData(cardapioForm);
    // Aqui vai ser cria um objeto FormData com todos os campos do formulário (name/valor)

    let itemCardapio = Object.fromEntries(cardapioFormData);
    // Vai converte o FormData (iterável de pares [nome, valor]) em um objeto JS
    

    itemCardapio.id = Date.now();
    // Gera um ID numérico 

    itensCardastrados.push(itemCardapio);
    // Adiciona o novo item no array

    localStorage.setItem('itensCardastrados', JSON.stringify(itensCardastrados));
    // Salva o array assim atualizado no localStorage, usa o "JSON.stringify" para converte os valores em string

    criarTabela();
    // chama a função para incluir a nova linha na tabela

    cardapioForm.reset();
    // Limpa os valores do formulário 

    Toastify({
        text: "Item cadastrado com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#198754",
        stopOnFocus: true,
    }).showToast();
    // Exibe um toast com a biblioteca Toastify
    // indicando que o dado foi cadastrado

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
    // Usa a API do Bootstrap para obter a instância do modal que tem o "id='exampleModal'"

    modal.hide();
    // Fecha o modal após o cadastro
}

let itemCadastrarForm = document.getElementById("ItemCadastrarForm");
// Busca o formulário

itemCadastrarForm.onsubmit = handleSubmit;
// Aqui vai ser define a função "handleSubmit" como um tratador de evento do submit
