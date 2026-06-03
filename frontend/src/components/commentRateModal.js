import React, { useState, useEffect } from "react";
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
import { useAuth } from "../context/authContext";
import axios from "axios";

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
    const { user, token } = useAuth();

    const [open, setOpen] = React.useState(isOpen);

    const [sellerFeedback, setSellerFeedback] = useState({});
    const [closeMessage, setCloseMessage] = useState('');

    //when the sellers are loaded I initialise the feedback for them all on the first time opening the modal
    useEffect(() => {
        const initial = {};
        sellers.forEach(seller => {
            initial[seller.id] = { rating: 5, comment: '' };
        });
        setSellerFeedback(initial);
    }, [sellers]);


    //When the ratings and comments chnage I have to find the ratings for that spesific user -> I use the id 
    const handleRatingChange = (sellerId, newValue) => {
        setSellerFeedback(prev => ({
            ...prev,
            [sellerId]: { ...prev[sellerId], rating: newValue }
        }));
    };


    const handleCommentChange = (sellerId, newComment) => {
        setSellerFeedback(prev => ({
            ...prev,
            [sellerId]: { ...prev[sellerId], comment: newComment }
        }));
    };

    const postComments = async () => {
        try {
            const res = await Promise.all(
                sellers.map((seller) => {

                    return axios.post("http://localhost:5009/api/comment/add", {
                        sellerID: seller.id,
                        customerID: user.id,
                        commentBody: sellerFeedback[seller.id].comment,
                        customerName: user.name,
                        rating: sellerFeedback[seller.id].rating,
                    }, { headers: { authorization: `Bearer ${token}` } });
                })
            )
            console.log(res.map((result) => result.data));

        } catch (error) {
            console.error("Error fetching flags data:", error)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await postComments(); //because the stuff was updating out oif order and screwing with the ratings 
        setCloseMessage("Rate");
        handleClose();
    };

    const handleNoRate = (e) => {
        e.preventDefault();
        setCloseMessage("No Rate");
        handleClose();
    }

    const handleClose = () => {
        setOpen(false);
        if (onClose) onClose(closeMessage);
    };

    const renderSellers = () => {
        return sellers.map((seller) => (
            <div key={seller.id}> {/*key because it was throwing a tantrum*/}
                {/*rate and name*/}
                <Form.Group className="my-3">
                    <Form.Label id='sellerNameLink'>Rate your seller: {seller.name}</Form.Label>
                </Form.Group>
                <Form.Group className="my-3">
                    {/*gets the rating for the sellers individually based on ID*/}
                    <Rating
                        value={sellerFeedback[seller.id]?.rating ?? 5}
                        precision={0.5}
                        onChange={(e, newValue) => handleRatingChange(seller.id, newValue)}
                    />
                </Form.Group>
                {/*Comment input field*/}
                <Form.Group className="mb-3">
                    <Form.Label>Leave a review comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        id='flagTextarea'
                        rows={3}
                        value={sellerFeedback[seller.id]?.comment ?? ''}
                        placeholder='ex. The seller is very reliable!'
                        onChange={(e) => handleCommentChange(seller.id, e.target.value)}
                    />
                </Form.Group>
                <hr />
            </div>
        ));
    };

    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ color: '#421918', fontWeight: 700, fontSize: '2rem' }}>
                    Rate Your Sellers
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please take a moment to leave a rating and comment for your sellers before completing checkout.
                    </DialogContentText>
                    <form onSubmit={handleSubmit} id="flagForm">
                        {renderSellers()}
                    </form>
                </DialogContent>
                <DialogActions className='ms-auto'>
                    <Button variant='outline-dark' id='btnOutline' onClick={handleNoRate}>Don't rate</Button>
                    <Button className='customBtn cmntModalBtn' type="submit" form="flagForm">
                        Post Comment
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default CmntRateModal;