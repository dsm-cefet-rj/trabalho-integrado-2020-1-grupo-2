import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import AdicionarCidade from './index';

describe("describe AdicionarCidade", () => {


	test('loaded', () => {
		const { container } = render(<AdicionarCidade />, { wrapper: MemoryRouter });
	});
	
	test('Renderizar componente principal', () => {
		const { container } = render(<AdicionarCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#adicionar-cidade')).toBeInTheDocument();
		expect(container.querySelector('#nota')).toBeInTheDocument();
	});
	
});