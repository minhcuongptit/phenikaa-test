export const randomWithDecimal = (min, max) => Math.random() * (max - min) + min;
export const randomNoDecimal = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const convertTwoDecimal = (value) => Math.floor(value * 100) / 100