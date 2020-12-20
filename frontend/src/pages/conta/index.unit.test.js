import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Conta from './index';

describe('Features da Conta', function(){
	
	test('acessa pagina da conta', ()=>{
		
		render(<Conta />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Conta/i)).toBeInTheDocument();

	});
	

});
