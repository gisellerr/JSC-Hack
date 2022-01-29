import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Pulse from './pulse';
import Breathe from './Breathe';
import Notepad from './Notepad';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  p: 4,
};

export default function JournalModal() {
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
                <Notepad/>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
