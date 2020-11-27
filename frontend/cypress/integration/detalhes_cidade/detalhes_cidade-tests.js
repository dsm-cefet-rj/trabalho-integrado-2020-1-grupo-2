import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let current_city_name;

Given('que o usuário selecionou uma cidade na tela Dashboard', ()=> {
	cy.visit('dashboard');
});

When('carrega a tela ClimaCidade', ()=> {
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.then(($city_name) => {
		// store the button's text
		//console.log($btn.text());
		current_city_name = $city_name.text();
	});

	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
});

Then('é exibido nome e informações detalhadas da cidade selecionada', ()=> {
	cy.contains(current_city_name);
	cy.contains('Velocidade do vento');
	cy.contains('Temperatura');
	cy.contains('Umidade');
});


Given('que a tela ClimaCidade é exibida', ()=> {
	return true;
});

When('o usuário clica no botão de Notas da cidade', ()=> {
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();
});

Then('a tela NotasCidade é exibida', ()=> {
	cy.xpath('//*[@id="root"]/div/div[1]/h1')
	.should('have.text','Notas');
});
