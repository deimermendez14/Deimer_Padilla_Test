/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

interface Props {
  segment1: [number, number];
  segment2: [number, number];
}

export const doSegmentsOverlap = ({ segment1, segment2 }: Props): boolean => {
  const [x1, x2] = segment1;
  const [x3, x4] = segment2;

  return Math.max(x1, x3) <= Math.min(x2, x4);
};
