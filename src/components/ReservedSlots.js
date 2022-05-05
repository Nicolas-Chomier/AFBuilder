import React, { useState, useEffect } from "react";
import {
  Card,
  Select,
  MenuItem,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Stack,
  Grid,
} from "@mui/material";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
const refObj = { NI: 0, NO: 0, AI: 0, AO: 0 };

const ReservedSlots = ({ title, result }) => {
  const [ref1, setRef1] = useState(0);
  const [ref2, setRef2] = useState(0);
  const [ref3, setRef3] = useState(0);
  const [ref4, setRef4] = useState(0);
  const minWidth = 65;
  useEffect(() => {
    refObj.NI = ref1;
    refObj.NO = ref2;
    refObj.AI = ref3;
    refObj.AO = ref4;
    result(refObj);
  }, [ref1, ref2, ref3, ref4, result]);
  return (
    <Card elevation={5}>
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
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6} md="auto" lg="auto">
              <CardContent>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">NI</InputLabel>
                  <Select
                    defaultValue=""
                    label="SlotNumbers"
                    onChange={(e) => {
                      setRef1(e.target.value);
                    }}
                    autoWidth={true}
                    sx={{ minWidth: minWidth }}
                  >
                    {numbers.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Grid>
            <Grid item xs={6} sm={6} md="auto" lg="auto">
              <CardContent>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">NO</InputLabel>
                  <Select
                    defaultValue=""
                    label="SlotNumbers"
                    onChange={(e) => {
                      setRef2(e.target.value);
                    }}
                    autoWidth={true}
                    sx={{ minWidth: minWidth }}
                  >
                    {numbers.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Grid>
            <Grid item xs={6} sm={6} md="auto" lg="auto">
              <CardContent>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">AI</InputLabel>
                  <Select
                    defaultValue=""
                    label="SlotNumbers"
                    onChange={(e) => {
                      setRef3(e.target.value);
                    }}
                    autoWidth={true}
                    sx={{ minWidth: minWidth }}
                  >
                    {numbers.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Grid>
            <Grid item xs={6} sm={6} md="auto" lg="auto">
              <CardContent>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">AO</InputLabel>
                  <Select
                    defaultValue=""
                    label="SlotNumbers"
                    onChange={(e) => {
                      setRef4(e.target.value);
                    }}
                    autoWidth={true}
                    sx={{ minWidth: minWidth }}
                  >
                    {numbers.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Grid>
          </Grid>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ReservedSlots;
