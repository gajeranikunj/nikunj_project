import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Footer from "../Footer";
import Nav from "../Nav";
import Fastsection from "../Fastsection";

function GALLERY() {
    window.scrollTo({ top: 0, behavior: "instant" });

    const images = [
        "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1447_2_1427807210.jpg?tr=w-800,h-800",
        "https://cdn.pixabay.com/photo/2024/04/06/04/15/ai-generated-8678599_960_720.jpg",
        "https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=3b2f5e70873746d98cd312c67bc50bfe",
        "https://avatars.mds.yandex.net/i?id=0f7065b513af6737226a3d0c085a97bd92da67db-8174067-images-thumbs&n=13",
        "https://i.pinimg.com/originals/c2/82/01/c2820130d15be5669e6258d5bf83212b.jpg",
        "https://images.deliveryhero.io/image/fd-my/LH/xpk2-hero.jpg",
        "https://yandex-images.clstorage.net/gl4nj9248/25cddbwAp-aX/TGzCdiiuU2aYzbJETmAxzOPnmwC0iQy1ca43oarxAkLiVw6iPchjprRoMiOApHCfv19WwxCdDxyGWQAt8UKyolioBjKJa-ai2QjyxH4wEBk31orFFMzdEVSbx9HcYrXF4DTpASpKdCFQeDe2sMDh-uq6tWXB_a85dr2jeESWZLXdnJGlPtxAp4z9Emb9cCPIMRb5NTSuToSWnqGEb1HnhqNVqRIb6XbR0zi1d8PzxkroivZUhQwfuYVNUhik1qSlf55Qx0w88FSujxNkbjJyKUNVuGdEvg9EJk9wRc0CNSewNkjROuq3kcHbd4QRw3SZmsqHFNSOTAmH70LqpUWlVE1MU2Zu_JAWnG1z9g9gMRiwVXilF12NRkSfsdQPINe2cHaKsDhLVfDR2RV0wxBkW3qJFNdHrgzplWyyGbbEd4UML7Nlb3zyNI0tM_aPgFHJUmSoFwSPzwSlDqNEXeOG5JOWe5GYGkSjA_jnx8OxFGgratbmpc_f65RtQeqGlUVkb7-h9y_uwdW-HvEmbzMj2hAEWAY1jp0HJB5gBK7S1MeRhVmiO5q3sZJ5JzXiQYQb2DrnlaVvnYj2r2ILxVTVRa4egCVcHLNFHsxyFv0jUzqzNLs2tqyedCf_MiZvoeXGoAQ7Qnu7pBPQyQY0oFOV-9ootFZ2fa87x26jO6d0p7VNP4AHf3_Rl14McCXMErDKkqa6VybevPcGn0FkTUDEl2MmKyI663TDoYgUBIGzhHhquyU0JQ8ceEcMQyv1ROWGPo_xto7ec_TdvrNXDGNCihOXKMZWbW1GBoyjVDzAJtVAR8sxikjXwDB6BhSwUQW6ShhF5WeML8v3HyMYNcRXxl0cYSVsD6AGnK8g5o1A49tRtblXFPx-h9a-QZR-EYdncqRZMvqK5cLy-LekwOLHmnk41NUW3N5aRN8yGrVHZscvbjElfuyyhP0fIPZsMIEbc1UIVFV93XUkLAO2E",
        "https://as2.ftcdn.net/v2/jpg/02/09/33/37/1000_F_209333738_dePp9zEjyxAOaYhph4G8n7XkSU8CGgAk.jpg",
        "https://i0.wp.com/healthyliving.natureloc.com/wp-content/uploads/2018/01/prawn-curry-recipe-natureloc2.jpg",
        "https://lossaboresdemexico.com/wp-content/uploads/2016/09/Cacerola-de-huevos-y-papas-picante.jpg",
        "https://i.pinimg.com/736x/ac/c6/3e/acc63e6a6682a99fb35de7ee5eb5682e.jpg"
    ];

    const restaurantNames = [
        "chinese samosa", "jumbo sandwich", "french fries", "samosa", "Aloo gobhi", "Nasi lemak", "Tajine", "Recipe Jalbiteworldfood",
        "Shrimp curry", "Shakshouka", "Kaju Paneer Masala"
    ];

    return (
        <>
            <Nav />
            <Fastsection name={"GALLERY"} url={"https://cdn.pixabay.com/video/2023/06/29/169349-841069126_large.mp4"} />
            <Container fixed>

                <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                    <Grid container spacing={2}>
                        {images.slice(0, 3).map((src, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 2,
                                        boxShadow: 2,
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        sx={{
                                            width: "100%",
                                            height: "300px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            "&:hover": {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', fontSize: "28px" }}>
                                            {restaurantNames[index]}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                        {images.slice(3, images.length).map((src, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 2,
                                        boxShadow: 2,
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        sx={{
                                            width: "100%",
                                            height: "300px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            "&:hover": {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', fontSize: "28px" }}>
                                            {restaurantNames[index]}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Footer />
        </>
    );
}

export default GALLERY;
