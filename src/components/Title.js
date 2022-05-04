import React, { useState, useEffect, useRef } from "react";
import { Card, TextField, CardContent, Typography, Stack } from "@mui/material";

const Title = ({ title, result }) => {
  const textFieldRef = useRef("");
  const [ref, setRef] = useState(false);
  useEffect(() => {
    if (textFieldRef.current?.value !== "") {
      result(ref);
    }
  }, [ref, result]);
  return (
    <Card sx={{ py: 1.5 }} elevation={5}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <TextField
            size="small"
            id="outlined-basic"
            label="Project name"
            variant="outlined"
            inputRef={textFieldRef}
            inputProps={{ maxLength: 20 }}
            type="text"
            onChange={() => {
              setRef(textFieldRef.current?.value);
            }}
          />
        </CardContent>
      </Stack>
    </Card>
  );
};

export default Title;
