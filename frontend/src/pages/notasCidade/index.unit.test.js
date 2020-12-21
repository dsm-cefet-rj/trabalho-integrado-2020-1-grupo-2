import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import NotasCidade from './index';

describe('Features de notas cidade', function(){
	
	test('acessa pagina de notas cidade', ()=>{
		
        render(<NotasCidade />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Criar Nota/i)).toBeInTheDocument();

	});
	

});
