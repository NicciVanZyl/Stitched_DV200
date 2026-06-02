import Slider from '@mui/material/Slider'
import React, { useEffect } from 'react';
import Selector from '../components/selectors';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from 'react-bootstrap/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const theme = createTheme({
    components: {


        MuiSelect: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    '.MuiSelect-icon': {
                        color: "#fff",
                    },
                    '.MuiSelect-iconOpen': {
                        color: "#fff",
                    }
                },
            },
        },

        MuiMenu: {
            styleOverrides: {
                root: {
                    '.MuiMenu-paper': {
                        background: '#ED7849',
                        borderRadius: '12px',
                        paddingLeft: '5px', paddingRight: '5px',
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#fff",
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
            },
        },

        //outlines 
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "#fff",
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
function valueLabelFormat(value1, value2) {
    const units = "R";

    return `${units} ${value1} - ${units} ${value2}`;
}
const minDistance = 150;

const marks = [
    {
        value: 0,
        label: "0"
    },
    {
        value: 150,
        label: "150"
    },
    {
        value: 300,
        label: "300"
    },
    {
        value: 500,
        label: "500"
    },
    {
        value: 800,
        label: "800"
    },
    {
        value: 1000,
        label: "1000"
    },
    {
        value: 2000,
        label: "2000"
    },
    {
        value: 3000,
        label: "3000"
    },
    {
        value: 4000,
        label: "4000"
    },
    {
        value: 5000,
        label: "5000"
    },
    {
        value: 6000,
        label: "6000"
    },
    {
        value: 7000,
        label: "7000"
    },
    {
        value: 8000,
        label: "8000"
    },
    {
        value: 9000,
        label: "9000"
    },
    {
        value: 10000,
        label: "10000"
    },
];
const minOptions = [0, 150, 300, 500, 800, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const maxOptions = [150, 300, 500, 800, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

function Sliders({ onChangeValues }) {
    const [value, setValue] = React.useState([0, 10000]);
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(10000);

    const handleChange = (event, newValue, activeThumb) => {
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);

        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
        if (onChangeValues) {
            onChangeValues(value);
        }

    };
    const handleChangeSelectorsMin = (event) => {
        const newMin = event.target.value;
        setValue([newMin, value[1]]);
        setValue1(newMin);
    };

    const handleChangeSelectorsMax = (event) => {
        const newMax = event.target.value;
        setValue([value[0], newMax]);
        setValue2(newMax);
    };

    useEffect(() => {
        if (onChangeValues) {
            onChangeValues(value);
        }
    }, [value,value1,value2])

    return (
        <ThemeProvider theme={theme}>


            <div className='sliderContainer'>
                <p>Price Range {valueLabelFormat(value[0], value[1])}</p>
                <Slider
                    min={0}
                    step={null}
                    max={10000}
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    onChangeCommitted={event => {
                        if (onChangeValues) {
                            onChangeValues(value);
                        }
                    }}
                    valueLabelDisplay="auto"
                    label={false}
                    marks={marks}
                    disableSwap
                    sx={{
                        color: '#ED7849',
                        ".MuiSlider-markLabel": {
                            display: 'none',
                        }
                    }}
                />

                <Stack gap={3}>

                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Min.</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value1}
                            label="Min."
                            onChange={handleChangeSelectorsMin}

                        >
                            {minOptions
                                .filter(option => option < value2)
                                .map(option => (
                                    <MenuItem key={option} value={option}>R{option}</MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Max.</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value2}
                            label="Max."
                            onChange={handleChangeSelectorsMax}
                        >
                            {maxOptions
                                .filter(option => option > value1)
                                .map(option => (
                                    <MenuItem key={option} value={option}>R{option}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Stack>
            </div>
        </ThemeProvider>
    )
}

export default Sliders;