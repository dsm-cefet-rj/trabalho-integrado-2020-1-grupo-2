import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/*Buscar uma cidade válida e existente no sistema*/
Given('que o usuário está na tela AdicionarCidade', () => {
	cy.visit('adicionarcidade');
    
});
And('inseriu o nome de uma cidade válido', () => {
	cy.xpath('//*[@id="addCityInput"]')
	.clear()
	.type('Espírito Santo')
});
When('ele clica no ícone de buscar', () => {
	cy.xpath('//*[@id="searchCityButton"]')
	.click();
});
Then('resultados correspondentes serão exibidos', () => {
	cy.xpath('//*[@id="addCityButton0"]')
	.should('have.text', 'Espírito Santo');
});



/*Buscar uma cidade válida e não existente no sistema*/
And('nenhuma cidade correspondente consta no sistema', () => {
	cy.xpath('//*[@id="addCityInput"]')
	.clear()
	.type('LasanhaMuitoBom');
});
Then('nenhuma cidade será exibida no resultado da busca', () => {
	cy.xpath('//*[@id="root"]/div/div[2]/div')
	.should('have.text', 'sem resultados');
});



/*Buscar uma cidade inválida*/
And('inseriu o nome de uma cidade inválido', () => {
	cy.xpath('//*[@id="addCityInput"]')
	.clear()
	.type('5464#$ˆ%&#&%ˆ&:');
});
Then('usuário será notificado que inseriu uma busca inválida', () => {
	cy.xpath('//*[@id="alerta"]')
});



/*Usuário adiciona um resultado de busca ao Dashboard*/
And('realizou uma busca que retornou um ou mais resultados válidos,', () => {
	cy.xpath('//*[@id="addCityInput"]')
	.clear()
	.type('Espírito Santo')

	cy.xpath('//*[@id="searchCityButton"]')
	.click();
});
When('o usuário clica em um dos resultados,', () => {
	cy.xpath('//*[@id="addCityButton0"]')
	.click();
});
Then('a cidade daquele resultado é adicionada ao dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.should('have.text', 'Espírito Santo');
});
And('a tela Dashboard é exibida', () => {
	cy.xpath('//*[@id="root"]/div/div/h1')
	.should('have.text', 'dashboard');
});
