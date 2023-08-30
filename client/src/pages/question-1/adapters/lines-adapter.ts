export const lineAdapter = (line: string): [number, number] => {
  const numbers = line.split(",");

  const number1 = parseInt(numbers[0]);
  const number2 = parseInt(numbers[1]);

  return [number1, number2];
};
