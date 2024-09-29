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

const Section3 = () => {
  const theme = useTheme();

  return (
    <Section id="about" sx={{
      marginTop: "20px"
    }}>
      <Container fixed>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item lg={6} xs={12}>
            <AboutText>
              <Title sx={{ fontSize: "33px", fontWeight: "600", color: "#9f5204" }}>Our Mission</Title>
              <Box sx={{ fontSize: "17px", color: "black" }}>
                Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse
              </Box>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: 'capitalize', marginTop: "20px" ,backgroundColor:"#9f5204"}}
              >
                Read more
              </Button>
            </AboutText>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Image
              src="https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM="
              alt="About"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Section3;
