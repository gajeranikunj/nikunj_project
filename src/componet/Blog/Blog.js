import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Fastsection from '../Fastsection'
import { Box, Container, Grid } from '@mui/material'

function Blog() {

    return (
        <>
            <Nav />
            <Fastsection name={"blog"} url={"https://cdn.pixabay.com/video/2015/10/27/1192-143842659_large.mp4"} />
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_1280.jpg)", width: "100%", height: "300px", backgroundSize: "cover" }} ></Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ fontSize: "30px", marginTop: "10px" }}>
                            dining area
                        </Box>
                        <Box sx={{
                            fontSize: "23px", marginTop: "20px"
                        }}>
                            The dining area features sleek wooden tables paired with plush seating, complemented by soft, ambient lighting. Large windows offer a view of the bustling street outside, bringing a sense of life into the space. The walls are adorned with local art, creating a gallery-like feel.
                        </Box>
                    </Grid>




                    <Grid item xs={12} sm={6}>
                        <Box sx={{ fontSize: "30px", marginTop: "10px" }}>
                            dining area
                        </Box>
                        <Box sx={{
                            fontSize: "23px", marginTop: "20px"
                        }}>
                            The dining area features sleek wooden tables paired with plush seating, complemented by soft, ambient lighting. Large windows offer a view of the bustling street outside, bringing a sense of life into the space. The walls are adorned with local art, creating a gallery-like feel.
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg)", width: "100%", height: "300px", backgroundSize: "cover" }} ></Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default Blog
