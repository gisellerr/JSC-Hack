import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
// import Modal from './Modal'
// import Backdrop from './Backdrop'
import BreatheModal from './BreatheModal';
import JournalModal from './JournalModal';
import WaterBottle from './WaterBottle';
import ConfettiExplosion from 'react-confetti-explosion';
var totalChecked=0;
var allDone=false;

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState();


  const handleChange = (event) => {
    setChecked(event.target.checked);

    if(typeof checked=="undefined" || checked==false){ //this means that it is checked
      totalChecked=totalChecked+1;
    }else{
      totalChecked=totalChecked-1;
    }

    if(totalChecked==4){
      allDone=true;
    }
    if(allDone){
      document.getElementById("finalMessage").style.display="block";
    }

  };




  return (
    <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{
        color: 'white',
        '&.Mui-checked': {
          color: 'white',
        },
      }}
    />
  );
}

export default function BasicList(props) {
    // const [modalOpen, setModalOpen ] = React.useState(false);
    // function Breathe() {
    //     setModalOpen(true);
    // }
    
      return (
        
        <Box className="center" sx={{ width: '100%', maxWidth: 360 }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      <ControlledCheckbox/>
                  </ListItemIcon>
                  <ListItemText primary="Breathe" />
                  <BreatheModal/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ControlledCheckbox/>
                  </ListItemIcon>
                  <ListItemText primary="Daily Stretch" />
                  
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ControlledCheckbox/>
                  </ListItemIcon>
                  <ListItemText primary="Journal Entry" />
                  <JournalModal/>
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ControlledCheckbox/>
                  </ListItemIcon>
                  <ListItemText primary="Drink Water" />
                  <div><WaterBottle/></div>
                  <div><WaterBottle/></div>
                  <div><WaterBottle/></div>
                  <div><WaterBottle/></div>
                </ListItemButton>
              </ListItem>
            </List>
            <div id="finalMessage" class="stars">
              <div class="center">
                <div class="message">
                <ConfettiExplosion />
                  <h1>Okay, you've had enough screen time!<br></br><ConfettiExplosion />
                    Go outside, get some fresh air and come back when you're ready :)</h1>
                    
                </div>
              </div>
            </div>
          </nav>
          
        </Box>
      );
  }