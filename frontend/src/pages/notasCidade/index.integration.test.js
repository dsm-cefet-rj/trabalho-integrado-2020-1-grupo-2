import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import NotasCidade from './index';


describe("describe notasCidades", () => {


	test('loaded', () => {
		const { container } = render(<NotasCidade />, { wrapper: MemoryRouter });
	});
	
	test('Renderizar componente principal', () => {
		const { container } = render(<NotasCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#notas')).toBeInTheDocument();
		expect(container.querySelector('#createCityNoteButton')).toBeInTheDocument();
	});
	
	test('Exibir uma nota', () => {
		const { container } = render(<NotasCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#goToNote0')).toBeInTheDocument();
	});
});