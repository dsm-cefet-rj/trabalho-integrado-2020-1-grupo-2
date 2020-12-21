import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));


describe('Features de dashboard', function(){
	
	test('acessa pagina dashboard', ()=>{
		
        render(<Dashboard />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Adicionar Cidade/i)).toBeInTheDocument();
		expect(screen.getByText(/Deletar Todas as Cidades/i)).toBeInTheDocument();
		expect(screen.getByText(/Conta/i)).toBeInTheDocument();

	});
	

});
