import axios from'axios';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:20,
        key:KEY
    }
});