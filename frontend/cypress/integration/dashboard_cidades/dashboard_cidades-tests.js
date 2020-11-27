import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está logado', () => {
    cy.visit('');
});

When('a tela de Dashboard é acessada', () => {
	cy.visit('/dashboard');
	cy.contains('dashboard');
}
);

Then('as cidades salvas pelo usuário são exibidas na listagem do Dashboard', () => 
{

	cy.request('GET','/dashboard').then((response)=>{
			var cidades = ["Rio de Janeiro","São Paulo","Niterói","Duque de Caxias"]
			for (var i = 0; i < cidades.length; i++) {
				
				expect(response.status).equal(200)
	            expect(response.body.name).equal(cidades[i])
	            expect(response.body).to.not.be.null
	            expect(response.body.data).to.have.length(4)
			}
            
        })
});

And('um resumo climático de cada cidade é exibido', ()=>{
	cy.contains('Velocidade do vento');
	cy.contains('Temperatura');
	cy.contains('Umidade');
});


Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{
	cy.contains('cidade');

});
When('uma das cidades listada no Dashboard recebe um alerta meterológico', () => {

}
);

Then('o usuário recebe um alerta com as informações recebidas', () => 
{
	cy.get('#alert_msg').contains('Alerta meterológico!')
});

Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{
	cy.contains('cidade');
});
When('o usuário clica numa das cidades listadas no Dashboard', () => {
	cy.get('#cityInfoN');
	cy.get('climacidade/3451190');
}
);

Then('a tela ClimaCidade é exibida', () => 
{
	cy.contains('Rio de Janeiro');
});
And('as informações correspondentes da cidade selecionada são exibidas na tela ClimaCidade', ()=>{
	cy.contains('Velocidade do vento');
	cy.contains('Temperatura');
	cy.contains('Umidade');
});

 
Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{
	cy.contains('cidade');
});
When('o usuário clica no ícone de deletar cidade', () => {
	cy.get('#deleteCityButtonN').click();
}
);

Then('a cidade removida não é mais exibida na tela de Dashboard', () => 
{

});

Given('que é exibida a tela Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});

When('o usuário clica no botão "Adicionar cidade"', () => {
	cy.get('#goToAddCityButton').click();

}
);

Then('a tela AdicionarCidade é exibida', () => 
{
	cy.visit('/adicionarcidade');
	cy.contains('Adicionar Cidade');
	cy.contains('Pesquisar');
});

Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{
	cy.contains('cidade');
});
When('o usuário clica no botão "Deletar todas as cidades"', () => {
	cy.get('#deleteAllCitiesButton').click();

}
);
And('confirmar a exclusão', ()=>{
	cy.window.confirm('Excluir todas as cidades?');

});

Then('nenhuma cidade é exibida na tela de Dashboard', () => 
{
	cy.contains('Sem cidades adicionadas')
});

Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{
		cy.contains('cidade');

});
When('o usuário clica no botão "Deletar todas as cidades"', () => {
	cy.get('#deleteAllCitiesButton').click();

}
);
And('cancelo a exclusão', ()=>{

});

Then('todas as cidades exibidas antes das ações de exclusão devem permanecer exibidas na tela de Dashboard', () => 
{

});

Given('que o usuário está logado', () => {
    
});
And('que é exibida a tela de Dashboard', ()=>{
	cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade salva em sua conta e exibida na tela de Dashboard', ()=>{

});
When('o usuário clica no botão "Salvar cidades"', () => {

}
);

Then('todas as cidades exibidas devem permanecer na tela de Dashboard do usuário', () => 
{

});

And('todas as cidades exibidas devem permanecer salvas em sua conta logada', ()=>{

});


Given('que o usuário está usando uma conta convidada, ou seja, não está logado', () => {
    
});
And('que é exibida a tela de Dashboard', ()=>{
	cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('há pelo menos uma cidade exibida na tela de Dashboard', ()=>{

});
When('o usuário clica no botão "Salvar cidades"', () => {

}
);

Then('um alerta de que ele precisa estar de uma conta será exibido', () => 
{

});
Given('que é exibida a tela de Dashboard', () => {
    cy.visit('/dashboard');
    cy.contains('dashboard');
});
And('', ()=>{

});
When('o usuário clica no botão "Conta"', () => {

}
);

Then('a tela Conta é exibida', () => 
{

});