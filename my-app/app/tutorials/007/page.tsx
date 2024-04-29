import { ListItemText, MenuItem, TextField, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MUI Input: TextField",
};

const selectValues = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
];

// TODO: display: block が機能しない事象の調査と解消
export default function Page() {
  return (
    <>
      <Typography variant="h3">MUI Input: TextField</Typography>
      <TextField
        className="block m-4"
        label="outlined"
        variant="outlined"
        disabled
      >
        outlined input
      </TextField>
      <TextField
        className="block m-4"
        label="standard"
        variant="standard"
        select={true}
      >
        {selectValues.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className="block m-4"
        label="filled"
        variant="filled"
        select={true}
        SelectProps={{ native: true }}
      >
        {selectValues.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </TextField>
    </>
  );
}
