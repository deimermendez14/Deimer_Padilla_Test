/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

export const compareVersions = (version1: string, version2: string): string => {
  const v1Parts: number[] = version1.split(".").map(Number);

  const v2Parts: number[] = version2.split(".").map(Number);

  while (v1Parts.length || v2Parts.length) {
    const v1Val: number = v1Parts.shift() || 0;

    const v2Val: number = v2Parts.shift() || 0;

    if (v1Val > v2Val) {
      return "Version 1 is greater than Version 2";
    } else if (v1Val < v2Val) {
      return "Version 2 is greater than Version 1";
    }
  }

  return "Versions are equal";
};

const result11 = compareVersions("1.2.3.4.5.6.7.8.9.10", "1.2.3.4.5.6.7.8.9.9");

console.log(result11);


