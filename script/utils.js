/* eslint-disable import/prefer-default-export */
export const randomIntegerInRange = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
