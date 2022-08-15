//import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:5001', headers: {'Access-Control-Allow-Origin': '*'} });

// export const testPost = () => API.get('/plants');

export function testPost() {
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
    }).then(res => res.text()).then(response => console.log('Success:', response)).catch(error => console.error('Error:', error));
    console.log(response)
  }