import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Section = styled('section')(({ theme }) => ({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    width: '100%',
    marginBottom: theme.spacing(5),
}));

const Image = styled('img')({
    width: '100%',
});

const AboutText = styled('div')({
    color: '#f5f5f5',
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
}));

const Section5 = () => {
    const theme = useTheme();

    return (
        <Section id="about" sx={{
            marginTop: "40px"
        }}>
            <Container fixed>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item lg={6} xs={12}>
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/80/bc/dc/interiors.jpg?w=600&h=-1&s=1"
                            alt="About"
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <AboutText>
                            <Title sx={{ fontSize: "33px", fontWeight: "600",color:"#9f5204" }}>Our Services</Title>
                            <Box sx={{ fontSize: "17px", color: "black" }}>
                                Our restaurant services aim to deliver an exceptional dining experience. We offer a diverse menu featuring fresh, locally sourced ingredients, complemented by attentive service. Whether you’re celebrating a special occasion or enjoying a casual meal, we cater to your needs in a warm atmosphere. Plus, our takeout and catering options let you enjoy our culinary creations wherever you are. Join us for a memorable experience!
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{ textTransform: 'capitalize', marginTop: "20px",backgroundColor:"#9f5204" }}
                            >
                                Read more
                            </Button>
                        </AboutText>
                    </Grid>

                </Grid>
            </Container>
        </Section>
    );
};

export default Section5;
