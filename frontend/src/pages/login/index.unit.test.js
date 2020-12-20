import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Login from './index';

describe('Features do Login', function(){
	
	test('acessa pagina de login', ()=>{
		
		render(<Login />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Login/i)).toBeInTheDocument();

	});
	

});
