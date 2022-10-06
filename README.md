# Painel administrativo banco digital

- Protótipo desenvolvido no FIGMA;
- Painel desenvolvido em React, Next e Typescript. Hospedado na Vercel.

**Figma**: https://www.figma.com/file/j3C2dNoNzZeiqCm3a6D5SW/Painel-Banco-Digital

**Link:** https://bank-panel.vercel.app \*

**\*:** Para encontrar dados na tabela da página de clientes, rode o Json Server conforme descrito abaixo

## Preview

![Preview](https://i.imgur.com/4YiftOq.jpg "Preview")

## Como rodar

- Clone o repositório
- Instale as dependências com yarn ou npm

##### Sem banco de dados

- Rode _yarn dev_ ou _npm run dev_
- Acesse http://localhost:3000 para ver o projeto

##### Com banco de dados

Será necessário a instalação do [json-server](https://www.npmjs.com/package/json-server "json-server")

- Rode _npm install -g json-server_ ou _yarn add json-server -g_ na sua máquina
- No projeto, vá até a pasta **src/json** e rode o comando _json-server --watch clients.json_
- Rode _yarn jsondev_ ou _npm run jsondev_
- Acesse http://localhost:3000 para ver a api
- Acesse http://localhost:3002 para ver o projeto
