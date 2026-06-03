import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import FlagSelector from "./flagSelector";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {

        MuiDialog: {
            styleOverrides: {
                root: {
                    '& .MuiDialog-paper': {
                        background: 'linear-gradient(180deg,#F5BD54 0%,#ffffff 100%)',
                        borderRadius: '32px',
                        border: 'none',
                        padding: '1.5rem',
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 500,
                    },
                },
            },
        },

        MuiDialogTitle: {
            styleOverrides: {
                root: {

                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',

                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {

                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 500,


                }
            }
        }

    },
});

function CmntRateModal({ isOpen, sellers, onClose }) {
    const [open, setOpen] = React.useState(isOpen);
    const [sellerRating, setSellerRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Seller Rating:", sellerRating);
        console.log("Comment:", comment);
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
        if (onClose) {
            onClose(); 
        }
    };

    React.useEffect(() => {
        setOpen(isOpen);
        console.log("OPEN NO WORK")
    }, [isOpen]);

  return (
     <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ color: '#421918', fontWeight: 700, fontSize: '2rem' }}>Rate Your Seller</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please take a moment to leave a rating and comment for your sellers before completing checkout.
                    </DialogContentText>
                    <form onSubmit={handleSubmit} id="flagForm">
                        {/* Stars & Sellers Name */}
                        <Form.Group className="my-3" controlId="starsAndSeller">
                            <Rating name="size-medium" value={sellerRating} precision={0.5} onChange={(event, newValue) => { setSellerRating(newValue)}} />
                            <Form.Label id='sellerNameLink'>Seller's Name</Form.Label>
                        </Form.Group>
                        {/* Comment Section */}
                        <Form.Group className="mb-3" >
                            <Form.Label>Leave a review comment</Form.Label>
                            <Form.Control name='flagBody' as="textarea" id='flagTextarea' rows={3} placeholder='ex. The seller is very reliable!' />
                        </Form.Group>
                    </form>
                </DialogContent>
                <DialogActions className='ms-auto'>
                    <Button variant='outline-dark' id='btnOutline' onClick={handleClose}>Cancel</Button>
                    <Button className='customBtn cmntModalBtn' type="submit" form="flagForm">
                        Post Comment
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default CmntRateModal;