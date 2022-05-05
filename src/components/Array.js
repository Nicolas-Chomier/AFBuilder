import React, { useState, useEffect } from "react";
import {
  Button,
  Stack,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Card,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { green } from "@mui/material/colors";

const masterList = [];

const Array = ({ item }) => {
  const [listToDisplay, setListToDisplay] = useState([]);
  //console.log("item", item);
  useEffect(() => {
    if (item !== false) {
      masterList.push(item);
      let i = 0;
      const displayedTable = [];
      displayedTable.length = 0;
      for (const items of masterList) {
        const uniqueId = `IDN-${i}`;
        displayedTable.push(
          <TableRow sx={{ bgcolor: green[400] }} key={uniqueId} id={uniqueId}>
            <TableCell
              align="left"
              size="small"
              padding="normal"
              sx={{
                fontWeight: "bold",
                pl: 8,
              }}
            >
              {items.title}
            </TableCell>
            <TableCell align="center" size="small" padding="normal">
              {items.id}
            </TableCell>
            <TableCell align="center" size="small" padding="normal">
              {items.tag}
            </TableCell>
            <TableCell align="center" size="small" padding="normal">
              <Button
                onClick={() => {
                  const top = document.getElementById("table-body-test");
                  const nested = document.getElementById(uniqueId);
                  const garbage = top.removeChild(nested);
                  return garbage;
                }}
              >
                <DeleteIcon sx={{ fill: "black" }} />
              </Button>
            </TableCell>
          </TableRow>
        );
        i += 1;
      }
      setListToDisplay(displayedTable);
    }
  }, [item]);

  return (
    <Card className="table-custom" sx={{ width: "100%" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody id="table-body-test">{listToDisplay}</TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Card>
  );
};

export default Array;
