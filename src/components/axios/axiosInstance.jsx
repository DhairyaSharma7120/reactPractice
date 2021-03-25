import axios from 'axios';
const axiousInstance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
});

const aGet = (url)=> axiousInstance.get(url)
const aPost = (url,data)=> axiousInstance.post(url,data)


export {aGet,aPost}