import React from "react";
import {
  Card,
  Select,
  MenuItem,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";

const number = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2];

const Number = ({ title, result }) => {
  return (
    <Card sx={{ py: 1.5, width: "100%" }} elevation={5}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Coef</InputLabel>
            <Select
              defaultValue={1}
              label="ScreenSelector"
              onChange={(e) => {
                result(e.target.value);
              }}
              autoWidth
            >
              {number.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default Number;
