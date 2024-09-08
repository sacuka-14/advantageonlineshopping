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

## Configuração

1. **Configuração dos Testes**

   Atualize as seguintes informações nos arquivos de teste conforme necessário:

   - **`cypress/pages/loginPage.js`**: Insira o nome de usuário e senha corretos para o login.
   - **`cypress/pages/productPage.js`**:
     - Atualize `userId`, `source`, e `color` com os valores apropriados.
     - Atualize `imageFilePath` com o caminho correto para a imagem que será utilizada no teste.

2. **Configuração do Cypress**

   Não há configurações adicionais necessárias além das dependências instaladas. O Cypress é configurado para funcionar com a estrutura padrão.

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
- **`cypress/integration/`**: Contém os arquivos de teste. 
  - **`product_search.spec.js`**: Testes para a busca de produtos.
  - **`product_update.spec.js`**: Testes para a atualização de imagens de produtos.
- **`cypress/pages/`**: Contém os arquivos de Page Object para organizar o código de interação com a interface.
  - **`loginPage.js`**: Page Object para a página de login.
  - **`productPage.js`**: Page Object para as páginas de produtos.
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