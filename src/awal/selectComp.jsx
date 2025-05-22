import React from "react";
import { Select, MenuItem } from "@mui/material";

const CustomSelect = ({ children, label }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">{label}</label>
        <Select
          size="small"
          value={""}
          displayEmpty
          sx={{
            fontFamily: "MyFont",
            fontSize: "12px",
            "& .MuiSelect-select": {
              fontFamily: "MyFont",
              fontSize: "14px",
            },
            "& .MuiSelect-root::placeholder": {
              fontFamily: "MyFont",
              color: "gray",
              opacity: 1,
            },
          }}
        >
          {children}
        </Select>
      </div>
    </>
  );
};

export default CustomSelect;
