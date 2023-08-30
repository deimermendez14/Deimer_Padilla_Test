/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

import { Dispatch, Fragment, SetStateAction } from "react";
import { Box, TextField } from "@mui/material";
import InputMask from "react-input-mask";

interface Props {
  label: string;
  mask: string | Array<string | RegExp>;
  message: string;
  setStateFirst: Dispatch<SetStateAction<string>>;
  setStateSecond: Dispatch<SetStateAction<string>>;
}

export const InputsWithMessage = ({
  label,
  mask,
  message,
  setStateFirst,
  setStateSecond,
}: Props) => {
  return (
    <Fragment>
      <Box display={"flex"} justifyContent={"center"} margin={1}>
        <InputMask mask={mask} onChange={(e) => setStateFirst(e.target.value)}>
          <TextField variant="outlined" label={`${label} 1`} />
        </InputMask>
        <InputMask mask={mask} onChange={(e) => setStateSecond(e.target.value)}>
          <TextField variant="outlined" label={`${label} 2`} />
        </InputMask>
      </Box>
      <Box display={"flex"} justifyContent={"center"} margin={1}>
        <h1>{message}</h1>
      </Box>
    </Fragment>
  );
};
