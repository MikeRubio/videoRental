import { useContext } from "react";

import parse from 'html-react-parser';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import RentContext from '../context/RentContext';

const ActionDialog = ({ openDialog, setOpenDialog, video }) => {
    const { addVideoToRented } = useContext(RentContext);

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleDialogAcccept = () => {
        addVideoToRented(video)
        setOpenDialog(false);
    }

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Would you like to rent <span style={{ color: '#008fbe' }}>{parse(video.title)}</span> Movie?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By renting you agree to not distribute this film and to consume it's content only from this platform
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleDialogClose}>Disagree</Button>
                    <Button variant='outlined' color='success' onClick={handleDialogAcccept} autoFocus>
                        Rent
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ActionDialog