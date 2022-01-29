import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Background from './Background';
import Pulse from './pulse';
import Breathe from './Breathe';
import BasicList from './Checklist';
import WaterBottle from './WaterBottle'
import wip from '../img/wip.gif'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} sx={{color: 'white' }}/>
          <Tab label="History" {...a11yProps(1)} sx={{color: 'white' }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Background/>
        <h1>Today's Objectives</h1>
        <BasicList />
        
      </TabPanel>
      <TabPanel value={value} index={1} >
        <h1>Work In Progress</h1>
        <img src={wip} alt="Work in Progress..." className="center" />
      </TabPanel>
      <TabPanel value={value} index={2} class="stars">
      <Breathe/>
      <Pulse/>
      </TabPanel>
    </Box>
  );
}
