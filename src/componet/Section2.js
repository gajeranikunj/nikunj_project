import { Box, Container, Divider, Grid } from '@mui/material'
import React from 'react'
// import "./gotopbtn.css"

function Secsen2() {

  return (
    <>
      <Container fixed sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", border: "1px solid rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center", width: "45px", height: "45px", color: "rgba(0,0,0,0.5)" }}>
                  1
                </Box>
                <Box sx={{ width: "85%", height: "1px", backgroundColor: "rgba(0,0,0,0.3)" }}>
                </Box>
              </Box>


              <Box>
                <Box sx={{ fontSize: "25px", fontWeight: "600", fontFamily: "Oswald", marginTop: "20px" }}>
                  CONSULTANCY
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600", marginTop: "10px", color: "rgba(0,0,0,0.7)" }}>
                  We support the achievement of hospitality goals. We provide assistance to those who are fresh to this industry using our expertise.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", border: "1px solid rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center", width: "45px", height: "45px", color: "rgba(0,0,0,0.5)" }}>
                  2
                </Box>
                <Box sx={{ width: "85%", height: "1px", backgroundColor: "rgba(0,0,0,0.3)" }}>
                </Box>
              </Box>


              <Box>
                <Box sx={{ fontSize: "25px", fontWeight: "600", fontFamily: "Oswald", marginTop: "20px" }}>
                  Hospitality
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600", marginTop: "10px", color: "rgba(0,0,0,0.7)" }}>
                  Our expert team can do all tasks without difficulty and with satisfaction, providing the best service for our customers. </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", border: "1px solid rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center", width: "45px", height: "45px", color: "rgba(0,0,0,0.5)" }}>
                  3
                </Box>
                <Box sx={{ width: "85%", height: "1px", backgroundColor: "rgba(0,0,0,0.3)" }}>
                </Box>
              </Box>


              <Box>
                <Box sx={{ fontSize: "25px", fontWeight: "600", fontFamily: "Oswald", marginTop: "20px" }}>
                  Food Malls
                </Box>
                <Box sx={{ fontSize: "16px", fontWeight: "600", marginTop: "10px", color: "rgba(0,0,0,0.7)" }}>
                  We have successfully opened five additional locations and established a substantial presence in the food mall industry. </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
     
    </>
  )
}

export default Secsen2