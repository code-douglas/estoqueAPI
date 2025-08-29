# API para gerenciamento de estoque.

Esta é uma API RESTful completa para gerenciamento de estoque, desenvolvida com Node.js, Express, Mongoose, e com autenticação de usuário via Firebase. O objetivo do projeto é fornecer endpoints robustos para controlar o ciclo de vida de produtos e transações, 
garantindo segurança através da autenticação por token.

## Funcionalidades

* Autenticação: Proteção de rotas sensíveis com tokens de autenticação.
* Produtos:
  * `GET /produtos`: Lista todos os produtos no estoque.
  * `GET /produtos/:id`: Busca um produto específico por ID.
  * `POST /produtos/registrar`: Cria um novo produto (requer autenticação).
  * `PUT /produtos/atualizar/:id`: Atualiza os dados de um produto (requer autenticação).
  * `DELETE /produtos/excluir/:id`: Exclui um produto (requer autenticação).

* Transações:
  * `POST /transacoes/registrar`: Registra uma nova transação de entrada/saída de produto (requer autenticação).

## Estrutura do Projeto

A estrutura do projeto segue um padrão MVC (Model-View-Controller) simplificado para manter a organização e a separação de responsabilidades.

```bash

src/
├── config/             # Configurações do banco de dados (db.mjs)
├── controllers/        # Lógica de negócio da aplicação
│   ├── productController.mjs
│   └── transactionsController.mjs
├── middlewares/        # Funções intermediárias, como autenticação
│   └── authMiddleware.mjs
├── models/             # Modelos de dados do Mongoose
│   ├── Product.mjs
│   └── Transaction.mjs
├── routes/             # Definição das rotas da API
│   ├── productsRoutes.mjs
│   └── transactionsRoutes.mjs
├── app.mjs             # Configuração principal do Express
└── server.mjs          # Servidor principal, inicia a aplicação
```
## Tecnologias Utilizadas: 

* Node.js: Ambiente de execução JavaScript.
* Express: Framework web para Node.js.
* Mongoose: Modelagem de objetos MongoDB para Node.js.
* Firebase: Utilizado para autenticação segura.

## Como Rodar o Projeto

1. Clone o repositório: 
```bash
git clone git@github.com:code-douglas/estoqueAPI.git
cd estoqueAPI
```
2. Instale as dependências: 
```bash
npm install
```
3. Configure as variáveis de ambiente:
* Crie um arquivo .env na raiz do projeto e adicione as suas chaves de configuração, incluindo as credenciais do Firebase.
4. Inicie o servidor:
```bash
node start
```
- A API estará rodando em http://localhost:3000 (ou na porta configurada).