import React from 'react';
import { render } from '@testing-library/react';
import CandidateForm from './index';

describe('CandidateForm', () => {
    test('<CandidateForm />', () => {
        render(<CandidateForm />);
    });
});