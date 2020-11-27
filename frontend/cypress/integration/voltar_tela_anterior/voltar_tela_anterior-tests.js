Given('que o usuário está visualizando um das telas', () => {
	cy.visit('');
	cy.visit('dashboard');
});



When('o usuário clica no ícone de voltar', () => {
	cy.xpath('//*[@id="goBackButton"]')
	.click();
});

Then('retorna a tela que estava visualizando anteriormente', () => {
	cy.xpath('//*[@id="root"]/div/h1')
	.should('have.text', 'Protótipo - v1');
});