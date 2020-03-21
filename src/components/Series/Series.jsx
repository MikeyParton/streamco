import React from 'react';
import { filterByProgramType } from '../../utils';
import { STATES, PROGRAM_TYPE } from '../../constants';
import Container from '../Container';
import Banner from '../Banner';
import Grid from '../Grid';
import Card from '../Card';
import Error from '../Error';
import Loading from '../Loading';
import { useFeed } from '../FeedContext';

function Series() {
  const { state, feed } = useFeed();
  const series = filterByProgramType({ feed, programType: PROGRAM_TYPE.SERIES })
  return (
    <div>
      <Banner heading="Popular Series" />
      <Container>
        <Grid>
          {state === STATES.LOADING && <Loading />}
          {state === STATES.ERROR && <Error />}
          {series.map((entry) => (
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

export default Series;
