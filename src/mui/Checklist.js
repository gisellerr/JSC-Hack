import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WaterBottle from './WaterBottle';

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{color: 'white' }}
    />
  );
}

export default function BasicList() {
    return (
        
      <Box className="center" sx={{ width: '100%', maxWidth: 360 }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Meditate" />
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
                <ListItemText primary="Today's Journal Entry" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlledCheckbox/>
                </ListItemIcon>
                <WaterBottle/>

              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        
      </Box>
    );
  }