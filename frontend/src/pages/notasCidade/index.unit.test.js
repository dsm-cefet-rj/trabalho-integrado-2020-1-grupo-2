import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Nota from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

describe('Features de notas', function(){
	
	test('acessa pagina de notas cidade', ()=>{
		
        render(<Nota />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Criar Nota/i)).toBeInTheDocument();

	});
	

});