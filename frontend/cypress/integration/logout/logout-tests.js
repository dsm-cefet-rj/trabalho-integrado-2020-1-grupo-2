import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

   
Given('que o usuário logado está em uma das telas', () => {
    
});

When('o usuário clica no ícone de logout', () => {
	cy.get('#logoutButton').click();

}
);

Then('ele é desconectado da conta', () => {
	cy.visit('');
}

);