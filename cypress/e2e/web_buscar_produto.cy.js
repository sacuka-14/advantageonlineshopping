describe('Realizar a busca de um produto no Advantage Online Shopping', () => {
  it('Deve buscar e exibir produtos relacionados ao termo "hp"', () => {
    
    cy.visit('https://advantageonlineshopping.com/#/');

    cy.get('#menuSearch').click({force: true});  // Clicar no botão de pesquisa

    cy.get('#autoComplete').type('HP{enter}', {force: true});  // Inserir produto e pressionar Enter
    
    cy.contains('HP').should('be.visible'); 

    cy.get('.imgProduct').first().click();  // Adicionar ao carrinho

    cy.get('button[name="save_to_cart"]').click();

    cy.get('#shoppingCartLink').click(); // Clicar no botão de ir a tela do carrinho

    cy.get('.cart').should('contain', '1');  // Verificar se o carrinho contém 1 item

    cy.contains('HP').should('be.visible');  // Verificar se o carrinho contém o item co nome HP

    cy.get('#checkOutPopUp').click(); // Clicar no botão de ir a tela de pagamento

    cy.contains('HP').should('be.visible');  // Verificar se a tela de pagamento tem o nome HP
  });
});

