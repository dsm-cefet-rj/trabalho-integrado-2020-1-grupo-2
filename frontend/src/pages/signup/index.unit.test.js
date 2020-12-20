import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Signup from './index';

describe('Features do Cadastro', function(){
	
	test('acessa pagina da conta', ()=>{
		
		render(<Signup />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Signup/i)).toBeInTheDocument();

	});
	

});
