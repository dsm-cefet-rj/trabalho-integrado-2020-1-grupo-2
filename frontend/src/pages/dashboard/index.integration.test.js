import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import {useSelector} from 'react-redux';

import Dashboard from './index';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( () => jest.fn((param) => param) )
}));


describe("ListagemCidades - Exibição das cidades", () => {

	 const okStateTest = () => {
		render(<Dashboard />, { wrapper: MemoryRouter });
		expect(querySelector('#dashboard')).toBeInTheDocument();
    }

	test('loaded', () => {
		okStateTest();
	});

});