describe('Atualizar Imagem do Produto', () => {
    let authToken = 'YOUR_AUTH_TOKEN'; // Substitua pelo token de autenticação real
  
    // Etapa 1: Fazer o Login e Obter o Token (se necessário)
    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: {
          email: '1string3@example.com', // Substitua com dados reais
          loginPassword: 'Password123',
          loginUser: '1string3'
        },
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(200);
        authToken = response.body.statusMessage.token; // Ajuste conforme necessário para obter o token
        expect(authToken).to.not.be.null;
      });
    });
  
    // Etapa 2: Atualizar a Imagem do Produto
    it('Deve atualizar a imagem do produto com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/386449835/1/BLACK?product_id=15',
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data'
        },
        formData: {
          file: {
            filePath: 'https://i.postimg.cc/x8TrrdCV/topper.jpg',
            mimeType: 'image/jpeg'
          }
        },
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(200);
        // Verifique se a resposta contém a confirmação de atualização da imagem, se aplicável
        expect(response.body).to.have.property('success').and.to.be.true;
      });
    });
  });
  