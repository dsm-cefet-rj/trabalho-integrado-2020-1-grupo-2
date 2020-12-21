import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import CriarNotaCidade from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

describe('Features de criar nota', function(){
	
	test('acessa pagina de criar nota', ()=>{
		
        render(<CriarNotaCidade />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Nome/i)).toBeInTheDocument();
		expect(screen.getByText(/Nota/i)).toBeInTheDocument();
		expect(screen.getByText(/Visitas/i)).toBeInTheDocument();
		expect(screen.getByText(/Criar/i)).toBeInTheDocument();

	});
	

});
