import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na tela Home', () => {
	cy.visit('');
    
});

// 

When('clica no botão Entrar como convidado', () => {
	cy.xpath('//*[@id="root"]/div/ul/li[6]/a')
	.click();
});

Then('a tela Dashboard é carregada', () => {
	cy.xpath('//*[@id="root"]/div/div/h1')
	.should('have.text', 'dashboard');
});

// 

When('clica no botão Nova Conta', () => {
	cy.xpath('//*[@id="root"]/div/ul/li[2]/a')
	.click();
});

Then('a tela CriarNovaConta é carregada', () => {
	cy.xpath('//*[@id="root"]/h1')
	.should('have.text', 'Signup');
});

// 

When('clica no botão Entrar', () => {
    cy.xpath('//*[@id="root"]/div/ul/li[4]/a')
    .click();
});

Then('a tela Entrar é carregada', () => {
    cy.xpath('//*[@id="root"]/h1')
    .should('have.text', 'Login');
});