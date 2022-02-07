export const createRange = (range: number) => new Array(range).fill(0);

export const changeNumberByOne = (isIncrement: boolean) => 
  (previous: number) => isIncrement ? previous + 1 : previous - 1; 
