import axios from 'axios';
const axiousInstance = axios.create({
  baseURL: `http://localhost:8000`
});

const aGet = (url)=> axiousInstance.get(url)
const aPost = (url,data)=> axiousInstance.post(url,data)


export {aGet,aPost}