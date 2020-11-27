import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";



/* -------------------------------------- */


/*Exibir listagem de cidades*/
Given('que o usuário está logado', () => {
	cy.visit('dashboard');
});

When('a tela de Dashboard é acessada', () => {
	cy.xpath('//*[@id="root"]/div/div/h1')
	.should('have.text', 'dashboard');
});

Then('as cidades salvas pelo usuário são exibidas na listagem do Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a');
});

And('um resumo climático de cada cidade é exibido', () => {
	cy.wait(3000);
	cy.xpath('//*[@id="cityInfo0"]/div[2]/div/div[1]/p')
	.contains('Velocidade do vento');
	cy.xpath('//*[@id="cityInfo2"]/div[2]/div/div[2]/p')
	.contains('Temperatura');
	cy.xpath('//*[@id="cityInfo1"]/div[2]/div/div[3]/p')
	.contains('Umidade');
});



/* -------------------------------------- */


/*Receber alerta meterológico de uma cidade*/
Given('que é exibida a tela de Dashboard', () => {
	cy.visit('dashboard');
});

And('há pelo menos uma cidade exibida na tela de Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a');
});

When('uma das cidades listada no Dashboard recebe um alerta meterológico', () => {
	cy.xpath('//*[@id="alerta"]')
});

Then('o usuário recebe um alerta com as informações recebidas', () => {
	cy.xpath('//*[@id="alerta"]')
});



/* -------------------------------------- */


/*Selecionar uma cidade listada no Dashboard*/
Given('que é exibida a tela de Dashboard', () => {
	cy.visit('dashboard');
});

And('há pelo menos uma cidade exibida na tela de Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a');
});

When('o usuário clica numa das cidades listadas no Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
});

Then('a tela ClimaCidade é exibida', () => {
	cy.xpath('//*[@id="root"]/div/div[1]/h1');
});

And('as informações correspondentes da cidade selecionada são exibidas na tela ClimaCidade', () => {
	cy.xpath('//*[@id="root"]/div/div[2]');
});



/* -------------------------------------- */


/*Deletar uma cidade do Dashboard*/
Given('que é exibida a tela de Dashboard', () => {
	cy.visit('dashboard');
});

And('há pelo menos uma cidade exibida na tela de Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a');
});

When('o usuário clica no ícone de deletar cidade', () => {
	cy.xpath('//*[@id="deleteCityButton10"]')
	.click();
});

Then('a cidade removida não é mais exibida na tela de Dashboard', () => {
	cy.xpath('//*[@id="deleteCityButton10"]')
	.should('not.exist');
});




/* -------------------------------------- */


/*Abrir busca de cidades*/
Given('que é exibida a tela Dashboard', () => {
	cy.visit('dashboard');
});

When('o usuário clica no botão "Adicionar cidade"', () => {
	cy.xpath('//*[@id="goToaddCityButton"]')
	.click();
});

Then('a tela AdicionarCidade é exibida', () => {
	cy.xpath('//*[@id="root"]/div/div[1]/h1')
});



/* -------------------------------------- */


/*Tentar deletar todas as cidades confirmando a exclusão*/
Given('que é exibida a tela de Dashboard', () => {
	cy.visit('dashboard');
});

And('há pelo menos uma cidade exibida na tela de Dashboard', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a');
});

When('o usuário clica no botão "Deletar todas as cidades"', () => {

});

And('confirmar a exclusão', () => {

});

Then('nenhuma cidade é exibida na tela de Dashboard', () => {

});



/* -------------------------------------- */


/*Tentar deletar todas as cidades cancelando a exclusão*/
//NÃO IMPLEMENTADO
Given('que é exibida a tela de Dashboard', () => {

});

And('há pelo menos uma cidade exibida na tela de Dashboard', () => {

});

When('o usuário clica no botão "Deletar todas as cidades"', () => {

});

And('cancelo a exclusão', () => {

});

Then('todas as cidades exibidas antes das ações de exclusão devem permanecer exibidas na tela de Dashboard', () => {

});



/* -------------------------------------- */


/*Salvar cidades numa conta logada*/
//NÃO IMPLEMENTADO
Given('que o usuário está logado', () => {

});

And('que é exibida a tela de Dashboard', () => {

});

And('há pelo menos uma cidade salva em sua conta e exibida na tela de Dashboard', () => {

});

When('o usuário clica no botão "Salvar cidades"', () => {

});

Then('todas as cidades exibidas devem permanecer na tela de Dashboard do usuário', () => {

});

And('todas as cidades exibidas devem permanecer salvas em sua conta logada', () => {

});



/* -------------------------------------- */


/*Salvar cidades numa conta convidada*/
//NÃO IMPLEMENTADO
Given('que o usuário está usando uma conta convidada, ou seja, não está logado', () => {

});

And('que é exibida a tela de Dashboard', () => {

});

And('há pelo menos uma cidade sexibida na tela de Dashboard', () => {

});

When('o usuário clica no botão "Salvar cidades"', () => {

});

Then('um alerta de que ele precisa estar de uma conta será exibido', () => {

});



/* -------------------------------------- */


/*Botão de gerenciamento de conta*/
Given('que é exibida a tela de Dashboard', () => {
	cy.xpath('//*[@id="goToAccPageButton"]')
});

When('o usuário clica no botão "Conta"', () => {
	cy.xpath('//*[@id="goToAccPageButton"]')
	.click();
});

Then('a tela Conta é exibida', () => {
	cy.xpath('//*[@id="root"]/h1')
});
