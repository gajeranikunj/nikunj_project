import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

function Section7() {
    return (
        <>
            <Box>
                <Container fixed>
                    <Box sx={{ marginTop: "18px", fontSize: "50px", fontWeight: "600px", color: "#9f5204", textAlign: "center" }}>
                        Menu
                    </Box>
                    <Box sx={{ width: "200px", height: "3px", backgroundColor: "#9f5204", margin: "auto" }} />

                    <Box sx={{ marginTop: "30px" }}>
                        <Grid container spacing={3}>
                            {/* Menu Item 1 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='./img/food/Daal_makhani.png' />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Daal makhani
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        Welcome! Enjoy our Dal Makhani, a creamy lentil stew made with whole urad dal, slow-cooked overnight for a rich, nutty flavor. A cherished family recipe!
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Menu Item 2 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='./img/food/Masoor_Dal_Makhani.png' />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Masoor Dal Makhani
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        Easy chicken fried rice: stir-fry cooked chicken, leftover rice, soy sauce, and scrambled eggs. Enjoy!
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Menu Item 3 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Mushroom Kadai
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        A delicious mushroom curry cooked with spices and bell peppers. Enjoy the robust flavors!
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='./img/food/img1.png' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Menu Item 4 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Chicken Fried Rice
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        Easy chicken fried rice: stir-fry cooked chicken, leftover rice, soy sauce, and scrambled eggs. Enjoy!
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='./img/food/img2.png' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Menu Item 5 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png' />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Veg Biryani
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        Savor our flavorful Veg Biryani, filled with a medley of vegetables and aromatic basmati rice.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Menu Item 6 */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={4}>
                                            <Box component={"img"} sx={{ width: "150px", borderRadius: "50%" }} src='https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png' />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Box sx={{ width: "100%" }}>
                                                <Box sx={{ margin: "auto", width: "80%" }}>
                                                    <Box sx={{ paddingLeft: "5px", fontSize: "25px", fontWeight: "800", fontFamily: "Prosto One" }}>
                                                        Paneer Butter Masala
                                                    </Box>
                                                    <Box sx={{ fontFamily: "Prosto One", fontSize: "18px", lineHeight: "1.1" }}>
                                                        Rich and creamy paneer curry, cooked with butter and tomatoes. A true delight for vegetarians!
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>

                <Box sx={{ width: "200px", margin: "auto", display: "flex", justifyContent: "center", marginTop: "30px" }} >
                    <Link to={"/menu"} style={{ textDecoration: "none" }}>
                        <Button variant="contained" sx={{
                            backgroundColor: "#9f5204",
                            padding: "5px 20px",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                            ':hover': {
                                backgroundColor: "#9f5204"
                            }
                        }}>Read More <ArrowForwardIosIcon /></Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}

export default Section7;
