import axios from 'axios'
const KEY = 'AIzaSyB46htx7KBrmUMPLevY5-t8ChM7sRI7pCU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
    params:{
        part: 'snippet',
        maxResults: 5,
        playlistId: "PLi9RQVmJD2fapKJ4DnZzAn55NJfo5IM1c",
        key: KEY
    }
})