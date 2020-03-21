import {
  alphabeticalSort,
  filterByProgramType
} from './index';
import { PROGRAM_TYPE } from '../constants';
import sample from '../sample.json';

const feed = sample.entries;

describe('alphabeticalSort', () => {
  it('sorts by title in an ascending order', () => {
    const input = [
      { title: 'Wolf Creek' },
      { title: '11.22.63' },
      { title: 'iZombie' },
      { title: 'Eye Candy' },
    ];

    const expected = [
      { title: '11.22.63' },
      { title: 'Eye Candy' },
      { title: 'iZombie' },
      { title: 'Wolf Creek' }
    ];

    expect(input.sort(alphabeticalSort)).toEqual(expected);
  });
});

describe('filterByProgramType', () => {
  it('controls the length of the filtered array with the limit argument', () => {
    const result = filterByProgramType({ feed, limit: 1 });
    expect(result.length).toEqual(1);
  });

  it('applys the programType argument as a filter', () => {
    const movieResult = filterByProgramType({ feed, programType: PROGRAM_TYPE.MOVIE });
    const seriesResult = filterByProgramType({ feed, programType: PROGRAM_TYPE.SERIES });

    expect(movieResult.length).not.toEqual(0);
    expect(movieResult.every((entry) => entry.programType === PROGRAM_TYPE.MOVIE)).toEqual(true);
    expect(seriesResult.length).not.toEqual(0);
    expect(seriesResult.every((entry) => entry.programType === PROGRAM_TYPE.SERIES)).toEqual(true);
  });

  it('applys the releasedAfter argument as a filter', () => {
    const result = filterByProgramType({ feed, releasedAfter: 2015 });
    expect(result.length).not.toEqual(0);
    expect(result.every((entry) => entry.releaseYear >= 2015)).toEqual(true);
  });
});
