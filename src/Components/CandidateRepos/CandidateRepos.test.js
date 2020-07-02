import React from 'react';
import { render } from '@testing-library/react';
import CandidateRepos from './index';

describe('CandidateRepos', () => {
    test('<CandidateRepos />', () => {
        render(<CandidateRepos />);
    });
});