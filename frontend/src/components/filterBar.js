import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FilterListIcon from '@mui/icons-material/FilterList';
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
                            background: 'linear-gradient(180deg,rgba(255, 206, 113, 1) 0%,rgba(241, 160, 9, 1) 100%)',
                            userSelect: 'none',
                            borderRadius: '8px',

                            '&:hover': {
                                background: 'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
                                color: '#fff',
                            },

                            transition: 'all 0.3s ease',
                        }}
                    >

                        <FilterListIcon sx={{ fontSize: 20 }} />

                        <Typography
                            variant="body2"
                            fontWeight={500}
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
                                height:'45em'
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