import { Box, Container } from '@mui/material'
import React from 'react'

function Fastsection(props) {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "300px", md: "350px", lg: "450px", xl: "500px" },
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <video
                    src={props.url}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensure the video fills the container, cropping where necessary
                        objectPosition: "center",
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
                        backgroundColor: "rgba(0,0,0,0.7)",
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
                                    fontSize: { xs: "31px", sm: "45px" },
                                    fontWeight: "500",
                                    fontFamily: "Oswald",
                                    textTransform: "uppercase",
                                    lineHeight: { xs: "1", sm: "1.1" },
                                    margin: { xs: "10px 0px", sm: "10px 0px" }
                                }}
                            >
                             {props.name}
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
                            style={{ fill: "#EFEFEF" }}
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

export default Fastsection
