import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'

function Section6() {
    return (
        <Box sx={{
            backgroundImage: "url(https://hot-link.ru/upload/medialibrary/1.jpg)",
            minHeight: { xs: "500px", sm: "700px" },
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // backgroundBlendMode: "multiply",
            position: "relative"
        }}>


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    zIndex: "99",
                    top: "0",
                    width: "100%",
                    height: "30px",
                    rotate: "180deg"
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



            <Container sx={{ height: { xs: "500px", sm: "750px" }, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Grid container sx={{ width: { xs: "90%", md: "98%" } }}>
                    <Grid md={6} sx={{ display: { xs: "none", md: "block" } }}>

                    </Grid>
                    <Grid md={6} xs={12} sx={{ backgroundColor: "#EFEFEF", padding: { xs: "10px", sm: "81px" } }}>
                        <Box sx={{ fontSize: { xs: "25px", sm: "45px" }, fontWeight: "700", }}>
                            we serve best food of world
                        </Box>
                        <Box sx={{ fontSize: { xs: "18px", sm: "20px" }, fontWeight: "300", marginTop: "30px" }}>
                            Welcome to Baste & Feast, where flavor takes center stage! Our menu showcases mouthwatering grilled meats and fresh, vibrant vegetables, all infused with our signature baste. Enjoy a cozy atmosphere ideal for family dinners or friendly gatherings. Come savor a dining experience that delights your taste buds and warms your heart!
                        </Box>

                        <Button sx={{
                            color: "white", padding: { xs: "5px 15px", sm: "10px 25px" }, backgroundColor: "#9f5204",
                            '&:hover': {
                                backgroundColor: '#b25f0c',
                            }, marginTop: "30px"
                        }}>
                            Request our brochure
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Section6