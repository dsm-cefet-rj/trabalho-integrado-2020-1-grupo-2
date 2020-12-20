import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Cidade from './index';


describe('COM Caracteristicas de tempo do Cidade component', function(){
	const propsmock = 	{"cidade":
								{	"id":"5fdd5790ea7336270ca2c4da",
									"weatherID":3451190,
									"name":"Rio de Janeiro",
									"latitude":-22.9028,
									"longitude":-43.2075,
									"notas":["5fdd5800ea7336270ca2c4db","5fdd5891ea7336270ca2c4dc","5fdd5c37ea7336270ca2c4dd"]
								},
								"weather":
									{"cod":"200","message":0,"cnt":40,"list":[{"dt":1608476400,"main":{"temp":306.01,"feels_like":309.33,"temp_min":306.01,"temp_max":307.2,"pressure":1008,"sea_level":1008,"grnd_level":1008,"humidity":57,"temp_kf":-1.19},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":34},"wind":{"speed":2.9,"deg":143},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2020-12-20 15:00:00"}]}
							};
	test('listar cidade com atributo Umidade', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Umidade/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Vento', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Velocidade do Vento/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Temperatura', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Temperatura/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Timestamp', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/2020-12-20 15:00:00/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Notas', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Notas/i)).toBeInTheDocument();

	});

});

describe('SEM Caracteristicas de tempo do Cidade component ', function(){
	const propsmock = 	{"cidade":
								{	"id":"5fdd5790ea7336270ca2c4da",
									"weatherID":3451190,
									"name":"Rio de Janeiro",
									"latitude":-22.9028,
									"longitude":-43.2075,
									"notas":["5fdd5800ea7336270ca2c4db","5fdd5891ea7336270ca2c4dc","5fdd5c37ea7336270ca2c4dd"]
								},
								"weather": null
							};
	test('listar cidade sem atributos temporais', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Erro na chamada da API/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Notas', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Notas/i)).toBeInTheDocument();
	});

});

describe('SEM informações do Cidade component ', function(){
	
	const propsmock = {"cidade":{	"id":"5fdd5790ea7336270ca2c4da"}};

	test('listar cidade sem atributos temporais', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Erro na chamada da API/i)).toBeInTheDocument();

	});
	test('listar cidade com atributo Notas', ()=>{
		
		render(<Cidade {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Notas/i)).toBeInTheDocument();

	});
});
