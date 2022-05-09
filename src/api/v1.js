import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9000', // <--host url
});

export const getReq = '/persons'; // <-- route for get persons
export const postReq = '/persons'; // <-- route for post person
export const putReq = '/persons'; // <-- route for update person
export const deleteReq = '/persons'; // <-- route for delete person
