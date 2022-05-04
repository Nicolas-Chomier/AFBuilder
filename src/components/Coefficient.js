import React from "react";
import {
  Card,
  Slider,
  Box,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

const Coefficient = ({ title, result }) => {
  const handleChange = (event, newValue) => {
    result(newValue);
  };

  return (
    <Card sx={{ py: 2 }} elevation={5}>
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

        <CardContent
          className="slider-tile"
          sx={{ p: 0, "&:last-child": { pb: 0 } }}
        >
          <Box width={100}>
            <Slider
              color="primary"
              defaultValue={1}
              aria-label="Default"
              size="small"
              valueLabelDisplay="auto"
              step={0.1}
              min={1}
              max={2}
              onChange={handleChange}
            />
          </Box>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default Coefficient;
