import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import Fastsection from '../Fastsection';
import Nav from '../Nav';
import Footer from '../Footer';
// C:\Users\ABC\AppData\Local\Microsoft\Windows\INetCache\IE\SWDBUDK1
function Menu() {
    const data = [
        {
            name: 'Food',
            subdata: [
                {
                    name: 'Daal makhani',
                    url: './img/food/Daal_makhani.png',
                    price: '$255',
                },
                {
                    name: 'Masoor Dal Makhani',
                    url: './img/food/Masoor_Dal_Makhani.png',
                    price: '$350',
                },
                {
                    name: 'Mushroom Kadai',
                    url: './img/food/img1.png',
                    price: '$199',
                },
                {
                    name: 'Chicken Fried Rice',
                    url: './img/food/img2.png',
                    price: '$255',
                },
                {
                    name: 'Pizza',
                    url: './img/food/img4.png',
                    price: '$499',
                },
                {
                    name: 'French fries',
                    url: './img/food/img7.png',
                    price: '$249',
                },
                {
                    name: 'Spice Noodles',
                    url: './img/food/img9.png',
                    price: '$149',
                },
            
            ],
        }, {
            name: 'Drink',
            subdata: [
                {
                    name: 'Dessert drink milk food',
                    url: './img/drink/d1.png',
                    price: '$49',
                },
                {
                    name: 'Sting Energy Drink',
                    url: './img/drink/d2.png',
                    price: '$50',
                },
                {
                    name: 'Tasty Three Fruit Shakes',
                    url: './img/drink/d3.png',
                    price: '$199',
                },
                {
                    name: 'green tea',
                    url: './img/drink/d4.png',
                    price: '$150',
                },
                {
                    name: 'Watermelon juice',
                    url: './img/drink/d5.png',
                    price: '$99',
                },
                {
                    name: 'Orange Juice',
                    url: './img/drink/d6.png',
                    price: '$149',
                },
          
                {
                    name: 'Mojito Cocktail Juice',
                    url: './img/drink/d7.png',
                    price: '$120',
                },

            ],
        },
    ];

    window.scrollTo({ top: 0, behavior: 'instant' });

    return (
        <>
            <Nav />
            <Fastsection
                name={'Menu'}
                url={
                    'https://media.istockphoto.com/id/1352878646/video/4k-video-footage-of-a-waitress-delivering-food-to-a-group-of-friends.mp4?s=mp4-640x640-is&k=20&c=QgWGegHl88ON7-yJfI8Lx9ZohIJZMa2NAGNFWSa6dqo='
                }
            />
            <Box>
                <Container fixed>

                    <Box sx={{ marginTop: '30px' }}>
                        {data.map((category) => (
                            <React.Fragment key={category.name}>
                                <Box
                                    sx={{
                                        marginTop: '18px',
                                        fontSize: '50px',
                                        fontWeight: '600',
                                        color: '#9f5204',
                                        textAlign: 'center',
                                    }}
                                >
                                    {category.name}
                                </Box>
                                <Box
                                    sx={{
                                        width: '200px',
                                        height: '3px',
                                        backgroundColor: '#9f5204',
                                        margin: 'auto',
                                    }}
                                ></Box>

                                <Grid container spacing={3} sx={{ marginTop: "25px" }}>
                                    {category.subdata.map((item) => (
                                        <Grid item xs={12} sm={6} key={item.name} sx={{
                                            transition: "0.3s",
                                            ':hover': {
                                                scale: "1.04"
                                            }
                                        }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
                                                    padding: '15px',
                                                }}
                                            >
                                                <Box
                                                    sx={{ backgroundSize: "contain", backgroundPosition: "center center", backgroundRepeat: "no-repeat", width: '150px', height: "150px", borderRadius: '50%', backgroundImage: `url(${item.url})` }}
                                                />
                                                <Box sx={{ width: '80%' }}>
                                                    <Box sx={{ margin: 'auto', width: '80%' }}>
                                                        <Box
                                                            sx={{
                                                                paddingLeft: '5px',
                                                                fontSize: {xs:'16pxpx',sm:"25px"},
                                                                fontWeight: '800',
                                                                fontFamily: 'Prosto One',
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                fontSize: {xs:"20px",sm:'20px'},
                                                                lineHeight: '1.1',
                                                                marginTop: '15px',
                                                                fontWeight: '900',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Box>{item.price}</Box>
                                                            <Button
                                                                variant="contained"
                                                                sx={{
                                                                    fontSize: '15px',
                                                                    padding: '10px 40px',
                                                                    lineHeight: '1',
                                                                    backgroundColor: '#9f5204',
                                                                }}
                                                            >
                                                                Buy
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default Menu;
