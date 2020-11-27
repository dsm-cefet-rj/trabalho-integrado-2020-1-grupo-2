import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let current_note_name;
let new_note_name = "New Name";

let new_input_text  = "Hello World!! This is a new note! Hello World!! This is a new note! Hello World!! This is a new note! Hello World!! This is a new note!";
let new_input_visit = 8974;

let current_input_text  = "Hello World!! This is a current note! Hello World!! This is a current note! Hello World!! This is a current note! Hello World!! This is a current note!";
let current_input_visit = 321231;

let invalid_data = "gpk@(p5HXQctXO0<DEE6mbYhv%kqy48EagY@TX1ke5If*X4v9;Zv287WCZwuigK3;DB)X<aMDˆya?DHq0?h(p:qUYBdn%ˆ(ggYIpj@lXJa>6W5OeyazGˆi%$1&gˆQy4*>4Ijtˆecd3fzvx*%>CxˆXs9xayUC&IhyAe&(Ei@YTzmpUkKv%166(LFf8<M;1*%LfV$lL&8Pm3;hMBj8kRn&cedoin3:1iJ3c(v%1%1>whg&vbo3n2Gz&lNO>JL03D>QhcxxgrJFR&Y;9z1ˆO9NxFtˆ>&a*Q6oa4C?(xeQ)32Yq1;(P&pz4nmˆ3;(y<1gx6j;:uAD*83f;*)qL6Ut&Xq@rM?Y&LkaBlDqI%EmSU(pfkkN6VY($r%Aqˆˆ;@UB:GOR&oOi>6g<u>yvkqyAO(b>m%PN(Lz4NrW19b14ˆXkaCPYN4&xd<AwqtAj1)UVRGS*su8kBTwCxL63KˆfTwb%Cqˆ)rˆLB%JtBnhmJ4wQAzzc@%M7pO7;A1Kr(UIwˆj4Zsq(9z4(WKz)&H2b&(IV9BDSJZz<K7BgjRB?D;%meQ?;0fT:VFy%pLDIz(()E15AIcˆ<S0nˆ@<(Nk&&6q&CHZhM:%m0PU@By9h>j<Pk7Z$Pjz*dUW$eˆp8ˆmF&UM@diKzaMI5NUabMbGd4UnBLif76jˆKmsm%b3P>VXe(NvX(z?a%d@4:<q5q3xXJYhI80C79;2cD@4ri(yq<<AoRTaa%UGLh0D&Q8LWdGkdiO@rOnb*G(Ky;<K6HunNYI6(h)Fv&vS$pRR%mAL63AEAZ2jml3$%A&i&Iss)>C2K;PAFBJoJ*wXn:XFEˆenp;kp;RCB&ˆˆdJ1Mˆ(i:P7Wq*j$azSyr1YnrGG4cMˆxzrwocql4b3nr6To)bp@0e(bZWQaˆ5xQZ6)ugˆ3ethtOe(tyT)yZDHxvC*E$%%K&y$k73L(9yawO2(J%DgwGx*lqtUo5:e4PkM*ClwcqrnW25uhE(Mu*WebrhW34n*>;O*C?fwq@%jQsYvc1JT$%;A>BIac%cAYu*&u7)uZ<D<x0Y0?1MzAx(b8yOc@P8>ˆyf5Dˆkp(hUgPoAX<@YkzeRz(KnHuu%W&&n8O3GI)V%qJ6um4dKFy5pZWPk1@p20I@8NoH:8i(Y;aq)FpLsa3Bjt@9?@?Y<hFJm?Fu&(dJcC>(&q&CAR(DYO%E5b6a6Oca@ˆoKRrUgW4v2tnu*Fjs5cFdAO570Vp%rk<%(wMbD>sNQ%ˆ*v>8(NdS7?k0(D%(;ˆ;u$&jT2SfKF8hˆSLnVyItI3%m(2p$SBtUZ6Y9vB;5h;)gKPwdˆf5U*ZyKDGpDh<p6zbS&h3kJuYB%S&aRX2yBY4(U*%B7XI:oOcuoxhrˆ5v>wd3JQROy*cq278CzG0j&Nkx)>je8:rGBBROvYjVg5(uEAi5<(IYvˆs9DZC2aPbwFm0o7NTt%UZNGq@AqWY5rd%>3krt(j?9Qx4x1&@&4ˆ$LP>g8@>x%Vn>11qYkI&2R;pX9zeq&vTG16Cˆ&w:aSN62pts99w0%CY?9%hX)*m>FcH37yRFB6wC&1uxn?J<k8&s(k&0ij4Zˆozˆ;tfuk(6;lXfFS1Z$r)b*qUn<1Gˆ<N@jokE$F0ˆOMAHS%xa8%)KN*r;v@flˆqZ9&WaqF%73g(0i5;@lxoR88P;y2GOsB4(FScˆ%qTnˆwh78K%B9ht&k4i(gwFMOFSlUrS?*OgIdyKXOYiU?6k40TLWS0E&8&YrRnEJwt%@hLqvsUEnAsTLfDjmoK?C7A0%cVtbE:MYˆsBHe>f>P(&U4bVx5(D9>Mx@&kArQEY(Z<fO*E4(?*kAˆˆ;XTwmDYˆ:VIeG2W?f;S<2ˆm29k)Kq3G7A70hq<dwzvo%CT&Yo&((*CpkA;Y80Y%Dn2U&Zdm*a)$shPenY0U8pTg(E677(%u%qz<w%&Ox87(9ˆEECfPxCQzS&vw>P<my848VXQ)JU0XGO(XTfJPBWd)O271?2gDzV;hˆ1q?<H)wdeqel(J((d&?0kJ:i?jD&Re8H2ˆ&)T$HDrY?@A98GrlUf(8l%OW5?sAlT>q$Gˆ&mwLtzW<Uy2j7@:ˆ";

/*Contexto*/
Given('que o usuário selecionou criar ou editar uma nota na tela NotasCidade', () => {
	cy.visit('dashboard');
	cy.wait(2000);
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();
	cy.xpath('//*[@id="goToNote0"]')
	.then(($note_text) => {
		// store the button's text
		//console.log($btn.text());
		current_note_name = $note_text.text();
	});


	cy.xpath('//*[@id="goToNote0"]')
	.click();
});
When('o usuário clicou no botão Editar', () => {
	cy.xpath('//*[@id="editCityNoteButton"]')
	.click();
});



/*Entrar no modo de edição de texto de notas*/

Then('o campo do texto da nota exibida se torna editável', () => {
	cy.xpath('//*[@id="cityNote"]')
});
And('o campo de visitas da nota exibida se torna editável', () => {
	cy.xpath('//*[@id="noteVisits"]')
});



/*Editar visitas de cidade*/
When('o usuário seleciona o campo visitas', () => {
	cy.xpath('//*[@id="noteVisits"]')
	.click();
});
Then('abre o teclado', () => {
//NÃO IMPLEMENTADO
});
And('o usuário pode editar o número de visitas que fez à cidade', () => {
	cy.xpath('//*[@id="noteVisits"]')
	.clear()
	.type('9')
});



/*Salvar uma nova nota*/
Given('que o usuário editou uma nota ainda não cadastrada e salva', () => {

	cy.visit('dashboard');
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();
	cy.xpath('//*[@id="goToNote0"]')

	/*.then(($note_text) => {
		// store the button's text
		//console.log($btn.text());
		current_note_name = $note_text.text();
	});*/


	cy.xpath('//*[@id="createCityNoteButton"]')
	.click();

	cy.xpath('//*[@id="noteName"]')
	.clear()
	.type(new_note_name);

	cy.xpath('//*[@id="cityNote"]')
	.clear()
	.type(new_input_text);

	cy.xpath('//*[@id="noteVisits"]')
	.clear()
	.type(new_input_visit);
	/*cy.xpath('//*[@id="editCityNoteButton"]')
	.click();



	cy.xpath('//*[@id="noteVisits"]')
	.clear()
	.type(new_input_visit)

	cy.xpath('//*[@id="cityNote"]')
	.clear()
	.type(new_input_text )*/
});
When('clica no botão Salvar Nova Nota', () => {
	cy.xpath('//*[@id="createCityNoteButton"]')
	.click();
});
Then('a nota terá seu conteúdo modificado na visualização', () => {

	return true;
});



/*Salvar edição de uma nota já cadastrada e salva*/
Given('que o usuário fez edições em uma nota', () => {
	cy.visit('dashboard');
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();
	cy.xpath('//*[@id="goToNote0"]')
	.then(($note_text) => {
		// store the button's text
		//console.log($btn.text());
		current_note_name = $note_text.text();
	});


	cy.xpath('//*[@id="goToNote0"]')
	.click();

	cy.xpath('//*[@id="editCityNoteButton"]')
	.click();



	cy.xpath('//*[@id="noteVisits"]')
	.clear()
	.type(current_input_visit);

	cy.xpath('//*[@id="cityNote"]')
	.clear()
	.type(current_input_text);
});
When('clica no botão Salvar', () => {
	cy.xpath('//*[@id="saveCityNoteButton"]')
	.click();
});
Then('a nota terá seu conteúdo atualizado na visualização', () => {

	cy.xpath('//*[@id="root"]/div/div[2]/div[2]/p')
	.should('have.text', current_input_text );

	cy.xpath('//*[@id="root"]/div/div[2]/div[3]/p[2]')
	.should('have.text', current_input_visit)
});
And('o modo de edição de nota é encerrado', () => {
	cy.xpath('//*[@id="editCityNoteButton"]')
	.should('have.text', 'Editar');
});



/*Erro ao salvar uma nota sobre uma cidade*/
Given('que o usuário inseriu um dado inválido em um dos campos de edição da nota', () => {
	cy.visit('dashboard');
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();


	cy.xpath('//*[@id="goToNote0"]')
	.click();

	cy.xpath('//*[@id="editCityNoteButton"]')
	.click();



	cy.xpath('//*[@id="noteVisits"]')
	.clear()
	.type(current_input_visit);

	cy.xpath('//*[@id="cityNote"]')
	.clear()
	.type(invalid_data);
});
Then('a nota não é salva', () => {
	return true;
});
And('o sistema notifica que a ação não foi concluída com sucesso.', () => {
	cy.get('//*[@id="alert"]')
});



/*Deletar Nota*/
When('o usuário clica no botão Deletar nota', () => {
	cy.visit('dashboard');
	cy.xpath('//*[@id="cityInfo0"]/div[1]/a')
	.click();
	cy.xpath('//*[@id="cityNotesButton"]')
	.click();


	cy.xpath('//*[@id="goToNote0"]')
	.click();

	cy.xpath('//*[@id="deleteCityNoteButton"]')
	.click();
});
And('confirma a exclusão', () => {
	cy.get('//*[@id="confirma"]');
});

Then('a nota é removida do sistema', () => {

});
And('é exibida a tela NotasCidade', () => {

});
And('é exibida a mensagem de exclusão com sucesso', () => {

});
And('a nota excluída não é exibida na lista de notas', () => {

});