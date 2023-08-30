/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

import { Fragment, useEffect, useState } from "react";

import { lineAdapter } from "./adapters/lines-adapter";
import { doSegmentsOverlap } from "./utilities/do-segmented-overlap";
import { InputsWithMessage } from "../components/molecules/inputs-with-message";

export const ItemOne = (): JSX.Element => {
  const [value1, setValue1] = useState("");

  const [value2, setValue2] = useState("");

  const [isOverlap, setIsOverlap] = useState(false);

  useEffect(() => {
    setIsOverlap(
      doSegmentsOverlap({
        segment1: lineAdapter(value1),
        segment2: lineAdapter(value2),
      })
    );
  }, [value1, value2]);

  return (
    <Fragment>
      <InputsWithMessage
        mask={"9,9"}
        label="Line"
        message={`The lines are overlap ? ${isOverlap}`}
        setStateFirst={setValue1}
        setStateSecond={setValue2}
      />
    </Fragment>
  );
};
