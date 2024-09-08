# Projeto de Testes Cypress para Advantage Online Shopping

Este projeto contém testes automatizados utilizando Cypress para a API do Advantage Online Shopping. O objetivo é testar a busca de produtos e a atualização de imagens de produtos.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. **Clone o repositório**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências**

   Execute o comando abaixo para instalar todas as dependências do projeto:

   ```bash
   npm install
   ```
## Execução dos Testes

1. **Executar os Testes no Modo Headless**

   Para executar todos os testes em modo headless (sem interface gráfica), utilize o comando:

   ```bash
   npx cypress run
   ```

2. **Executar os Testes no Modo Interativo**

   Para executar os testes com a interface gráfica do Cypress, use:

   ```bash
   npx cypress open
   ```

   Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes individualmente.

## Estrutura do Projeto

- **`cypress/fixtures/`**: Contém arquivos de fixture (dados estáticos para testes, se necessário).
- **`cypress/e2e/`**: Contém os arquivos de teste. 
  - **`api_atualizar_imagem_produto.cy.js`**: Testes para a atualização de imagens de produtos.
  - **`api_buscar_produto.cy.js`**: Testes para a busca de produtos na API.
    **`web_buscar_produto.cy.js`**: Testes para Testes para a busca de produtos.
- **`cypress/fixtures/`**:
  - **`test01.json`**: Contem a descrição dos testes em BDD.
- **`cypress/support/`**: Contém comandos personalizados e configurações do Cypress.

## Contribuição

Se desejar contribuir com melhorias ou correções para este projeto, sinta-se à vontade para criar um Pull Request ou abrir uma issue.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


```

### Notas:
- Substitua `<URL_DO_REPOSITORIO>` e `<NOME_DO_REPOSITORIO>` pelos valores corretos.
- Atualize o contato e informações de licença conforme aplicável.

Se precisar de mais alguma ajuda com a configuração ou execução dos testes, é só avisar!