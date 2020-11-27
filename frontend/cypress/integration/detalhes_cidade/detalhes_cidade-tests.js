import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário selecionou uma cidade na tela Dashboard', ()=> {
	cy.visit('dashboard');
});

When('carrega a tela ClimaCidade', ()=> {
	cy.visit('climacidade/3451190');
});

Then('é exibido nome e informações detalhadas da cidade selecionada', ()=> {
	cy.contains('Rio de Janeiro');
	cy.contains('Velocidade do vento');
	cy.contains('Temperatura');
	cy.contains('Umidade');
});


Given('que a tela ClimaCidade é exibida', ()=> {
	cy.visit('climacidade/3451190');
});

When('o usuário clica no botão de Notas da cidade', ()=> {
	cy.get('#cityNotesButton').click();
});

Then('a tela NotasCidade é exibida', ()=> {
	cy.visit('/notascidade/3451190');
	cy.contains('Notas');
});
