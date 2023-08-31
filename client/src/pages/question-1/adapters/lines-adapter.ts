/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

export const lineAdapter = (line: string): [number, number] => {
  const numbers = line.split(",");

  const number1 = parseInt(numbers[0]);
  const number2 = parseInt(numbers[1]);

  return [number1, number2];
};
