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
	
	test('carrega botão de editar/visualizar nota', ()=>{
		
        render(<Nota />, { wrapper: MemoryRouter });
        if (!editMode){
            expect(screen.getByText(/Visualizar/i)).toBeInTheDocument();
        } else{
            expect(screen.getByText(/Editar/i)).toBeInTheDocument();
        }
    });
    
    test('carrega botão de salvar nota', ()=>{
        render(<Nota />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
    });

    test('carrega botão de deletar nota', ()=>{
        render(<Nota />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Deletar nota/i)).toBeInTheDocument();
    });

    test('carrega visitas', ()=>{
        render(<Nota />, { wrapper: MemoryRouter });
        expect(screen.getByText(/visitas/i)).toBeInTheDocument();
    });
	

});