import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import signupSucess from './index';

describe('Features do Cadastro com Sucesso', function(){
	
	test('acessa pagina de cadastro com sucesso', ()=>{
		
		render(<signupSucess />, { wrapper: MemoryRouter });

		expect(screen.getByText(/signupsucess/i)).toBeInTheDocument();

	});
	

});
