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
      className="rounded-t-[0]"
    >
      {value === index && (
        <Box sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          {children}
        </Box>
      )}
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
    <div className="flex flex-col h-[100vh] w-[100%]">
      <div className="h-[8vh] w-[100%] text-center !bg-[#ffffffcc]">
        Nav Bar
      </div>

      <div className="flex bg-[#F0F1F7] h-[92vh] w-[100%]">
        <div className="h-[100%]  min-w-[260px] !p-[1rem] !bg-[#F9F9FB]">
          Side Bar
        </div>
        <div className="h-[100%] !p-[1rem] w-[100%]">
          <div className="w-[100%] flex justify-between !mb-[1rem]">
            <div className="flex gap-4 text-[1.3rem] !font-[600] items-center">
              <ArrowBackIcon />
              Leads Creation
            </div>
            <div className="flex gap-3 !pr-[1.4rem] ">
              <button className="bg-white border border-[#0000001A] px-3 py-1.5 rounded text-sm text-[#231F20] hover:bg-[#f0f0f0] flex items-center gap-2">
                Print
                <img src={printImg} alt="print" />
              </button>
              <button className="bg-white border border-[#0000001A] px-3 py-1.5 rounded text-sm text-[#231F20] hover:bg-[#f0f0f0] flex items-center gap-2">
                <img src={periodImg} alt="print" className="!w-[0.9rem]" />
                Period
                <img src={downImg} alt="print" />
              </button>
              <button className="bg-white border border-[#0000001A] px-3 py-1.5 rounded text-sm text-[#231F20] hover:bg-[#f0f0f0] flex items-center gap-2">
                <img src={userImg} alt="print" />
                User
                <img src={downImg} alt="print" />
              </button>
              <button className="bg-white border border-[#0000001A] px-3 py-1.5 rounded text-sm text-[#231F20] hover:bg-[#f0f0f0] flex items-center gap-2">
                Share
                <img src={shareImg} alt="print" />
              </button>
              <button className="bg-white border border-[#0000001A] px-3 py-1.5 rounded text-sm text-[#231F20] hover:bg-[#f0f0f0] flex items-center gap-2">
                Export
                <img src={exportImg} alt="print" />
              </button>
            </div>
          </div>
          <div>
            <Box>
              <Box sx={{}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                    "& .Mui-selected": {
                      backgroundColor: "#fff",
                      //  #F4F8FF
                      color: "#0070B9 !important",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      boxShadow: 2,
                    },
                    padding: "0px",
                  }}
                >
                  <Tab
                    label="Quick Leads"
                    {...a11yProps(0)}
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                      color: "#231F20",
                    }}
                  />
                  <Tab
                    label="Sales Enquiry"
                    {...a11yProps(1)}
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                      color: "#231F20",
                    }}
                  />
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
      </div>
    </div>
  );
};

export default AwalTab;
