import React, { useState, useRef } from "react";
import {
  Card,
  CardActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import SelectCustom from "./SelectCustom";

const ElementPanel = ({ data, output }) => {
  // Datas distribution (From JSON):
  const title = data.title;
  const datas = data.data;
  // Return from composant:
  const [selection, setSelecion] = useState(false);
  const textRef = useRef("");
  // Validation datas function to create a object carrying results
  function handleClick() {
    if (selection !== false && textRef !== "") {
      output({
        title: title,
        id: selection["id"],
        name: selection["generic name"],
        categorie: title,
        tag: `${textRef.current?.value}`,
        group: 1,
      });
    } else {
      alert("Something missing !");
    }
  }
  return (
    <Card sx={{ width: "100%" }}>
      <CardActions sx={{ mt: 1, justifyContent: "center" }}>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
      </CardActions>
      <CardActions sx={{ justifyContent: "center" }}>
        <SelectCustom data={datas} output={setSelecion} />
      </CardActions>
      <CardActions sx={{ justifyContent: "center" }}>
        <TextField
          sx={{ width: "15em" }}
          inputRef={textRef}
          inputProps={{ maxLength: 11 }}
          defaultValue={""}
          type="text"
          label="Tag"
          variant="outlined"
        />
      </CardActions>
      <CardActions sx={{ mb: 1, justifyContent: "center" }}>
        <Button variant="contained" onClick={handleClick}>
          Ajouter +1
        </Button>
      </CardActions>
    </Card>
  );
};

export default ElementPanel;
