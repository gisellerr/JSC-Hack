import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop } from '@mui/material';
import Pulse from './pulse';
import Breathe from './Breathe';
import Countdown from './Countdown';
import Stretch1 from '../img/stretch1.gif';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Stretch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" size="small" sx={{color: 'white', borderColor:'white' }}>Let's Do It!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Box sx={style}>
            <div>
                <h1 >Okay lets get up and do some stretching :)</h1>
                <div class="center">
                    <img src={Stretch1} alt="loading" id="stretchImage"/>
                </div>
                    <Countdown/>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
