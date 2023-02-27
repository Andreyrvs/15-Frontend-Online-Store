# Online Store

## Contexto

Este projeto trata-se de uma loja online sem persistência no banco de dados. Consome a API do mercado livre para buscar os produtos por catigorias e termos

Colegas que contribuiram com o projeto:
@andregraczyk
@matheus-a-f
@eliaspaiva

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

## Preview da Aplicação

| ![Login](./aplicacao) | ![Home](./aplicacao-home.png) |
| ----------- | ----------- |

## Instalando Dependências

clone o repositório:

```bash
git clone git@github.com:Andreyrvs/frontend-online-store.git
```

> Front-end

```bash
cd frontend-online-store/
npm install
```

## Executando aplicação

* Para rodar o Front-end:

  ```bash
    npm start
  ```
