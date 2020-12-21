import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import CidadePreview from './preview';


describe('COM Caracteristicas de tempo do CidadePreview component', function(){
	const propsmock = 	{"cidade":{"id":"5fde8fd213816b3f74a97c2c","weatherID":184745,"name":"Nairobi","latitude":-1.2833,"longitude":36.8167,"notas":["5fde900613816b3f74a97c2d","5fde9c88aa827860d02896c6"]},"weather":{"cod":"200","message":0,"cnt":40,"list":[{"dt":1608508800,"main":{"temp":289.79,"feels_like":288.74,"temp_min":289.41,"temp_max":289.79,"pressure":1019,"sea_level":1019,"grnd_level":837,"humidity":89,"temp_kf":0.38},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":3.71,"deg":59},"visibility":8383,"pop":0.11,"sys":{"pod":"n"},"dt_txt":"2020-12-21 00:00:00"}]}};
	test('exibe cidade com botão deletar', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/deletar cidade/i)).toBeInTheDocument();

	});
	test('exibe nome da cidade ', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Nairobi/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Umidade', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Umidade/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Vento', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Velocidade do Vento/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Temperatura', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Temperatura/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Timestamp', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/2020-12-21 00:00:00/i)).toBeInTheDocument();

	});
});

describe('SEM Weather de CidadePreview component', function(){
	const propsmock = 	{"cidade":{"id":"5fde8fd213816b3f74a97c2c","weatherID":184745,"name":"Nairobi","latitude":-1.2833,"longitude":36.8167,"notas":["5fde900613816b3f74a97c2d","5fde9c88aa827860d02896c6"]},"weather": null};
	
	test('exibe cidade com botão deletar', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/deletar cidade/i)).toBeInTheDocument();

	});

	test('exibe nome cidade ', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Nairobi/i)).toBeInTheDocument();

	});
	test('exibe Erro da API ', ()=>{
		
		render(<CidadePreview {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Erro na chamada da API/i)).toBeInTheDocument();

	});
});