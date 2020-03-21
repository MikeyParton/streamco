import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the heading together with the movies and series links', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });
    const heading = getByText('Popular Titles');
    const movies = getByText('Movies');
    const series = getByText('Series');
    
    expect(heading).toBeInTheDocument();
    expect(movies).toBeInTheDocument();
    expect(series).toBeInTheDocument();
  });
});
