// src/components/common/CustomTextField.jsx

import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ label, required, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label} {required && "*"}
      </label>
      <TextField
        variant="outlined"
        size="small"
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: "MyFont",
            fontSize: "14px",
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "MyFont",
            color: "gray",
            opacity: 1,
          },
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextField;
