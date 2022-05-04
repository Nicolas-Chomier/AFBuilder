import React, { useState, useEffect } from "react";
import { Card, Switch, CardContent, Typography, Stack } from "@mui/material";

const ToggleSwitch = ({ title, result }) => {
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
        spacing={3}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>

        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Switch
            size="small"
            {...label}
            onChange={() => {
              setCheck((prevCheck) => !prevCheck);
            }}
          />
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ToggleSwitch;
