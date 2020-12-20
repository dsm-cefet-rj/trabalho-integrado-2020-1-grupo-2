import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import CriarNota from "./index";
import userEvent from '@testing-library/user-event';

jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn( ()=> jest.fn( (param)=> param) )
}))

const mockIdCidadesFound = ["5fdd5790ea7336270ca2c4da", "5fde8fd213816b3f74a97c2c"]
const mockIdCidade = ["5fdd5790ea7336270ca2c4da"]

describe("criar nota unit", function() {
    test("carrega tela de nota completa", () => {
        render( <CriarNota idCidadesFound={mockIdCidadesFound} idCidade={mockIdCidade} /> , { wrapper: MemoryRouter });
        expect(screen.getByText(/Nome/i)).toBeInTheDocument();
        expect(screen.getByText(/Nota/i)).toBeInTheDocument();
        expect(screen.getByText(/Visitas/i)).toBeInTheDocument();
        expect(screen.getByText(/Conta/i)).toBeInTheDocument();
        expect(screen.getByTextId("button")).toHaveTextContent("Criar");
    });

    test("cria nota com sucesso", () => {
        const mockCriarNotaHandler = jest.fn();
        let nota = {nome: 'teste', nota:'nota de teste', visitas: 2};
        let dom = render(<CriarNota idCidadesFound={mockIdCidadesFound} nota={nota} onSubmit={mockCriarNotaHandler}></CriarNota>, { wrapper: MemoryRouter });
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#createCityNoteButton"),leftClick);
        expect(mockCriarNotaHandler).toHaveBeenCalledTimes(1);
    });

    test("caracter inválido no campo de visitas", () => {
        const mockCriarNotaHandler = jest.fn();
        let nota = {nome: 'teste', nota:'nota de teste', visitas: 'a'};
        let dom = render(<CriarNota idCidadesFound={mockIdCidadesFound} nota={nota} onSubmit={mockCriarNotaHandler}></CriarNota>, { wrapper: MemoryRouter });
        const leftClick = { button: 0 };
        userEvent.click(dom.container.querySelector("#createCityNoteButton"),leftClick);
        expect(mockCriarNotaHandler).toHaveBeenCalledTimes(0);
        expect(screen.getByText(/Não foi possível criar nota/i)).toBeInTheDocument();
    });
});