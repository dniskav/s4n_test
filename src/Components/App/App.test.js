import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { CandidateInfo, CandidateInfoWrapper } from './index';

describe('App', () => {
    test('<App />', () => {
        render(<App />);
        screen.getByText(/Candidato/);
        screen.getByText(/Nombres/);
        screen.getByText(/Cédula/);
        screen.getByText(/Fecha de nacimiento/);
    });
    describe('CandidateInfoWrapper', () => {
        test('<CandidateInfoWrapper />', () => {
            const props = {};
            render(<CandidateInfoWrapper info={props} />);
            screen.getByText(/Candidato/);
        });
        test('<CandidateInfoWrapper />', () => {
            const props = {"candidate":{"names":"dummy","lastNames":"last dummy","id":"333","bDay":"November 9th 1995, 12:00:00 am","email":"some@email.com","githubUser":"dummy_user"}};
            render(<CandidateInfoWrapper info={props} />);
            screen.getByText(/Nombre: dummy last dummy/);
            screen.getByText(/Cédula: 333/);
            screen.getByText(/Fecha de Nacimiento: November 9th 1995, 12:00:00 am/);
            screen.getByText(/Email: some@email.com/);
            screen.getByText(/Usuario de Github: dummy_user/);

        });
    });


            describe('CandidateInfo', () => {
        test('<CandidateInfo />', () => {
            const props = {
                names: 'dummy names',
                lastNames: 'dummy last names',
                id: '1',
                bDay: '1975-11-09',
                email: 'some@email.com',
                githubUser: 'someUser',
            };

            render(<CandidateInfo info={props} />);
            screen.getByText(/Nombre: dummy names dummy last names/);
            screen.getByText(/Cédula: 1/);
            screen.getByText(/Fecha de Nacimiento: 1975-11-09/);
            screen.getByText(/Email: some@email.com/);
            screen.getByText(/Usuario de Github: someUser/);
        });
    });
});
