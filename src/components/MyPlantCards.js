import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import OpacityIcon from '@mui/icons-material/Opacity';
import Typography from '@mui/material/Typography';
import { plantWatered, addPlantToUserfront } from '../utilities/userfront.js';
import { testPost } from '../api/index.js';
import PothosImage from '../assets/images/pothos-unsplash.jpg'
import SnakePlantImage from '../assets/images/snakeplant-unsplash.jpg'
import FiddleLeafImage from '../assets/images/fiddleleaf-unsplash.jpg'
import StringPearlImage from '../assets/images/stringofpearls-unsplash.jpg'
import HinduRopeImage from '../assets/images/hinduropeplant.webp'
import ChristmasCactusImage from '../assets/images/christmascactus.jpg'
import ZZPlantImage from '../assets/images/zzplant-unsplash.jpg'
import PhilodendronImage from '../assets/images/philodendron-unsplash.jpg'
import DatePicker from 'react-date-picker'

function pickImg(plant) {
  if (plant === "Pothos") {
    console.log("found Pothos");
    return PothosImage;
  } else if (plant === "Snake Plant") {
    return SnakePlantImage;
  } else if (plant === "Fiddle Leaf Fig") {
    return FiddleLeafImage;
  } else if (plant === "String of Pearls") {
    return StringPearlImage;
  } else if (plant === "Hindu Rope Plant") {
    return HinduRopeImage;
  } else if (plant === "Christmas Cactus") {
    return ChristmasCactusImage;
  } else if (plant === "ZZ Plant") {
    return ZZPlantImage;
  } else if (plant === "Philodendron") {
    return PhilodendronImage;
  }
}

export default function PlantCard(props) {
  const testBackendPost = function sendPlantDetails() {
    let plantDetails = {
      "altPlantName": props.altPlantName,
      "plantName": props.plantName,
      "roomLocated": props.roomLocated,
      "wateredLast": props.wateredLast,
    }
    testPost(plantDetails)
  }
  const addToUser = function addPlantToUser() {
    let plantDetails = {
      "altPlantName": props.altPlantName,
      "plantName": props.plantName,
      "roomLocated": props.roomLocated,
      "wateredLast": props.wateredLast,
    }
    addPlantToUserfront(plantDetails)
  }
  return (
    <span>
      <Card className = "cards-container" sx={{ minWidth: 345, maxWidth: 345 }} >
        <CardMedia
          component="img"
          height="140"
          src={pickImg(props.plantName)}
          alt="plant image"
        />
        <Button variant="text" onClick={addToUser}>add</Button>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.plantName} 
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
          {props.altPlantName} <br/> Room: {props.roomLocated} <br/> Last watered: {props.wateredLast}
          </Typography>
        </CardContent>
        <CardActions>
          {/* 

            Back End:
              backEndFunc(plantWatered)
                  let NewWaterDate = today
                  mongodb wayToWriteYourUser'sNewWaterDate // This is to store for the user for next time
          */}
          
          <IconButton size="small" aria-label="Watered Plant" onClick={testBackendPost} color="primary" ><OpacityIcon/></IconButton>
          <Button size="small" color="success">Facts about {props.plantName}</Button>
        </CardActions>
      </Card>
    </span>
  );
}
