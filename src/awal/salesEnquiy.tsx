// src/components/LeadForm.tsx
import React from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from '@mui/material';

const LeadForm = () => {
  return (
    <div className="bg-white h-[70vh] overflow-y-scroll p-5 space-y-8 rounded-md">
      {/* General Information */}
      <div>
        <Typography variant="h6" className="pb-2 border-b font-medium text-gray-900">General Information</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <TextField label="Customer Name *" variant="outlined" size="small" />
          <TextField label="Building Number" variant="outlined" size="small" />
          <TextField label="Road Number" variant="outlined" size="small" />
          <TextField label="Area" variant="outlined" size="small" />
          <TextField label="Telephone Number" variant="outlined" size="small" />
          <TextField label="Mobile Number *" variant="outlined" size="small" />
          <TextField label="Fax Number" variant="outlined" size="small" />
          <TextField label="Email ID" variant="outlined" size="small" />
        </div>
      </div>

      {/* Project Information */}
      <div>
        <Typography variant="h6" className="pb-2 border-b font-medium text-gray-900">Project</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <TextField label="Project Name *" variant="outlined" size="small" />
          <FormControl size="small">
            <InputLabel>Project Mode</InputLabel>
            <Select label="Project Mode">
              <MenuItem value="">Select Project Mode</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel>Cost Mode</InputLabel>
            <Select label="Cost Mode">
              <MenuItem value="">Select Cost Mode</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Add more sections below in the same pattern (Technical, Material Specification, etc.) */}

      {/* Draw Section */}
      <div className="flex gap-4 mt-4">
        <Button variant="contained" color="primary" startIcon={<img src="/leads/assets/svg/editlight.svg" />}>Draw</Button>
        <Button variant="outlined" startIcon={<img src="/leads/assets/svg/keyBoard.svg" />}>Type</Button>
        <Button variant="outlined" startIcon={<img src="/leads/assets/svg/Export.svg" />}>Upload</Button>
      </div>

      {/* Notes Text Area */}
      <div>
        <textarea
          className="w-full border rounded p-2 text-sm"
          rows={6}
          placeholder="Enter additional notes here..."
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button variant="outlined" color="secondary">Cancel</Button>
        <Button variant="contained" color="primary">Create Lead</Button>
      </div>
    </div>
  );
};

export default LeadForm;
