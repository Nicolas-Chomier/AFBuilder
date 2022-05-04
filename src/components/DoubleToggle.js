import React, { useState, useEffect } from "react";
import { Card, Switch, CardContent, Typography, Stack } from "@mui/material";

const DoubleToggle = ({ LeftTitle, RightTitle, result }) => {
  const [check, setCheck] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  useEffect(() => {
    result(check);
  }, [check, result]);
  return (
    <Card sx={{ py: 2 }} elevation={5}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography variant="h5" component="h2">
            {LeftTitle}
          </Typography>
        </CardContent>

        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Switch
            {...label}
            size="small"
            onChange={() => {
              setCheck((prevCheck) => !prevCheck);
            }}
          />
        </CardContent>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography variant="h5" component="h2">
            {RightTitle}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default DoubleToggle;
