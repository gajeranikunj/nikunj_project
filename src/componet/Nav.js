import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['HOME', 'MENU', 'BLOG', 'GALLERY', 'CONTACT'];

function Nav() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);


    const [Ccolor, setCcolor] = useState((window.scrollY + window.innerHeight - 700 > window.innerHeight));
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight - 700 > window.innerHeight) {
            setCcolor(true);
        } else {
            setCcolor(false);
        }
    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };






    return (
        <Box sx={{
            position: "sticky",
            left: "0",
            top: "10px",
            width: "100%",
            zIndex: "999"
        }}>
            <Container fixed>
                <AppBar sx={{
                    width: "100%",
                    margin: "auto",
                    position: "relative",
                    borderRadius: "50px",
                    justifyContent: "space-between",
                    background: Ccolor ? "rgba(0, 0, 0, 0.25);" : "rgba(255, 255, 255, 0.25);",
                    backdropFilter: "blur( 14.5px );",
                    WebkitBackdropFilter: "blur( 14.5px );",
                    border: "1px solid rgba( 255, 255, 255, 0.18 );"
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                                <img src="./img/logo.png" alt="Logo" width="150px" />
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    sx={{ margin: { sm: "auto" } }}
                                >
                                    <MenuIcon sx={{ color: "#D4B26A" }} />
                                </IconButton>
                                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, width: "100px" }}>
                                    <img src="./img/logo.png" alt="Logo" style={{ margin: "auto", width: "150px" }} />
                                </Box>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    keepMounted
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white', display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <Button
                                        onClick={handleOpenUserMenu}
                                        sx={{
                                            color: "white",
                                            padding: { xs: "5px 10px", sm: "7px 15px" },
                                            fontSize: { sm: "15px", xs: "10px" },
                                            backgroundColor: "#CA8E46",
                                            '&:hover': {
                                                backgroundColor: "#B77A3E"
                                            }
                                        }}
                                    >
                                        RESERVATION
                                    </Button>
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar >
            </Container>

        </Box >
    );
}

export default Nav;