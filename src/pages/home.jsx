import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from "../components/ItemListContainer/index"
import imgMan from "../img/menClothes.jpg"
import imgWoman from "../img/womenClothes.jpg"
import oferta from "../img/oferta.jpg"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Home() {

  return (

    <header className="App-header">
      <Box sx={{ flexGrow: 1, marginTop: '5%', marginLeft: '10%' }}>
        <Grid container spacing={2} >
          <Grid xs={12} lg={4} >
            <Cards title={"Hombre"} text={"esta es la ropa de hombre"} image={imgMan} />
          </Grid>
          <Grid xs={12} lg={4}>
            <Cards title={"Mujeres"} text={"esta es la ropa de mujer"} image={imgWoman} />
          </Grid>
          <Grid xs={12} lg={4}>
            <Cards title={"Liquidación"} text={"esta es la ropa de liquidación"} image={oferta} />
          </Grid>
        </Grid>
      </Box>
    </header>

  )

}

export default Home;
