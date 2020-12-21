import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import ClimaCidade from './index';

describe('Features de clima cidade', function(){
	
	test('acessa pagina de clima cidade', ()=>{
		
        render(<ClimaCidade />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Velocidade do vento/i)).toBeInTheDocument();
		expect(screen.getByText(/Temperatura/i)).toBeInTheDocument();
		expect(screen.getByText(/Umidade/i)).toBeInTheDocument();

	});
	

});
