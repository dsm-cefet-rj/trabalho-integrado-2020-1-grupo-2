import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import NotaCidade from './index';

describe("describe notasCidades", () => {


	test('loaded', () => {
		const { container } = render(<NotaCidade />, { wrapper: MemoryRouter });
	});
	
	test('Renderizar componente principal', () => {
		const { container } = render(<NotaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#notacidade')).toBeInTheDocument();
		expect(container.querySelector('#nota')).toBeInTheDocument();
	});
	
	test('Exibir conteúdo', () => {
		const { container } = render(<NotaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#nota-container')).toBeInTheDocument();
	});
	
	test('Exibir conteúdo', () => {
		const { container } = render(<NotaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#nota-container')).toBeInTheDocument();
	});
	
	test('Exibir visitas', () => {
		const { container } = render(<NotaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#visits')).toBeInTheDocument();
	});
});