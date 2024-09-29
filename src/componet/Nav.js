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
import { Link } from 'react-router-dom';


const pages = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'BLOG', path: '/blog' },
    { name: 'GALLERY', path: '/GALLERY' },
    { name: 'CONTACT', path: '/contact' }
];

function Nav() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);



    const [Ccolor, setCcolor] = useState((window.scrollY + window.innerHeight - 300 > window.innerHeight));
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight - 300 > window.innerHeight) {
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
            position: "fixed",
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
                    background: "#40250a",
                    backdropFilter: "blur( 14.5px );",
                    WebkitBackdropFilter: "blur( 14.5px );",
                    border: "1px solid rgba( 255, 255, 255, 0.18 );"
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                                <img src="./img/logo5.png" alt="Logo" width={"50px"} />
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
                                    <img src="./img/logo5.png" alt="Logo" style={{ margin: "auto", width: "50px" }} />
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
                                        <Link to={page.path} style={{ textDecoration: "none" }} key={page.name}>
                                            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                                <Typography sx={{ textAlign: 'center', color: "#40250a" }}>{page.name}</Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
                                {pages.map((page) => (
                                    <Link to={page.path}
                                        key={page.name}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color: 'white', display: 'block',
                                            }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <Link to={"/RESERVATION"}>
                                        <Button
                                            onClick={handleOpenUserMenu}
                                            sx={{
                                                color: "white",
                                                padding: { xs: "5px 10px", sm: "7px 15px" },
                                                fontSize: { sm: "15px", xs: "10px" },
                                                backgroundColor: "#9f5204",
                                                '&:hover': {
                                                    backgroundColor: "#b25f0c"
                                                }
                                            }}
                                        >
                                            RESERVATION
                                        </Button>
                                    </Link>
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