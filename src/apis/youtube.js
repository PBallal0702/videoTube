import axios from'axios';
const KEY ='AIzaSyAZhMJzUgP1Kbr2HQKh2GJUsKOhOtomnJ4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:20,
        key:KEY
    }
});