import React, { useState } from 'react'
import { Box } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Gotop() {
    const [show, setshow] = useState((window.scrollY + window.innerHeight - 10 > window.innerHeight));
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight - 10 > window.innerHeight) {
            setshow(true);
        } else {
            setshow(false);
        }
    });



    return (
        <>
            <Box onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
            }} sx={{
                zIndex: "9999",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#00cbcb",
                display: show ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                bottom: "50px",
                right: "50px"
            }} >
                <KeyboardArrowUpIcon />
            </Box>
        </>
    )
}

export default Gotop