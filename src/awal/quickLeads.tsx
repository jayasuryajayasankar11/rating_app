import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const QuickLeads = () => {
  const formFieldClass = "flex flex-col space-y-1";
  return (
    <div className="">
      <div className="bg-white rounded-md p-6 shadow-md ">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <Typography variant="h6">Quick Leads Creation</Typography>
          <Button variant="outlined" color="primary" size="small">
            Export To Enquiry
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className={formFieldClass}>
            <label className="text-sm font-medium">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <TextField size="small" placeholder="Enter Contact Person Name" />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Organization</label>
            <TextField size="small" placeholder="Enter Organization" />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">City</label>
            <TextField size="small" placeholder="Enter City" />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Value</label>
            <div className="flex gap-2">
              <Select size="small" value="BHD">
                <MenuItem value="BHD">BHD</MenuItem>
              </Select>
              <TextField size="small" placeholder="Enter" />
            </div>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Pipeline</label>
            <Select size="small" value="Pipeline">
              <MenuItem value="Pipeline">Pipeline</MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Owner</label>
            <Select size="small" value="Prashant Shankar Gouli">
              <MenuItem value="Prashant Shankar Gouli">
                Prashant Shankar Gouli
              </MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Expected Close Date</label>
            <TextField size="small" placeholder="DD/MM/YYYY" />
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Visible To</label>
            <Select size="small" value="Item Owner’s Visibility Group">
              <MenuItem value="Item Owner’s Visibility Group">
                Item Owner’s Visibility Group
              </MenuItem>
            </Select>
          </div>
        </div>

        <Typography variant="h6" className="mb-4">
          Person
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className={formFieldClass}>
            <label className="text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <TextField size="small" placeholder="Enter" />
            <Button
              size="small"
              variant="text"
              className="self-start text-xs mt-1"
            >
              + Add Phone
            </Button>
          </div>
          <div className="flex items-end">
            <Select size="small" value="Work">
              <MenuItem value="Work">Work</MenuItem>
            </Select>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Email</label>
            <TextField size="small" type="email" placeholder="Enter Email" />
            <Button
              size="small"
              variant="text"
              className="self-start text-xs mt-1"
            >
              + Add Email
            </Button>
          </div>
          <div className="flex items-end">
            <Select size="small" value="Work">
              <MenuItem value="Work">Work</MenuItem>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className={formFieldClass}>
            <label className="text-sm font-medium">
              Upload Screenshot From Sijilat
            </label>
            <input type="file" className="border p-2 rounded text-sm" />
            <Button size="small" variant="text" className="text-xs mt-2">
              + Add Attachment
            </Button>
          </div>
          <div className={formFieldClass}>
            <label className="text-sm font-medium">Notes</label>
            <TextField
              size="small"
              multiline
              rows={3}
              placeholder="Enter notes"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="contained" color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Create Lead
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickLeads;
