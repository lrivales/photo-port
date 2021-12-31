import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Form Component', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('h1 data-testid', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('Contact Me')).toHaveTextContent('Contact Me');
        expect(getByTestId('Submit')).toHaveTextContent('Submit');
    })
});