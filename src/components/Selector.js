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

const Selector = ({ title, data, result }) => {
  const displayedData = [...Object.keys(data)];
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
            <InputLabel id="demo-simple-select-label">Device</InputLabel>
            <Select
              defaultValue=""
              autoWidth={true}
              label="ScreenSelector"
              onChange={(e) => {
                result(e.target.value);
              }}
              sx={{ minWidth: 160 }}
            >
              {displayedData.map((name) => (
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

export default Selector;
