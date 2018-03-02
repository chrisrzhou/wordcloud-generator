export const addRemoveArrayEntry = (array, newEntry) => {
  return array.includes(newEntry)
    ? array.filter(entry => entry !== newEntry)
    : [...array, newEntry];
};
