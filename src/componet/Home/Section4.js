import { Grid, Typography } from '@mui/material'
import React from 'react'
import Number from './Number'

function Section4() {
    return (
        <Grid container sx={{ marginTop: "50px", justifyContent: "space-around", backgroundColor: "#e5e5e5", padding: "30px 0px" }}>
            <Grid lg={3} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant='h2' sx={{ fontWeight: "500" ,display:"flex",justifyContent:"center",alignItems:"center"}} >
                <Number number={30} time={10}/>+</Typography>
                <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600", color: "#9f5204" }}>Realized Projects</Typography>
            </Grid>
            <Grid lg={3} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant='h2' sx={{ fontWeight: "500",display:"flex",justifyContent:"center",alignItems:"center" }} >
                <Number number={250} time={10}/>+</Typography>
                <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600", color: "#9f5204" }}>Staff Members</Typography>
            </Grid>
            <Grid lg={3} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant='h2' sx={{ fontWeight: "500" ,display:"flex",justifyContent:"center",alignItems:"center"}} >
                <Number number={10} time={5}/>+</Typography>
                <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600", color: "#9f5204" }}> Offices</Typography>
            </Grid>
            <Grid lg={3} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant='h2' sx={{ fontWeight: "500",display:"flex",justifyContent:"center",alignItems:"center" }} >
                <Number number={450} time={10}/>+</Typography>
                <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600", color: "#9f5204" }}>Local Experts</Typography>
            </Grid>
        </Grid>
    )
}

export default Section4
