import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Footer from './index';


describe('Features Footer', function(){
	
	test('mostrar Footer', ()=>{
		
		render(<Footer />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Footer/i)).toBeInTheDocument();

	});
	

});

