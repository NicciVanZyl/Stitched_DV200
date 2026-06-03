import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FlagSelector from "./flagSelector";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function CmntRateModal() {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const reasons = selectedFlags;
    console.log(reasons);
    const body = formJson.flagBody;
    console.log(body);
    handleClose();
  };

  return (
     <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Rate Your Seller</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please take a moment to rate your seller.
                    </DialogContentText>
                    <form onSubmit={handleSubmit} id="flagForm">
                        <Form.Group className="my-3" controlId="flagReasons">
                            <FlagSelector onSelectItem={setSelectedFlag} defaultVal={"Reasons"} options={[
                                { reason: 'Counterfeit', id: 0 },
                                { reason: 'Misleading', id: 1 },
                                { reason: 'Prohibited Item', id: 2 },]

                            }></FlagSelector>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Explain why this post is being flagged</Form.Label>
                            <Form.Control name='flagBody' as="textarea" id='flagTextarea' rows={3} placeholder='ex. The images are AI generated...' />
                        </Form.Group>
                    </form>
                </DialogContent>
                <DialogActions className='ms-auto'>
                    <Button variant='outline-dark' id='btnOutline' onClick={handleClose}>Cancel</Button>
                    <Button className='customBtn flagModalBtn' type="submit" form="flagForm">
                        Submit Flag
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default CmntRateModal;