export const getMiceCount = (element) => (element === 1 ? '' : element);

export const getWordEnding = (element, firstWord, secondWord, thirdWord) => {
  element %= 100;
  if (element >= 5 && element <= 20) {
    return thirdWord;
  }
  element %= 10;
  if (element === 1) {
    return firstWord;
  }
  if (element >= 2 && element <= 4) {
    return secondWord;
  }
  return thirdWord;
};
