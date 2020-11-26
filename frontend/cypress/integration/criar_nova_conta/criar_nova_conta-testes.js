import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('que o usuario está na Tela Home', () => {
    cy.visit('');
    
});

When('clica em Criar Conta', () => {
	cy.get('#loginButton').click()
}
);

Then('é redirecionado para pagina Criar Conta', () => 
	    cy.visit('/signup')
);




Given('que o usuário inseriu todos os dados corretamente', () => {
    //Nome,Email,Senha, Confirmar Senha corretos
    //Ids username, email, password, checkPasswords
});

When('ele clica no botão Criar Conta', () => {
	cy.get('#createNewAccButton').click()
}
);

Then('sua conta é criada e cadastrada no sistema', () => {
	 //Cria conta e redireciona
	 
	}
);

And('a tela CriarNovaContaSucesso é exibida', ()=> {
		cy.visit('/signupsucess');
	}
);

Given('que o usuário inseriu um ou mais dados inválidos', () => {
    //Nome,Email,Senha, Confirmar Senha errados

    //Ids username, email, password, checkPasswords
    
});

When('ele clica em Criar Conta', () => {
		cy.get('#createNewAccButton').click();
}
);

Then('recebe uma mensagem informando que a conta não foi criada com sucesso', () => {
	cy.get('#alert_msg').contains('Conta não foi Criada!')
}

);

Given('que o usuário inseriu E-mail pertencentes a um usuário já cadastrado no sistema', () => {
    //Email já existente

    //email
    
});

When('ele clica em Criar Conta', () => {
	cy.get('#createNewAccButton').click();

}
);

Then('recebe mensagem de Usuário já cadastrado', () => {
	cy.get('#alert_msg').contains('Usuário já cadastrado!')

}

);

