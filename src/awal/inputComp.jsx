// src/components/common/CustomTextField.jsx

import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ label, required, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.9rem] text-[#231F20]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <TextField
        variant="outlined"
        size="small"
        sx={{
          "& .MuiInputBase-input": {
            fontSize: "12px",
            fontWeight: "400",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#4F4C4D", // <-- set color here
            opacity: 1, // ensures it's fully visible
            fontSize: "12px"
          },
          "& .MuiInputBase-input": {
            color: "#4F4C4D !important",
          },
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextField;
