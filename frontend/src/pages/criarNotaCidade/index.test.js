import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { useSelector } from "react-redux"; 
import "@testing-library/jest-dom/extend-expect";
import CriarNota from "./index";
import { selectIds } from './../../components/Nota/slice';
import userEvent from '@testing-library/user-event';
import { addNotaServer } from '../../components/Nota/slice';
import Navbar from '../../components/Navbar';
import { selectCidadesIds } from '../../components/Cidade/slice';

jest.mock("../../components/Cidade/slice", ()=>({
    selectIds: jest.fn(() => mockAppState.cidades.cidades)
}));

jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( ()=> jest.fn( (param)=> param) )
}));

const mockAppState = {
    cidades:{
        status: 'not_loaded',
        error: null,
        cidades: []
    }
}
const idsCidadesFound = ["5fdd5790ea7336270ca2c4da", "5fde8fd213816b3f74a97c2c"];
const mockIdCidade = ["5fdd5790ea7336270ca2c4da"];


describe("criar nota unit", function() {
	test("carrega tela de nota completa", () => {
		render( <CriarNota  idCidade={mockIdCidade} selectCidadesIds={idsCidadesFound} idsCidadesFound={idsCidadesFound} /> , { wrapper: MemoryRouter }, idsCidadesFound);
    });
});









/*import React from 'react';
import { render, screen } from '@testing-library/react';

describe("Cidade não existe no banco de dados", function() {

    test('Sistema retorna para tela home', () => { throw 'Not implemented yet' });

})

describe("Usuário não logado", function() {

    test('Sistema carrega página de criar login', () => { throw 'Not implemented yet' });

})

describe("Funcionalidade de nota de cidade", function() {

    test('Cria nota de cidade', () => { throw 'Not implemented yet' });

    test('Caracter inválido no campo visitas', () => { throw 'Not implemented yet' });

    test('Erro ao criar nota de cidade', () => { throw 'Not implemented yet' });

})
*/