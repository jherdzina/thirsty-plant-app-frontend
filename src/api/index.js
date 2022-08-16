import plantWatered from '../utilities/userfront.js'

export function testPost(plant, d) {
    let url = 'https://afternoon-savannah-22384.herokuapp.com/plants';
    var response = fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers:{
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "*, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Allow-Credentials": "true",
        'Content-Type': 'application/json'
      }
    }).then(res => res.text()).then(res => console.log('Success:', d)).catch(error => console.error('Error:', error));
    plantWatered(plant, d);
  }

