// src/components/common/CustomTextField.jsx

import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ label, required, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.9rem] text-[#231F20]">
        {label} {required && "*"}
      </label>
      <TextField
        variant="outlined"
        size="small"
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: "MyFont",
            fontSize: "12px",
            fontWeight:"400"
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "MyFont",
            color: "#4F4C4D",
            opacity: 1,
          },
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextField;
