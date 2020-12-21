import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addCidadeServer } from '../../components/Cidade/slice';

import { findCity } from '../../services/weather/weather';

import Navbar from '../../components/Navbar';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import AdicionarCidade from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));

describe('Features de Adicionarcidade sem parametros', function(){
	
	test('acessa pagina de clima cidade', ()=>{
		
        render(<AdicionarCidade />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Adicionar Cidade/i)).toBeInTheDocument();

    });
    test('acessa pagina de clima cidade', ()=>{
		
        render(<AdicionarCidade />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Login/i)).toBeInTheDocument();

    });
    test('acessa pagina de clima cidade', ()=>{
		
        render(<AdicionarCidade />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Pesquisar/i)).toBeInTheDocument();

    });
    test('acessa pagina de clima cidade', ()=>{
		
        render(<AdicionarCidade />, { wrapper: MemoryRouter });
        expect(screen.getByText(/sem resultados/i)).toBeInTheDocument();

    });
});