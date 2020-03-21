import React from 'react';
import Container from '../Container';
import Card from '../Card';
import { ROUTES } from '../../constants';
import Banner from '../Banner';
import Grid from '../Grid';

const elements = [
  {
    to: ROUTES.MOVIES,
    title: 'Movies',
    description: 'Popular Movies'
  },
  {
    to: ROUTES.SERIES,
    title: 'Series',
    description: 'Popular Series'
  }
];

function Home() {
  return (
    <div>
      <Banner heading="Popular Titles" />
      <Container>
        <Grid>
          {elements.map((element) => (
            <Grid.GridElement key={element.title}>
              <Card
                to={element.to}
                title={element.title}
                description={element.description}
              />
            </Grid.GridElement>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Home;
