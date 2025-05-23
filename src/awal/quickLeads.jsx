import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import exportIcon from "../awal/assets/svg/ExportBlue.svg";
import CustomTextField from "./inputComp";

const QuickLeads = () => {
  const formFieldClass = "flex flex-col space-y-1";
  return (
    <div className="">
      <div className="bg-white rounded-md rounded-tl-[0] !py-5 shadow-md ">
        <div className="flex justify-between items-center mb-6 border-b pb-1 border-[#e5e9eb] px-7">
          <Typography variant="h9">Quick Leads Creation</Typography>
          <Button
            variant="outlined"
            size="small"
            className="text-[#0070B9] !normal-case !border-[#0070B9]"
          >
            Export To Enquiry{" "}
            <img src={exportIcon} alt="export" className="mx-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-7">
          <div className={formFieldClass}>
            <CustomTextField
              label="Contact Person"
              required
              placeholder="Enter Contact Person Name"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Organization"
              placeholder="Enter Organization"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField label="City" placeholder="Enter City" />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-mediutext-[0.9rem] text-[#231F20]">
              Value
            </label>
            <div className="flex gap-2 ">
              <Select
                size="small"
                value="BHD"
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
                <MenuItem
                  value="BHD"
                  sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
                >
                  BHD
                </MenuItem>
              </Select>
              <TextField
                size="small"
                placeholder="Enter"
                sx={{
                  "& .MuiInputBase-input": {
                    // fontFamily: "MyFont",
                    fontSize: "12px",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    // fontFamily: "MyFont",
                    color: "#4F4C4D",
                    opacity: 1,
                  },
                }}
                fullWidth
              />
            </div>
          </div>
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">Pipeline</label>
            <Select
              size="small"
              value="Pipeline"
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
              <MenuItem
                value="Pipeline"
                sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
              >
                Pipeline
              </MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">Owner</label>
            <Select
              size="small"
              value="Prashant Shankar Gouli"
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
              <MenuItem
                value="Prashant Shankar Gouli"
                sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
              >
                Prashant Shankar Gouli
              </MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">
              Expected Close Date
            </label>
            <TextField
              size="small"
              placeholder="DD/MM/YYYY"
              sx={{
                "& .MuiInputBase-input": {
                  // fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  // fontFamily: "MyFont",
                  color: "#4F4C4D",
                  fontSize: "12px",

                  opacity: 1,
                },
              }}
            />
          </div>
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">Visible To</label>
            <Select
              size="small"
              value="Item Owner's Visibility Group"
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
                  color: "gray",
                  opacity: 1,
                },
              }}
            >
              <MenuItem
                value="Item Owner's Visibility Group"
                sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
              >
                Item Owner's Visibility Group
              </MenuItem>
            </Select>
          </div>
        </div>

        <div className="mb-6 border-b pb-1 border-[#e5e9eb] px-7">
          <Typography variant="h9" className="mb-4">
            Person
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 items-center px-7">
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">
              Phone <span className="text-red-500">*</span>
            </label>
            <TextField
              size="small"
              placeholder="Enter"
              sx={{
                "& .MuiInputBase-input": {
                  // fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  // fontFamily: "MyFont",
                  color: "#4F4C4D",
                  opacity: 1,
                },
              }}
            />
            <Button
              size="small"
              variant="text"
              className="self-start !text-[0.6rem] mt-1"
            >
              + Add Phone
            </Button>
          </div>
          <div className="flex items-end">
            <Select
              size="small"
              value="Work"
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
                  color: "gray",
                  opacity: 1,
                },
              }}
            >
              <MenuItem
                value="Work"
                sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
              >
                Work
              </MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-[0.9rem] text-[#231F20]">Email</label>
            <TextField
              size="small"
              type="email"
              placeholder="Enter Email"
              sx={{
                "& .MuiInputBase-input": {
                  // fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  // fontFamily: "MyFont",
                  color: "#4F4C4D",
                  opacity: 1,
                },
              }}
            />
            <Button
              size="small"
              variant="text"
              className="self-start !text-[0.6rem] mt-1"
            >
              + Add Email
            </Button>
          </div>
          <div className="flex items-end">
            <Select
              size="small"
              value="Work"
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
                  color: "gray",
                  opacity: 1,
                },
              }}
            >
              <MenuItem
                value="Work"
                sx={{ fontSize: "0.8rem", color: "#4F4C4D" }}
              >
                Work
              </MenuItem>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-6 px-7">
          <div className={`${formFieldClass} col-span-1`}>
            <label className="text-[0.9rem] text-[#231F20] mb-1">
              Upload Screenshot From Sijilat
            </label>
            <div className="flex rounded overflow-hidden border border-gray-300 w-full">
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
              />
              <label
                htmlFor="upload"
                className="bg-white text-gray-700 text-sm px-3 py-2 cursor-pointer w-full border-r border-gray-300"
              >
                Browse
              </label>
              <Button
                variant="contained"
                className="!bg-[#1A1A1A] !normal-case !rounded-none !text-white px-4"
                size="small"
                onClick={() => console.log("Upload triggered")}
              >
                Upload
              </Button>
            </div>
          </div>

          <div className={`${formFieldClass} col-span-3`}>
            <label className="text-[0.9rem] text-[#231F20]">Notes</label>
            <TextField
              size="small"
              placeholder="Enter notes"
              sx={{
                "& .MuiInputBase-input": {
                  // fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  // fontFamily: "MyFont",
                  color: "#4F4C4D",
                  opacity: 1,
                },
              }}
              fullWidth
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 px-7">
          <Button
            variant="text"
            className="!text-[black] !bg-[#e4e2e2] !normal-case !px-[0.8rem]"
          >
            Cancel
          </Button>
          <Button variant="contained" className=" !bg-[#0070B9] !normal-case">
            Create Lead
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickLeads;
