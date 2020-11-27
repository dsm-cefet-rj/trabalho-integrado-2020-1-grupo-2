let current_note_name = "WAAAHH";

/*Editar nota existente*/
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given('que o usuário está logado', ()=> {
	cy.visit('dashboard');

	
});

And('que temos as notas abaixo cadastradas', ()=>{
	return true;
});

Given('que a tela NotasCidade é exibida', () => {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();

	cy.xpath('//*[@id="cityNotesButton"]')
	.click();
});

And('há pelo menos uma nota cadastrada exibida na listagem de notas', () => {
	cy.xpath('//*[@id="goToNote0"]')
});

When('o usuário seleciona uma nota', () => {
	cy.xpath('//*[@id="goToNote0"]')
	.then(($note_text) => {
		// store the button's text
		//console.log($btn.text());
		current_note_name = $note_text.text();
	});


	cy.xpath('//*[@id="goToNote0"]')
	.click();
});

Then('carrega a tela NotaCidade', () => {
	cy.xpath('//*[@id="root"]/div/div[1]/h1')
	//console.log(current_note_name);
});

And('os dados da nota selecionada são exibidos na tela NotaCidade', () => {
	cy.xpath('//*[@id="root"]/div/div[1]/h1')
	.should('have.text', current_note_name);
});


/*Usuário logado tenta criar nova nota*/
When('clica no botão Criar Nova Nota', () => {
	cy.xpath('//*[@id="createCityNoteButton"]')
	.click();
});

Then('carrega a tela NotaCidade', () => {
	cy.xpath('//*[@id="root"]/div/div[1]/h1')
	.should('have.text','Criar Nota')
});

//NÃO IMPLEMENTADO
And('uma nota é criada', () => {

});


//NÃO IMPLEMENTADO
/*Usuário convidado acessa página de Notas*/
Given('que o usuário está usando uma conta convidada, ou seja, não está logado', ()=> {

});
When('clica a tela NotasCidade é exibida', ()=> {

});
Then('o botão Criar nova nota não é exibido', ()=> {

});