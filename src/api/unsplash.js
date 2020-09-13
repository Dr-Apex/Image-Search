import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hEDs_ZgN_ETZ06S2Il1Zd5dbDW9wLkqweMeiuiEa5cE'
  }
});
