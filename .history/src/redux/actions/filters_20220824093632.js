
export const setSortBy = (price) => ({
  type: 'SET_SORT_BY',
  payload: price,
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});