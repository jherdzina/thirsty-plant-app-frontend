import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Userfront from '@userfront/react';
import NavBar from './components/NavBar.js';
import PlantCard from './components/MyPlantCards'
import { plantOne, plantTwo, plantThree, plantFour, plantFive, plantSix, plantSeven, plantEight } from './utilities/mockdata'
import { ClassNames } from '@emotion/react';
import Grid from '@mui/material/Grid';

const userPlants = [plantOne, plantTwo, plantThree, plantFour, plantFive, plantSix, plantSeven, plantEight];

export default function App() {
  console.log(userPlants)
  return (
    <div>
      <Router>
        <div>
          <NavBar/>
        </div>
      </Router>
        <div>
          <Grid
            container
            spacing={4}
            className={ClassNames.gridContainer}
            justify="center"
          >
            {
              userPlants.map(
                ( plant ) => (
                  < PlantCard className ="card-styling" key={plant.plantId}  altPlantName={plant.altPlantName} plantName={plant.plantName}
                              imageURL={plant.imgURL} roomLocated={plant.roomLocated} wateredLast={plant.wateredLast}
                  />
                ))
            }
          </Grid>
        </div>
    </div>
  );
}