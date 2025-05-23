import React from "react";
import { Select, MenuItem } from "@mui/material";

const CustomSelect = ({ children, label }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-[0.9rem] text-[#231F20]">{label}</label>
        <Select
          size="small"
          value={""}
          displayEmpty
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            "& .MuiSelect-select": {
              //   fontFamily: "MyFont",
              fontSize: "12px",
              color: "#4F4C4D",
            },
            "& .MuiSelect-root::placeholder": {
              //   fontFamily: "MyFont",
              color: "#4F4C4D",
              fontSize: "12px",
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
