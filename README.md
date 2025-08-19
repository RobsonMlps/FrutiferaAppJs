# CafeteriaAPP

Aplicação web simples para apresentação de produtos de uma cafeteria, utilizando Bootstrap para o layout responsivo e JavaScript para renderização dinâmica dos cartões e gerenciamento do cardápio.

## Funcionalidades

- Carrossel de imagens na página inicial.
- Exibição dinâmica de produtos (cafés, bolos, etc.) em cartões.
- Cadastro, listagem e busca de itens do cardápio.
- Layout responsivo com Bootstrap.
- Notificações de ações usando Toastify-js.

## Estrutura do Projeto

```
cafeteriaApp/
│
├── assets/
│   └── imagem/
│       └── (imagens dos produtos e do carrossel)
├── src/
│   ├── index.js      # Código JavaScript para renderizar os cartões
│   ├── cardapio.js   # Código JavaScript para o cardápio (cadastro/listagem)
│   └── index.css     # Estilos customizados
├── index.html        # Página principal
├── cardapio.html     # Página de cadastro e listagem do cardápio
├── package.json      # Dependências (Bootstrap, Toastify-js)
└── README.md         # Este arquivo
```

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Abra o arquivo `index.html` ou `cardapio.html` em seu navegador.

## Dependências

- [Bootstrap 5](https://getbootstrap.com/)
- [Toastify-js](https://apvarun.github.io/toastify-js/)

## Créditos

Desenvolvido por RobsonMlps.

Licença
