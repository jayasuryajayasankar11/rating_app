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

const LeadForm = () => {
  const formFieldClass = "flex flex-col space-y-1";

  return (
    <div className="bg-white p-5 space-y-8 rounded-md">
      {/* General Information */}
      <div>
        <Typography
          variant="h6"
          className="pb-2 border-b font-medium text-gray-900"
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
          <CustomTextField
              label="Area"
              required
              placeholder="Enter Area"
            />
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
          className="pb-2 border-b font-medium text-gray-900"
        >
          Project
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className={formFieldClass}>
          <CustomTextField
              label="Project Name"
              required
              placeholder="Enter Project Name"
            />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Project Mode</label>
            <Select size="small" displayEmpty value="">
              <MenuItem value="">Select Project Mode</MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Cost Mode</label>
            <Select size="small" displayEmpty value="">
              <MenuItem value="">Select Cost Mode</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      {/* Technical Information */}
      <div>
        <Typography
          variant="h6"
          className="pb-2 border-b font-medium text-gray-900"
        >
          Technical Information
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={formFieldClass}>
              <label className="text-sm font-medium">Field {i + 1}</label>
              <TextField variant="outlined" size="small" />
            </div>
          ))}
        </div>
      </div>

      {/* Material Specification */}
      <div>
        <Typography
          variant="h6"
          className="pb-2 border-b font-medium text-gray-900"
        >
          Material Specification
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={formFieldClass}>
              <label className="text-sm font-medium">
                Material Field {i + 1}
              </label>
              <TextField variant="outlined" size="small" />
            </div>
          ))}
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
