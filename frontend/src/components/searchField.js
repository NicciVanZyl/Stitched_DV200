import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {


        MuiAutocomplete: {
            styleOverrides: {
                //label colours
                root: {
                    '& .MuiInputLabel-root': {
                        color: '#000',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#000',
                    },
                },

                //input 
                input: {
                    fontSize: '16px',
                    color: '#000',
                    '&:hover': {
                        borderColor: '#ED7849',
                        borderWidth: '2px',
                    },
                },

            },
        },

        //outlines 
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '32px',
                    height: '3rem',
                    '& fieldset': {
                        borderColor: '#ED7849 !important',
                        borderWidth: '0',
                    },
                    '&:hover fieldset': {
                        borderColor: '#ED7849 !important',
                        borderWidth: '2px',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#ED7849 !important',
                        borderWidth: '2px',
                    },
                    '&.Mui-error fieldset': {
                        borderColor: 'rgb(233, 56, 56) !important',
                        borderWidth: '2px',
                    },
                    background: '#FAFAFA',
                },
            },
        },

        //little label 
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#000',
                    background: 'transparent',
                    borderRadius: '12px 12px 0 0',
                    paddingLeft: '5px', paddingRight: '5px',
                    '&.Mui-focused': { color: '#19838A', background: 'transparent', borderRadius: '12px 12px 0 0', paddingLeft: '5px', paddingRight: '5px', },
                    '&.Mui-error': { color: 'rgb(255, 125, 125)' },
                },
            },
        },

    },
});


export default function SearchField({ value, isError, errorText, onChangeVal }) {

    const [val, setVal] = useState(value || '');

    return (
        <ThemeProvider theme={theme}>
            <TextField
                sx={{
                    width: '100%',
                }}
                placeholder='Search...'
                type='text'
                value={val}
                onChange={(event) => {
                    setVal(event.target.value);
                    if (onChangeVal) {
                        onChangeVal(event.target.value)
                    };
                }}
                error={isError}
                helperText={errorText}
                slotProps={{
                    input: {
                        startAdornment:

                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#000' }} />
                            </InputAdornment>

                    },
                }}
            />
        </ThemeProvider>
    );
}