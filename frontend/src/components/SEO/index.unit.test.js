import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import SEO from './index';


describe('Features SEO', function(){
	
	test('mostrar SEO', ()=>{
		
		render(<SEO />, { wrapper: MemoryRouter });

		expect(screen.getByText(/SEO/i)).toBeInTheDocument();

	});
	

});

