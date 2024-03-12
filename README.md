<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/william-ribeiro/ignite-nodejs-module-1?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/william-ribeiro/ignite-nodejs-module-1">
  <a href="https://github.com/william-ribeiro/ignite-nodejs-module-1/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/william-ribeiro/ignite-nodejs-module-1">
  </a>    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"> 
    </a>
  <a href="https://www.rocketseat.com.br/">
    <img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-%237159c1?style=flat&logo=ghost">
    </a>    
  <a href="https://github.com/william-ribeiro/ignite-nodejs-module-1/stargazers">
  <a href="https://www.codefactor.io/repository/github/william-ribeiro/ignite-nodejs-module-1"><img src="https://www.codefactor.io/repository/github/william-ribeiro/ignite-nodejs-module-1/badge" alt="CodeFactor" /></a>
    <img alt="Stargazers" src="https://img.shields.io/github/stars/william-ribeiro/ignite-nodejs-module-1?style=social">
  </a>
    
  <div align="center" style="margin-bottom: 20px;">
<img src="https://hubsystems.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/07/15215150/63c83ebeef5ea2f341f3dd4c_OG-perpetuo.jpg" alt="" width="700" height="250"/>
</div>

</p>

<h4 align="center"> 
	🚧  Formação NodeJS - Modulo 1 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-desafio">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> • 
 <a href="#-regras-de-negocio">Regras de negócio</a> • 
 <a href="#-extras">Extras</a> •  
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o desafio

🚀 Nesse desafio foi necessário desenvolver uma API para realizar o CRUD de _tasks_ (tarefas) - [Link](https://efficient-sloth-d85.notion.site/Desafio-01-2d48608f47644519a408b438b52d913f/) .

---

## ⚙️ Funcionalidades

A API deve conter as seguintes funcionalidades:

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa
- E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

---

## 🚧 Regras de negocio

Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

Rotas:

- `POST - /tasks`
  Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
  Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
- `GET - /tasks`
  Deve ser possível listar todas as tasks salvas no banco de dados.
  Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
- `PUT - /tasks/:id`
  Deve ser possível atualizar uma task pelo `id`.
  No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
  Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
  Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- `DELETE - /tasks/:id`
  Deve ser possível remover uma task pelo `id`.
  Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- `PATCH - /tasks/:id/complete`

---

## 🚀 Como executar o projeto

Clone este repositório:

```console
git clone git@github.com:william-ribeiro/ignite-nodejs-module-1.git
```

Acesse a pasta do projeto no terminal/cmd:

```console
cd ignite-nodejs-module-1
```

Instale as dependencias do projeto com npm

```console
npm install
```

Se preferir usar yarn ou pnpm

```console
yarn install | pnpm install
```

#### Acesse o endpoint para testar a API

http://localhost:4000/

<p align="center">
  <a href="https://github.com/william-ribeiro/ignite-nodejs-module-1/blob/main/colletion_insomnia.yaml" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 🛠 Extras

### E a importação do CSV?

Normalmente em uma API, a importação de um CSV acontece enviando o arquivo pela rota, por meio de outro formato, chamado `multipart/form-data`.

Como ainda não vimos isso em aula, a importação será feita de outra forma. Acesse a página abaixo para a explicação:

[Criação via CSV com Stream](https://www.notion.so/Cria-o-via-CSV-com-Stream-21ba6d279991473792787d9265212181?pvs=21)

## Indo além

Algumas sugestões do que pode ser implementado:

- Validar se as propriedades `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição.
- Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.

---

## 🦸 Autor

<a href="https://github.com/william-ribeiro/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60985185?s=460&u=389f6878e2b972d3f66348a698c7ecfbbb245582&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>William Ribeiro</b></sub></a>
 <sub><a href="https://linktr.ee/william_ribeiro/" title="portifolio">🚀 <b>Portifólio</b></a></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-William-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/william-ribeiro-0b5ab911a/)](https://www.linkedin.com/in/william-ribeiro-0b5ab911a/)
[![WhatsApp Badge](https://img.shields.io/badge/-Entrar%20em%20Contato-c14438?style=flat-square&color=075e54&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=5553991274353)](https://api.whatsapp.com/send?phone=5553991274353)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---
