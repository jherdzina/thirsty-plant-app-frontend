import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Userfront from '@userfront/react';
import NavBar from './components/NavBar.js';
import PlantCard from './components/MyPlantCards'
import { plantOne, plantTwo, plantThree, plantFour, plantFive, plantSix, plantSeven, plantEight } from './utilities/mockdata'
import { ClassNames } from '@emotion/react';
import Grid from '@mui/material/Grid';

Userfront.init("8b68mprb");

const userPlants = [plantOne, plantTwo, plantThree, plantFour, plantFive, plantSix, plantSeven, plantEight];

export default function App() {
  console.log(userPlants)
  function ShowUserPlants() {
    if (Userfront.user && Userfront.user.hasOwnProperty('data') && Userfront.user.data.hasOwnProperty("userPlants") ) {
      return Userfront.user.data.userPlants.map(
        ( plant ) => (
          < PlantCard className ="card-styling" key={plant.plantId}  altPlantName={plant.altPlantName} plantName={plant.plantName}
                      imageURL={plant.imgURL} roomLocated={plant.roomLocated} wateredLast={plant.wateredLast}
          />
        ))
    } else {
      return <div></div>
    }

  }
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
            paddingLeft="4.5em"
          >
            
            < ShowUserPlants />  
            <div className="spacer"/>
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