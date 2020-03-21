import React from 'react';
import { filterByProgramType } from '../../utils';
import { PROGRAM_TYPE, STATES } from '../../constants';
import Container from '../Container';
import Banner from '../Banner';
import Grid from '../Grid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import { useFeed } from '../FeedContext';

function Movies() {
  const { state, feed } = useFeed();
  
  const movies = filterByProgramType({ feed, programType: PROGRAM_TYPE.MOVIE })
  return (
    <div>
      <Banner heading="Popular Movies" />
      <Container>
        <Grid>
          {state === STATES.LOADING && <Loading />}
          {state === STATES.ERROR && <Error />}
          {movies.map((entry) => (
            <Grid.GridElement key={entry.title}>
              <Card
                to="#"
                description={entry.title}
                thumbnail={entry.images['Poster Art'].url}
              />
            </Grid.GridElement>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Movies;
