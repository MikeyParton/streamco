import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Series from './Series';
import FeedProvider from '../FeedContext';
import sample from '../../sample.json';

const renderWithWrappers = () => render(
  <MemoryRouter>
    <FeedProvider>
      <Series />
    </FeedProvider>
  </MemoryRouter>
);

describe('Series', () => {
  it('renders the heading', async () => {
    fetch.mockResponseOnce(JSON.stringify(sample));
    const { findByText } = renderWithWrappers();
    const heading = await findByText('Popular Series'); 
    expect(heading).toBeInTheDocument();
  });

  it('renders a loading state while it loads the feed', async () => {
    fetch.mockResponseOnce(() => new Promise((_resolve, _reject) => {}));
    const { findByText } = renderWithWrappers();

    const loading = await findByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('loads the feed', async () => {
    fetch.mockResponseOnce(JSON.stringify(sample));
    const { findByText, container } = renderWithWrappers();

    // Check the first series as a sanity check
    const firstSeries = await findByText('11.22.63');
    expect(firstSeries).toBeInTheDocument();

    const cards = container.querySelectorAll('.card');
    expect(cards.length).toEqual(21);
  });

  it('renders an error when the feed fails to load', async () => {
    fetch.mockRejectOnce(new Error('Oh no!'));
    const { findByText } = renderWithWrappers();
    const firstMovie = await findByText('Oops, something went wrong...');
    expect(firstMovie).toBeInTheDocument();
  });
});
