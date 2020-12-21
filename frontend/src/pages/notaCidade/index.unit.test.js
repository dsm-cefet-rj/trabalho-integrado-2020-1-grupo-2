import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import NotaCidade from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

describe('Features de nota cidade', function(){
	
	test('acessa pagina de nota cidade', ()=>{
		
        render(<NotaCidade />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Editar/i)).toBeInTheDocument();
		expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
		expect(screen.getByText(/Deletar Nota/i)).toBeInTheDocument();

	});
	

});
