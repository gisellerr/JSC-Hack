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
import Countdown from './Countdown';
import WaterBottle from './WaterBottle';
import Stretch1 from '../img/stretch1.gif';
import Stretch2 from '../img/stretch2.gif';
import Stretch3 from '../img/stretch3.gif';


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
  var stretchSource=[Stretch2, Stretch3]
  var index=0;

  setInterval(function(){
    if(index==stretchSource.length){
      index=0;
    }
    document.getElementById("stretchImage").src=stretchSource[index];
    index++;
  },15000);


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} sx={{color: 'white' }}/>
          <Tab label="History" {...a11yProps(1)} sx={{color: 'white' }}/>
          <Tab label="Message" {...a11yProps(2)} sx={{color: 'white' }}/>
          <Tab label="Countdown" {...a11yProps(3)} sx={{color: 'white' }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Background/>
        <h1>Today's Objectives</h1>
        <BasicList />
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2} >
      <div class="center">
          <div class="message">
            <h1>Okay you've had enough screen time!<br></br>
              Go outside, get some fresh air and come back when you're ready :)</h1>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h1>Okay lets stretch</h1>
      <div class="center">
        <img src={Stretch1} alt="loading" id="stretchImage"/>
      </div>
        <Countdown/>
      </TabPanel>
      <TabPanel value={value} index={10} class="stars">
      <Breathe/>
      <Pulse/>
      </TabPanel>
    </Box>
  );
}
