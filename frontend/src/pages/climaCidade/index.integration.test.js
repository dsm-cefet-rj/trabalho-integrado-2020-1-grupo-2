import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import ClimaCidade from './index';

describe("describe ClimaCidade", () => {


	test('loaded', () => {
		const { container } = render(<ClimaCidade />, { wrapper: MemoryRouter });
	});
	
	test('Renderizar componente principal', () => {
		const { container } = render(<ClimaCidade />, { wrapper: MemoryRouter });
		expect(container.querySelector('#clima-cidade')).toBeInTheDocument();
	});
	
	
});