bericvinicius81
andregraczyk
matheus-a-f
eliaspaiva

# Online Store

## Contexto

Este projeto trata-se de uma loja online sem persistência no banco de dados. Consome a API do mercado livre para buscar os produtos por catigorias e termos

* Enpoints Utilizados da API Mercado livre:

  > Categorias:
  [categories](https://api.mercadolibre.com/sites/MLB/categories) </br>
  > buscar itens de uma categoria por termo:
  [category id](https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY) </br>
  > buscar detalhes de um item especifico:
  [product id](https://api.mercadolibre.com/items/$PRODUCT_ID) </br>
  
## Técnologias usadas

Front-end:
> Desenvolvido usando: React, React Router, CSS3, ES6

## Instalando Dependências

clone o repositório:

```bash
git clone git@github.com:Andreyrvs/frontend-online-store.git
```

> Frontend

```bash
cd frontend-online-store/
npm install
```

## Executando aplicação

* Para rodar o front-end:

  ```bash
    npm start
  ```

## Executando Testes

* Para rodar todos os testes de linter:

  ```bash
    npm run lint
  ```

  ```bash
    npm run lint:styles
  ```
