import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import CriarNotaCidade from './index';

describe("describe CriarNotaCidade", () => {


	test('loaded', () => {
		const { container } = render(<CriarNotaCidade />, { wrapper: MemoryRouter });
	});
	
	test('Renderizar componente principal', () => {
		const { container } = render(<CriarNotaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#create')).toBeInTheDocument();
	});
});