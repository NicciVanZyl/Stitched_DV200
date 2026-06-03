import * as React from 'react';
import Button from "react-bootstrap/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FlagSelector from './flagSelector';
import Form from 'react-bootstrap/Form';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from "axios";
import { useAuth } from '../context/authContext';

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
export default function FlagModal({ isOpen, setClosed, postID }) {
    const [open, setOpen] = React.useState(isOpen);
    const [selectedFlags, setSelectedFlag] = React.useState([])
    const { token } = useAuth();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (setClosed) {
            setClosed(false)
        }
    };

    const createFlagEntry = async (reason, body) => {
        try {
            const res = await axios.post(`http://localhost:5009/api/flag/add`, {
                reason: reason,
                listingId: postID,
                flagBody: body
            }, { headers: { authorization: `Bearer ${token}` } });

            console.log(res.data);

        } catch (error) {
            console.log(error.response?.data?.message);

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const reasons = selectedFlags;
        console.log(reasons);
        const body = formJson.flagBody;
        console.log(body);
        createFlagEntry(reasons, body)
        handleClose();
    };

    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);


    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ color: '#421918', fontWeight: 700, fontSize: '2rem' }}>Flag This Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Flagging this post means it will be put under review by our admins and could potentially be removed.
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