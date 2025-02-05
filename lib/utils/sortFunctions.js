// sort by date
export const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return sortedArray;
};

// sort by weight
export const sortByWeight = (array) => {
  const sortedArray = array.sort(
    (a, b) =>
      (a.frontmatter.weight ? a.frontmatter.weight : 100000) -
      (b.frontmatter.weight ? b.frontmatter.weight : 100000)
  );
  return sortedArray;
};

// sort by order
export const sortFilteredThemes = (filteredThemes, sortAsc) => {
  const sortTedThemes = sortAsc ? filteredThemes.reverse() : filteredThemes;
  return sortTedThemes;
};
