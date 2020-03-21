import { DEFAULT_LIMIT } from '../constants';

export const alphabeticalSort = (a, b) => {
  return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
};

export const filterByProgramType = ({
  feed,
  programType,
  releasedAfter = 2010,
  limit = DEFAULT_LIMIT
}) => {
  const filtered = [];
  for (let entry of feed) {
    if (filtered.length === limit) break;
    if (programType && entry.programType !== programType) continue;
    if (releasedAfter && entry.releaseYear < releasedAfter) continue;
    filtered.push(entry);
  }
  return filtered;
};

