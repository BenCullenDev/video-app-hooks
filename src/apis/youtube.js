import axios from 'axios';

const KEY = 'AIzaSyDlTS4fq2OI8IJypAgho8iP4pob5veq-CM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})