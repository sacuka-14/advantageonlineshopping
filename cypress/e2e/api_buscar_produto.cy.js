describe('Registro de Usuário, Login e Busca de Produto', () => {
  let authToken;

  const loginData = {
    email: 'string121@example.com',
    loginPassword: 'Password123',
    loginUser: 'string121'
  };

    // Dados de teste
    const userData = {
      accountType: 'USER',
      address: '123 Test St',
      allowOffersPromotion: true,
      aobUser: true,
      cityName: 'Test City',
      country: 'AUSTRALIA_AU',
      email: 'string121@example.com',
      firstName: 'John',
      lastName: 'Doe',
      loginName: 'string121',
      password: 'Password123',
      phoneNumber: '1234567890',
      stateProvince: 'Test State',
      zipcode: '12345'
    };

  // Etapa 2: Fazer o Login
  it('Deve fazer login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: loginData,
      failOnStatusCode: false
    }).then(response => {

      if (response.status === 200) {
        authToken = response.body.token;
        expect(authToken).to.not.be.null;

      } else { // Caso o login falhe, realiza o registro
        cy.request({
          method: 'POST',
          url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
          body: userData,
          failOnStatusCode: false
        }).then(registerResponse => {
          expect(registerResponse.status).to.eq(200);
        });
      }

    });
  });

  // Etapa 3: Buscar um Produto
  it('Deve procurar por um produto com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
      headers: {
        'Authorization': `Bearer ${authToken}` // Use o token de autenticação, se necessário
      },
      qs: {
        name: 'laptop',
        quantityPerEachCategory: 2
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).that.is.an('array').and.is.not.empty;
      response.body.forEach(product => {
        expect(product.categoryImageId).to.include('laptop');
      });
    });
  });
});
