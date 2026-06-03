import react, { useState, useEffect, use } from "react";
import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
import '../App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {

    MuiChip: {
      styleOverrides: {
        root: {
          //Background
          background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
          borderRadius: '32px',
          height: '28px',

          // Text
          color: '#fff',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: '"Montserrat", sans-serif',

          // Hover 
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(211, 89, 40, 1) 0%,rgba(180, 60, 20, 1) 100%)',
          },

          //Focused
          '&.Mui-focusVisible': {
            background: 'linear-gradient(180deg,rgba(211, 89, 40, 1) 0%,rgba(180, 60, 20, 1) 100%)',
          },
        },

        //label text
        label: {
          color: '#000',
          paddingLeft: '16px',
          paddingRight: '12px',
        },

        //x icon
        deleteIcon: {
          color: 'rgba(255,255,255,0.7)',
          fontSize: '16px',
          '&:hover': {
            color: '#fff',
          },
        },
      },
    },
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
          color: '#421918',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
            color: '#fff',
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
            background: '#ED7849',
          },
        },

        //x icon
        clearIndicator: {
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
            color: '#421918'
          },
        },

        //dropdown icon
        popupIndicator: {
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
            color: '#421918'
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
          background: '#ED7849',
        },
      },
    },

    //little label 
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          background: '#ED7849',
          borderRadius: '12px 12px 0 0',
          paddingLeft: '5px', paddingRight: '5px',
          '&.Mui-focused': { color: '#fff', background: '#ED7849', borderRadius: '12px 12px 0 0', paddingLeft: '5px', paddingRight: '5px', },
          '&.Mui-error': { color: 'rgb(255, 125, 125)' },
        },
      },
    },

  },
});

function Selector({multiple, defaultVal, onSelectItem, options }) {

  return (
    <ThemeProvider theme={theme}>

      <Autocomplete className="selector"
        defaultValue={[]}
        multiple = {multiple}
        limitTags={1}
        onChange={(event, value) => {
          if (!value) return;
          if (onSelectItem) onSelectItem(value);
        }}
        disablePortal
        options={options}
        getOptionLabel={(option) => option.label}
        sx={{
          width: '100%',
          marginBottom: '1em',
          marginTop: '2em',
        }}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label={defaultVal}
            placeholder={defaultVal}

          />
        )}

      />
    </ThemeProvider>
  )
}



export default Selector;