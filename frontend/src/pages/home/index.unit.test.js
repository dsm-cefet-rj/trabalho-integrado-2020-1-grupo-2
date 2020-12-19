import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import Home from './index';


describe('home index unit', function(){

	test('menu home completo', ()=>{
		render(<Home/>, { wrapper: MemoryRouter });
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		//expect(screen.getByLabelText('Cadastro')).toBeInTheDocument();
		expect(screen.getByText(/Cadastro Sucesso/i)).toBeInTheDocument();
		expect(screen.getByText(/Login/i)).toBeInTheDocument();
		expect(screen.getByText(/Conta/i)).toBeInTheDocument();
		expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();


	})
});