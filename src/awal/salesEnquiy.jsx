import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import CustomTextField from "./inputComp";
import CustomSelect from "./selectComp";

const LeadForm = () => {
  const formFieldClass = "flex flex-col space-y-1";

  return (
    <div className="bg-white p-5 space-y-8 rounded-md">
      {/* General Information */}
      <div>
        <Typography
          variant="h6"
          className="flex justify-between items-center mb-6 border-b pb-1 border-[#e5e9eb]"
        >
          General Information
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className={formFieldClass}>
            <CustomTextField
              label="Customer Name"
              required
              placeholder="Enter Customer Name"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Building Name"
              required
              placeholder="Enter Building Name"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Road Number"
              required
              placeholder="Enter Road Number"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField label="Area" required placeholder="Enter Area" />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Telephone Number"
              required
              placeholder="Enter Telephone Number"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Mobile Number"
              required
              placeholder="Enter Mobile Name"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Fax Number"
              required
              placeholder="Enter Fax Number"
            />
          </div>
          <div className={formFieldClass}>
            <CustomTextField
              label="Email ID"
              required
              placeholder="Enter Email ID"
            />
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div>
        <Typography
          variant="h6"
          className="flex justify-between items-center mb-6 border-b pb-1 border-[#e5e9eb]"
        >
          Project
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className={formFieldClass}>
            <CustomTextField
              label="Project Name"
              required
              placeholder="Enter Project Name"
            />
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Project Mode">
              <MenuItem value="">Select Project Mode</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Cost Mode">
              <MenuItem value="">Select Cost Mode</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
        </div>
      </div>

      {/* Technical Information */}
      <div className="!bg-[#F2FDFF]">
        <Typography
          variant="h6"
          className="flex justify-between items-center mb-6 border-b pb-1 border-[#e5e9eb] "
        >
          Technical Information
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Sign Type">
              <MenuItem value="">Select Sign Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Material">
              <MenuItem value="">Select Materials</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Material Thickness">
              <MenuItem value="">Select Material Thickness</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Material Grade">
              <MenuItem value="">Select Material Grade</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Type">
              <MenuItem value="">Select Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Letter Return">
              <MenuItem value="">Select Letter Return</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Profile">
              <MenuItem value="">Select Profile</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Illumination Type">
              <MenuItem value="">Select Illumination Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="ATM">
              <MenuItem value="">Select ATM</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Media">
              <MenuItem value="">Select Media</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Lamination">
              <MenuItem value="">Select Lamination Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Digital Printing">
              <MenuItem value="">Select Lamination Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Reflective">
              <MenuItem value="">Select Reflective</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Embroidery">
              <MenuItem value="">Select Embroidery</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Paint Finish">
              <MenuItem value="">Select Cost Mode</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Maintenance">
              <MenuItem value="">Select Cost Mode</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Cloth Type">
              <MenuItem value="">Select Cloth Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={`${formFieldClass} col-span-3 `}>
            <TextField
              variant="outlined"
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: "MyFont",
                  color: "#4F4C4D",
                  opacity: 1,
                },
              }}
              placeholder="Describe Cloth Type"
            />
          </div>
          <div className={formFieldClass}>
            <CustomSelect value={""} label="Product Type">
              <MenuItem value="">Select Product Type</MenuItem>
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </CustomSelect>
          </div>
          <div className={`${formFieldClass} col-span-3 `}>
            <TextField
              variant="outlined"
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "MyFont",
                  fontSize: "12px",
                  fontWeight: "400",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: "MyFont",
                  color: "#4F4C4D",
                  opacity: 1,
                },
              }}
              placeholder="Describe Product Type"
            />
          </div>
        </div>
      </div>

      {/* Material Specification */}
      <div>
        <Typography
          variant="h6"
          className="flex justify-between items-center mb-6 border-b pb-1 border-[#e5e9eb] "
        >
          Material Specification
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className={formFieldClass}>
            <CustomTextField
              label="Previous Costing Estimation Number"
              required
              placeholder="Enter Estimation Number"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="Quotation Number"
              required
              placeholder="Enter Quotation Number"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="LPO Number"
              required
              placeholder="Enter LPO Number"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="Competitor (If Any)"
              required
              placeholder="Enter Here"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="Other Specific Information"
              required
              placeholder="Enter Here"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="Height of Installation in Mtrs "
              required
              placeholder="Enter in Mtrs"
            />
          </div>
        <div className={formFieldClass}>
            <CustomTextField
              label="Previous Costing Estimation Number"
              required
              placeholder="Enter Estimation Number"
            />
          </div>
        </div>
      </div>

      {/* Draw Section */}
      <div className="flex gap-4 mt-4">
        <Button
          variant="contained"
          color="primary"
          startIcon={<img src="/leads/assets/svg/editlight.svg" />}
        >
          Draw
        </Button>
        <Button
          variant="outlined"
          startIcon={<img src="/leads/assets/svg/keyBoard.svg" />}
        >
          Type
        </Button>
        <Button
          variant="outlined"
          startIcon={<img src="/leads/assets/svg/Export.svg" />}
        >
          Upload
        </Button>
      </div>

      {/* Notes Text Area */}
      <div className={formFieldClass}>
        <label className="text-sm font-medium">Notes</label>
        <textarea
          className="w-full border rounded p-2 text-sm"
          rows={6}
          placeholder="Enter additional notes here..."
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Create Lead
        </Button>
      </div>
    </div>
  );
};

export default LeadForm;
