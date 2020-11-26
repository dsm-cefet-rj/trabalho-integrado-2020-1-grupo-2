Given('que o usuário está na tela Home', () => {
    cy.visit('baseUrl');
    
});

// 

When('clica no botão Entrar como convidado', () => {
    cy.visit('baseUrl');
});

Then('a tela Dashboard é carregada', () => {
    cy.visit('baseUrl');
});

// 

When('clica no botão Nova Conta', () => {
    cy.visit('baseUrl');
});

Then('a tela CriarNovaConta é carregada', () => {
    cy.visit('baseUrl');
});

// 

When('clica no botão Entrar', () => {
    cy.visit('baseUrl');
});

Then('a tela Entrar é carregada', () => {
    cy.visit('baseUrl');
});