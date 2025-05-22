import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import QuickLeads from "./quickLeads";
import LeadForm from "./salesEnquiy";
import printImg from "../awal/assets/svg/print.svg";
import periodImg from "../awal/assets/svg/Calendar.svg";
import downImg from "../awal/assets/svg/Down.svg";
import userImg from "../awal/assets/svg/User.svg";
import exportImg from "../awal/assets/svg/Export.svg";
import shareImg from "../awal/assets/svg/Share.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AwalTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="!p-[1rem] bg-[#F0F1F7] h-[100vh]">
      <div className="w-[100%] flex justify-between">
        <div>
          <ArrowBackIcon />
          Leads Creation
        </div>
        <div className="flex gap-3 !pr-[1.4rem]">
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded text-sm text-[#231f20] hover:bg-[#f0f0f0] flex items-center gap-2">
            Print
            <img src={printImg} alt="print" />
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded text-sm text-[#231f20] hover:bg-[#f0f0f0] flex items-center gap-2">
            <img src={periodImg} alt="print" />
            Period
            <img src={downImg} alt="print" />
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded text-sm text-[#231f20] hover:bg-[#f0f0f0] flex items-center gap-2">
            <img src={userImg} alt="print" />
            User
            <img src={downImg} alt="print" />
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded text-sm text-[#231f20] hover:bg-[#f0f0f0] flex items-center gap-2">
            Share
            <img src={shareImg} alt="print" />
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded text-sm text-[#231f20] hover:bg-[#f0f0f0] flex items-center gap-2">
            Export
            <img src={exportImg} alt="print" />
          </button>
        </div>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <QuickLeads />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <LeadForm />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default AwalTab;
