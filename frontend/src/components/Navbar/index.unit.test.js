import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.css';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Navbar from './index';

describe('Features do Navbar', function(){
		const propsmock = {"title": "Dashboard;"}
		test('Exibe titulo de dashbard', ()=>{
				
			render(<Navbar {...propsmock} />, { wrapper: MemoryRouter });

			expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

		});
		test('Exibe botão de login', ()=>{
				
			render(<Navbar {...propsmock} />, { wrapper: MemoryRouter });

			expect(screen.getByText(/Login/i)).toBeInTheDocument();

		});
		
});