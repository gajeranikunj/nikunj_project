import { Box, Button, Container } from '@mui/material'
import React from 'react'

function Secsen1() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "500px", md: "550px", lg: "650px", xl: "750px" },
                    overflow: "hidden",
                    position: "relative",
                    marginTop: "-70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <video
                    src='https://Gallopsfoodplaza.in/wp-content/uploads/2023/09/pexels-ivan-samkov-8902154-1080p-1.mp4'
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensure the video fills the container, cropping where necessary
                        objectPosition: "bottom",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                >
                    Your browser does not support the video tag.
                </video>
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: "20",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        top: "0",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >

                    <Container fixed>
                        <Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    fontSize: { xs: "16px", sm: "17px" },
                                    fontWeight: "500",
                                    textTransform: "uppercase",
                                    letterSpacing: "3px"
                                }}
                            >
                                Welcome to
                            </Box>
                            <Box
                                sx={{
                                    fontSize: { xs: "31px", sm: "45px" },
                                    fontWeight: "500",
                                    fontFamily: "Oswald",
                                    textTransform: "uppercase",
                                    lineHeight: { xs: "1", sm: "1.1" },
                                    margin: { xs: "10px 0px", sm: "10px 0px" }
                                }}
                            >
                                antilia restaurant Food Plaza
                            </Box>
                            <Box
                                sx={{
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    fontFamily: "Oswald",
                                    textTransform: "uppercase",
                                    letterSpacing: "3px"
                                }}
                            >
                                We have the world’s best chef dedicated to providing exceptional food service
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Button variant="outlined" sx={{
                                    borderColor: "white", color: "black", fontWeight: "600",
                                    padding: "10px 30px", backgroundColor: "white", '&:hover': {
                                        color: 'white',
                                        backgroundColor: 'transparent',
                                    },
                                }}>CONtACT US</Button>
                            </Box>
                            <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", top: "65%", left: "30%" }}>
                                <Box sx={{ fontSize: "100px", fontWeight: "800", color: "rgba(255,255,255,0.3)" }}>
                                    FOOD
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 100"
                        style={{
                            backgroundColor: "transparent",
                            position: "absolute",
                            zIndex: "99",
                            bottom: "0",
                            width: "100%",
                            height: "30px",
                        }}
                        preserveAspectRatio="none"
                    >
                        <path
                            className="elementor-shape-fill"
                            style={{ fill: "white" }}
                            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
                        ></path>
                    </svg>
                </Box>
            </Box>
        </>
    )
}

export default Secsen1
