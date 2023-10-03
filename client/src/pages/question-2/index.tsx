/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

import { Fragment, useEffect, useState } from "react";

import { compareVersions } from "./utilities/compare-versions";
import { InputsWithMessage } from "../components/molecules/inputs-with-message";

export const ItemTwo = (): JSX.Element => {
  const [value1, setValue1] = useState("");

  const [value2, setValue2] = useState("");

  const [comparisonResult, setComparisonResult] = useState<string>("");

  useEffect(() => {
    const result = compareVersions(value1, value2);
    setComparisonResult(result);
  }, [value1, value2]);

  return (
    <Fragment>
      <InputsWithMessage
        mask={"9.9.9.9.9.9.9.9.9.9.9.9"}
        label="Version"
        message={comparisonResult}
        setStateFirst={setValue1}
        setStateSecond={setValue2}
      />
    </Fragment>
  );
};
