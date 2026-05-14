import react, { useState, useEffect, use } from "react";
import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField";
import '../App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {


    MuiAutocomplete: {
      styleOverrides: {
        //label colours
        root: {
          '& .MuiInputLabel-root': {
            color: '#fff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#fff',
          },
        },
        //the dropdown's styling stuff
        paper: {
          borderRadius: '0 0 24px 24px',
          borderColor: '#421918',
          borderWidth: '2px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
          background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
        },

        //scrolling part little bar
        listbox: {

          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-thumb': {
            background: '#421918', //scrollbar colour
            borderRadius: '3px',
          },
        },

        //hover and selected options 
        option: {
          borderRadius: '6px',
          fontSize: '16px',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
          },

          '&.Mui-focused': {
            background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)', //colour of focused row
            color: '#fff',//colour of focused text
            fontWeight: 600,
          },

          '&[aria-selected="true"]': {
            background: 'linear-gradient(180deg,rgb(252, 157, 119) 0%,rgb(228, 125, 85) 100%)',
            color: '#fff',
            fontWeight: 700,
          },
          '&[aria-selected="true"]:hover': {
            background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
          },

          '&[aria-selected="true"].Mui-focused': {
            background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
          },
        },

        //x icon
        clearIndicator: {
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
            color: '#000'
          },
        },

        //dropdown icon
        popupIndicator: {
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
            color: '#000'
          },
        },
        //input 
        input: {
          fontSize: '16px',
          color: '#fff',
        },

      },
    },

    //outlines 
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '32px',
          '& fieldset': {
            borderColor: 'transparent',
            borderWidth: '0',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
             borderColor: 'transparent',
          },
          '&.Mui-error fieldset': {
            borderColor: 'rgb(233, 56, 56)',
          },
          background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
        },
      },
    },

    //little label 
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-focused': { color: '#fff', background:'rgba(237, 120, 73, 1)',borderRadius:'12px 12px 0 0', paddingLeft:'5px', paddingRight:'5px',},
          '&.Mui-error': { color: 'rgb(255, 125, 125)' },
        },
      },
    },

  },
});

function Selector({ defaultVal, onSelectItem, options }) {

  return (
    <ThemeProvider theme={theme}>

      <Autocomplete className="selector"
        defaultValue={defaultVal}
        onChange={(event, value) => {
          if (!value) return;
          if (onSelectItem) {
            onSelectItem = value;
          }
        }}
        disablePortal
        options={options}
        getOptionLabel={(option) => option.label || ""}
        sx={{ 
          width: '100%',
          marginBottom:'1em',
          marginTop:'2em',
         }}
        renderInput={(params) => <TextField {...params} label={defaultVal} />}

      />
    </ThemeProvider>
  )
}



export default Selector;