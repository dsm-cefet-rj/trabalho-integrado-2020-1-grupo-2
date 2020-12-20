import React from 'react';
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Weather from './index';

describe('COM Caracteristicas de tempo do Weather component', function(){
	const propsmock = 	{"weather":{"dt":1608498000,"main":{"temp":290.93,"feels_like":289.96,"temp_min":289.64,"temp_max":290.93,"pressure":1019,"sea_level":1019,"grnd_level":838,"humidity":83,"temp_kf":1.29},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":62},"wind":{"speed":3.62,"deg":54},"visibility":10000,"pop":0.28,"rain":{"3h":0.4},"sys":{"pod":"n"},"dt_txt":"2020-12-20 21:00:00"}};

	test('listar Weather com valor Timestamp', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/2020-12-20 21:00:00/i)).toBeInTheDocument();

	});
	test('listar Weather com atributo Umidade', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Umidade/i)).toBeInTheDocument();

	});
	test('listar Weather com valor de Umidade', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/83/i)).toBeInTheDocument();

	});
	test('listar Weather com atributo Velocidade do Vento', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Velocidade do Vento/i)).toBeInTheDocument();

	});
	test('listar Weather com valor de Velocidade do Vento', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/3.62/i)).toBeInTheDocument();

	});
	test('listar Weather com atributo Temperatura', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Temperatura/i)).toBeInTheDocument();

	});
	test('listar Weather com valor de Temperatura', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/17.8/i)).toBeInTheDocument();

	});
	
});

describe('SEM CADA Caracteristica de tempo do Weather component', function(){

	test('listar Weather sem UMIDADE', ()=>{
		const propsmock = {"weather":{"dt":1608498000,"main":{"temp":290.93,"feels_like":289.96,"temp_min":289.64,"temp_max":290.93,"pressure":1019,"sea_level":1019,"grnd_level":838,"humidity":null,"temp_kf":1.29},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":62},"wind":{"speed":3.62,"deg":54},"visibility":10000,"pop":0.28,"rain":{"3h":0.4},"sys":{"pod":"n"},"dt_txt":"2020-12-20 21:00:00"}};

		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Umidade/i)).toBeInTheDocument();
		expect(screen.getByText(/Sem informações/i)).toBeInTheDocument();

	});
	test('listar Weather sem VELOCIDADE DO VENTO', ()=>{
		const propsmock = {"weather":{"dt":1608498000,"main":{"temp":290.93,"feels_like":289.96,"temp_min":289.64,"temp_max":290.93,"pressure":1019,"sea_level":1019,"grnd_level":838,"humidity":57,"temp_kf":1.29},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":62},"wind":{"speed":null,"deg":54},"visibility":10000,"pop":0.28,"rain":{"3h":0.4},"sys":{"pod":"n"},"dt_txt":"2020-12-20 21:00:00"}};

		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Velocidade do Vento/i)).toBeInTheDocument();
		expect(screen.getByText(/Sem informações/i)).toBeInTheDocument();

	});
	test('listar Weather sem main que contem TEMPERATURA', ()=>{
		const propsmock = {"weather":{"dt":1608498000,"main":{"temp":null,"feels_like":289.96,"temp_min":289.64,"temp_max":290.93,"pressure":1019,"sea_level":1019,"grnd_level":838,"humidity":57,"temp_kf":1.29},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":62},"wind":{"speed":3.62,"deg":54},"visibility":10000,"pop":0.28,"rain":{"3h":0.4},"sys":{"pod":"n"},"dt_txt":"2020-12-20 21:00:00"}};

		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Temperatura/i)).toBeInTheDocument();
		expect(screen.getByText(/Sem informações/i)).toBeInTheDocument();

	});
});

describe('SEM NENHUMA Caracteristica de tempo do Weather component', function(){
		const propsmock = {"weather":{"dt":1608498000,"main":{"temp":null,"feels_like":289.96,"temp_min":289.64,"temp_max":290.93,"pressure":1019,"sea_level":1019,"grnd_level":838,"humidity":null,"temp_kf":1.29},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":62},"wind":{"speed":null,"deg":54},"visibility":10000,"pop":0.28,"rain":{"3h":0.4},"sys":{"pod":"n"},"dt_txt":"2020-12-20 21:00:00"}};

	test('listar Weather sem UMIDADE,VELOCIDADE DO VENTO e TEMPERATURA', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getAllByText(/Sem informações/i)).toHaveLength(3);
	});
});

describe('SEM informação nenhuma do Weather component', function(){
	const propsmock = {"weather":null};
	test('listar Weather nulo', ()=>{
		
		render(<Weather {...propsmock} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Erro na chamada da API/i)).toBeInTheDocument();

	});
});