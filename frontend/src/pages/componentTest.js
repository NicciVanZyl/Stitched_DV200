import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterListIcon from '@mui/icons-material/FilterList';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const theme = createTheme({

    components: {

        MuiDrawer: {
            styleOverrides: {

                paper: {
                    width: 280,
                    background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
                    boxShadow: '4px 0 24px rgba(124,58,237,0.10)',
                    borderRadius: '0 32px 32px 0',
                },


                root: {
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(31,18,53,0.35)',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },


        MuiList: {
            styleOverrides: {
                root: {
                    padding: '4px 0',
                },
            },
        },

        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: '0 8px',
                    marginBottom: '2px',
                },
            },
        },

    },
});


function FilterBar({ children }) {
    const DRAWER_WIDTH = 280;
    const FilterContent = (
        <Box sx={{ width: DRAWER_WIDTH, p: 2 }}>
            <h5>Filters</h5>
            <Divider sx={{ mb: 2 }} />
            {children}
        </Box>
    );

    const muiTheme = useTheme();
    const isDesktop = useMediaQuery(muiTheme.breakpoints.up('md'));
    const [open, setOpen] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>


                {!isDesktop && (
                    <Box
                        onClick={() => setOpen(true)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 1.25,
                            cursor: 'pointer',
                            borderBottom: '1.5px solid',
                            borderColor: 'divider',
                            backgroundColor: 'background.paper',
                            userSelect: 'none',

                            '&:hover': {
                                backgroundColor: 'primary.light',
                            },

                            transition: 'background 0.15s',
                        }}
                    >

                        <FilterListIcon sx={{ color: 'primary.main', fontSize: 20 }} />

                        <Typography
                            variant="body2"
                            fontWeight={500}
                            sx={{ color: 'primary.main' }}
                        >
                            Filter
                        </Typography>
                    </Box>
                )}
                <Box sx={{ display: 'flex', flexGrow: 1 }}>

                    {!isDesktop && (
                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            {FilterContent}

                        </Drawer>
                    )}


                    {isDesktop && (
                        <Box
                            component="aside"
                            sx={{
                                width: 'fit-content',
                                flexShrink: 0,
                                background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
                                boxshadow: '0.2rem 0.5rem 0.8rem rgba(0, 0, 0, 0.5)',
                                borderRadius: 8,
                                padding: 2,
                                marginLeft: 2,
                            }}
                        >
                            {FilterContent}
                        </Box>
                    )}


                </Box>
            </Box>

        </ThemeProvider>
    );
}
export default FilterBar;